// Lead Alchemist (GoHighLevel API v2) client for the free-estimate form (used by api/estimate.ts).
// Server-side only: the token comes from the GHL_PRIVATE_TOKEN env var (a Private Integration
// token for Reed's sub-account) and never reaches the browser.

const API = 'https://services.leadconnectorhq.com';
const VERSION = '2021-07-28';

export type EstimateLead = {
  name: string;
  phone: string;
  email: string;
  project: string;
  insurance_claim: string;
  timeline: string;
  town: string;
  details: string;
  lead_channel: string;
  lead_source: string;
  lead_medium: string;
  lead_campaign: string;
  first_channel: string;
  landing_page: string;
  gclid: string;
  page: string;
};

// Form value → the names a matching custom field is likely to have in the sub-account.
// Matching ignores case, spaces and punctuation and checks both the field name and its key
// (contact.project_type). A value with no matching field still lands in the contact note.
export const FIELD_CANDIDATES: Record<keyof EstimateLead, string[]> = {
  project: ['project type', 'type of project', 'project', 'service', 'service type', 'service needed', 'service requested'],
  insurance_claim: ['insurance claim', 'is this an insurance claim', 'insurance', 'claim'],
  timeline: ['timeline', 'project timeline', 'start date', 'when do you want to start', 'start timeline'],
  town: ['property location', 'project location', 'property town', 'town', 'location', 'service area'],
  details: ['project details', 'details', 'project description', 'description', 'message', 'additional details', 'notes'],
  lead_channel: ['lead channel', 'channel'],
  lead_source: ['lead source', 'utm source'],
  lead_medium: ['utm medium', 'lead medium'],
  lead_campaign: ['utm campaign', 'campaign'],
  first_channel: ['first channel', 'first touch channel'],
  landing_page: ['landing page'],
  gclid: ['gclid', 'google click id'],
  page: ['form page', 'submitted from'],
  name: [],
  phone: [],
  email: [],
};

type CustomField = { id: string; name: string; fieldKey?: string; dataType?: string; picklistOptions?: string[] };

const norm = (s = '') => s.toLowerCase().replace(/^contact\./, '').replace(/[^a-z0-9]/g, '');

function headers(token: string) {
  return { Authorization: `Bearer ${token}`, Version: VERSION, 'Content-Type': 'application/json', Accept: 'application/json' };
}

async function call<T>(token: string, path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API}${path}`, { ...init, headers: { ...headers(token), ...(init.headers || {}) } });
  const text = await res.text();
  if (!res.ok) throw new Error(`Lead Alchemist ${init.method || 'GET'} ${path.split('?')[0]} → ${res.status}: ${text.slice(0, 300)}`);
  return (text ? JSON.parse(text) : {}) as T;
}

let fieldCache: { at: number; fields: CustomField[] } | null = null;

async function contactFields(token: string, locationId: string): Promise<CustomField[]> {
  if (fieldCache && Date.now() - fieldCache.at < 10 * 60_000) return fieldCache.fields;
  const data = await call<{ customFields?: CustomField[] }>(token, `/locations/${locationId}/customFields?model=contact`);
  fieldCache = { at: Date.now(), fields: data.customFields || [] };
  return fieldCache.fields;
}

const OPTION_TYPES = new Set(['SINGLE_OPTIONS', 'MULTIPLE_OPTIONS', 'RADIO', 'CHECKBOX']);

// Picks the custom field for each form value and returns the API payload plus what matched.
export function mapCustomFields(lead: EstimateLead, fields: CustomField[]) {
  const used = new Set<string>();
  const out: { id: string; field_value: string | string[] }[] = [];
  const matched: Record<string, string> = {};
  for (const [key, candidates] of Object.entries(FIELD_CANDIDATES) as [keyof EstimateLead, string[]][]) {
    const value = (lead[key] || '').trim();
    if (!value || !candidates.length) continue;
    const field = candidates
      .map((c) => fields.find((f) => !used.has(f.id) && (norm(f.name) === norm(c) || norm(f.fieldKey) === norm(c))))
      .find(Boolean);
    if (!field) continue;
    let v: string | string[] = value;
    if (OPTION_TYPES.has(field.dataType || '') && field.picklistOptions?.length) {
      const opt = field.picklistOptions.find((o) => norm(o) === norm(value));
      if (!opt) continue; // the API rejects values that aren't one of the field's options; the note keeps it
      v = field.dataType === 'MULTIPLE_OPTIONS' || field.dataType === 'CHECKBOX' ? [opt] : opt;
    }
    used.add(field.id);
    out.push({ id: field.id, field_value: v });
    matched[key] = field.name;
  }
  return { customFields: out, matched };
}

export function toE164(phone: string) {
  const d = phone.replace(/\D/g, '');
  if (d.length === 10) return `+1${d}`;
  if (d.length === 11 && d.startsWith('1')) return `+${d}`;
  return phone.trim();
}

export function noteBody(lead: EstimateLead) {
  const rows: [string, string][] = [
    ['Project', lead.project], ['Insurance claim', lead.insurance_claim], ['Timeline', lead.timeline], ['Property location', lead.town],
    ['Details', lead.details], ['Lead channel', lead.lead_channel], ['Source / medium', [lead.lead_source, lead.lead_medium].filter(Boolean).join(' / ')],
    ['Campaign', lead.lead_campaign], ['First channel', lead.first_channel], ['Landing page', lead.landing_page], ['Submitted from', lead.page],
  ];
  return ['Free estimate request (website form)', ...rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`)].join('\n');
}

export async function sendEstimateLead(lead: EstimateLead, cfg: { token: string; locationId: string; workflowId: string }) {
  const { token, locationId, workflowId } = cfg;
  let fields: CustomField[] = [];
  try {
    fields = await contactFields(token, locationId);
  } catch (e) {
    console.error('[estimate] custom fields lookup failed; values go to the note only:', (e as Error).message);
  }
  const { customFields, matched } = mapCustomFields(lead, fields);
  const [firstName, ...rest] = lead.name.trim().split(/\s+/);
  const tags = ['website lead', 'free estimate request', ...(/^yes/i.test(lead.insurance_claim) ? ['insurance claim'] : [])];

  const upsert = await call<{ contact?: { id: string }; new?: boolean }>(token, '/contacts/upsert', {
    method: 'POST',
    body: JSON.stringify({
      locationId,
      firstName,
      lastName: rest.join(' ') || undefined,
      name: lead.name.trim(),
      ...(lead.email ? { email: lead.email.trim() } : {}),
      ...(lead.phone ? { phone: toE164(lead.phone) } : {}),
      ...(lead.town && lead.town !== 'Other' ? { city: lead.town, state: 'CO', country: 'US' } : {}),
      source: 'Website - Free Estimate',
      customFields,
    }),
  });
  const contactId = upsert.contact?.id;
  if (!contactId) throw new Error('Lead Alchemist upsert returned no contact id');

  // Tags are added separately so an existing contact's tags are kept.
  await call(token, `/contacts/${contactId}/tags`, { method: 'POST', body: JSON.stringify({ tags }) }).catch((e) => console.error('[estimate] tags:', e.message));
  await call(token, `/contacts/${contactId}/notes`, { method: 'POST', body: JSON.stringify({ body: noteBody(lead) }) }).catch((e) => console.error('[estimate] note:', e.message));
  // Enrolling through the API starts the workflow whatever its trigger is (it must be published).
  // A failure here is logged, not shown to the visitor: the contact is already saved.
  let workflow = true;
  await call(token, `/contacts/${contactId}/workflow/${workflowId}`, { method: 'POST', body: JSON.stringify({}) }).catch((e) => {
    workflow = false;
    console.error('[estimate] WORKFLOW ENROLL FAILED for contact', contactId, '-', e.message);
  });

  console.log('[estimate] contact', contactId, upsert.new ? 'created' : 'updated', '| workflow:', workflow, '| fields matched:', JSON.stringify(matched));
  return { contactId, created: !!upsert.new, workflow, matched };
}
