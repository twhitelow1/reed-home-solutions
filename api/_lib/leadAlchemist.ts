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
  property_type: string;
  homeowner: string;
  town: string;
  contact_method: string;
  details: string;
  sms_consent: boolean;
  marketing_consent: boolean;
  lead_channel: string;
  lead_source: string;
  lead_medium: string;
  lead_campaign: string;
  first_channel: string;
  landing_page: string;
  gclid: string;
  page: string;
};

// Website service name → Reed's "Project Type" dropdown option.
export const PROJECT_TYPE: Record<string, string> = {
  'Kitchen Remodeling': 'Kitchen Remodel',
  'Bathroom Remodeling': 'Bathroom Remodel',
  'Basement & Lock-Off Remodeling': 'Basement/Lock-Off',
  'Deck Building & Repair': 'Deck Building & Repair',
  'Water Damage & Insurance Repair': 'Water Damage Repair',
  'Home Renovation & General Contracting': 'Whole Home Renovation',
  'Siding & Exterior Painting': 'Exterior/Siding/Roof',
  'Roof Replacement & Repair': 'Exterior/Siding/Roof',
  'Window & Door Replacement': 'Exterior/Siding/Roof',
};

// Form value → Reed's existing contact custom fields (Settings > Custom Fields, by field key).
// Dropdown/checkbox values are matched to the field's options ignoring case and punctuation;
// a value with no matching option is skipped (logged) and kept in the contact note.
export const FIELD_MAP: { fieldKey: string; value: (l: EstimateLead) => string }[] = [
  { fieldKey: 'contact.project_type', value: (l) => (l.project ? PROJECT_TYPE[l.project] || 'Other Custom Repair' : '') },
  { fieldKey: 'contact.insurance_claim', value: (l) => l.insurance_claim },
  { fieldKey: 'contact.timeframe', value: (l) => l.timeline },
  { fieldKey: 'contact.property_type', value: (l) => l.property_type },
  { fieldKey: 'contact.are_you_the_home_owner', value: (l) => l.homeowner },
  { fieldKey: 'contact.project_town', value: (l) => l.town },
  { fieldKey: 'contact.project_location_town', value: (l) => l.town },
  { fieldKey: 'contact.preferred_contact_method', value: (l) => l.contact_method },
  { fieldKey: 'contact.project_details', value: (l) => l.details },
  { fieldKey: 'contact.sms_consent', value: (l) => (l.sms_consent ? 'Yes' : '') },
  { fieldKey: 'contact.a2p_second_checkbox', value: (l) => (l.marketing_consent ? '*first-option*' : '') },
  { fieldKey: 'contact.utm_source', value: (l) => l.lead_source },
  { fieldKey: 'contact.utm_medium', value: (l) => l.lead_medium },
  { fieldKey: 'contact.utm_campaign', value: (l) => l.lead_campaign },
  { fieldKey: 'contact.page_url__lead_page', value: (l) => l.landing_page },
  { fieldKey: 'contact.lead_channel', value: (l) => l.lead_channel },
];

type CustomField = { id: string; name: string; fieldKey?: string; dataType?: string; picklistOptions?: string[] };

const norm = (s = '') => s.toLowerCase().replace(/[^a-z0-9]/g, '');

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

const MULTI = new Set(['MULTIPLE_OPTIONS', 'CHECKBOX']);
const OPTIONS = new Set(['SINGLE_OPTIONS', 'RADIO', ...MULTI]);

// Builds the customFields payload from FIELD_MAP and reports what was set and what was skipped.
export function mapCustomFields(lead: EstimateLead, fields: CustomField[]) {
  const out: { id: string; field_value: string | string[] }[] = [];
  const set: Record<string, string> = {};
  const skipped: string[] = [];
  for (const m of FIELD_MAP) {
    const value = m.value(lead).trim();
    if (!value) continue;
    const field = fields.find((f) => f.fieldKey === m.fieldKey);
    if (!field) { skipped.push(`${m.fieldKey} (field not found)`); continue; }
    let v: string | string[] = value;
    if (OPTIONS.has(field.dataType || '') && field.picklistOptions?.length) {
      const opt = value === '*first-option*' ? field.picklistOptions[0] : field.picklistOptions.find((o) => norm(o) === norm(value));
      if (!opt) { skipped.push(`${m.fieldKey} ("${value}" is not an option)`); continue; }
      v = MULTI.has(field.dataType || '') ? [opt] : opt;
    }
    out.push({ id: field.id, field_value: v });
    set[m.fieldKey] = Array.isArray(v) ? v.join(', ').slice(0, 60) : v.slice(0, 60);
  }
  return { customFields: out, set, skipped };
}

export function toE164(phone: string) {
  const d = phone.replace(/\D/g, '');
  if (d.length === 10) return `+1${d}`;
  if (d.length === 11 && d.startsWith('1')) return `+${d}`;
  return phone.trim();
}

export function noteBody(lead: EstimateLead) {
  const rows: [string, string][] = [
    ['Project', lead.project], ['Insurance claim', lead.insurance_claim], ['Timeframe', lead.timeline], ['Property type', lead.property_type],
    ['Homeowner', lead.homeowner], ['Property location', lead.town], ['Preferred contact', lead.contact_method], ['Details', lead.details],
    ['SMS consent', lead.sms_consent ? 'Yes' : 'No'], ['Marketing SMS consent', lead.marketing_consent ? 'Yes' : 'No'],
    ['Lead channel', lead.lead_channel], ['Source / medium', [lead.lead_source, lead.lead_medium].filter(Boolean).join(' / ')],
    ['Campaign', lead.lead_campaign], ['GCLID', lead.gclid], ['First channel', lead.first_channel], ['Landing page', lead.landing_page], ['Submitted from', lead.page],
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
  const { customFields, set, skipped } = mapCustomFields(lead, fields);
  if (skipped.length) console.warn('[estimate] fields skipped:', skipped.join('; '));
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

  console.log('[estimate] contact', contactId, upsert.new ? 'created' : 'updated', '| workflow:', workflow, '| fields set:', JSON.stringify(set));
  return { contactId, created: !!upsert.new, workflow, set };
}
