// POST /api/estimate: the free-estimate form (src/pages/free-estimate.astro).
// A standalone Vercel Function: the Astro site stays fully static and vercel.json keeps
// handling redirects, headers and clean URLs. Files under api/_lib are not routes.
import { sendEstimateLead, type EstimateLead } from './_lib/leadAlchemist.js';

// Reed Home Solutions sub-account and its "website estimate" workflow. Overridable by env.
const LOCATION_ID = process.env.GHL_LOCATION_ID || 'Dm7QrepHDIle2yDgZlev';
const WORKFLOW_ID = process.env.GHL_ESTIMATE_WORKFLOW_ID || '210117e2-eace-4e67-a9d1-50b12a2ad260';

const json = (status: number, body: object) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
const str = (v: unknown, max = 500) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export async function POST(request: Request): Promise<Response> {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json(400, { ok: false, error: 'bad_request' });
  }
  // Honeypot: people never see or fill this field. Answer "ok" so bots move on.
  if (str(body.company_website)) return json(200, { ok: true });

  const lead: EstimateLead = {
    name: str(body.name, 120), phone: str(body.phone, 40), email: str(body.email, 160),
    project: str(body.project, 120), insurance_claim: str(body.insurance_claim, 60), timeline: str(body.timeline, 60),
    town: str(body.town, 80), details: str(body.details, 2000),
    lead_channel: str(body.lead_channel, 60), lead_source: str(body.lead_source, 150), lead_medium: str(body.lead_medium, 150),
    lead_campaign: str(body.lead_campaign, 150), first_channel: str(body.first_channel, 60), landing_page: str(body.landing_page, 300),
    gclid: str(body.gclid, 200), page: str(body.page, 300),
  };
  const emailOk = !lead.email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email);
  const phoneOk = !lead.phone || lead.phone.replace(/\D/g, '').length >= 10;
  if (!lead.name || (!lead.phone && !lead.email) || !emailOk || !phoneOk) return json(422, { ok: false, error: 'missing_contact' });

  const token = process.env.GHL_PRIVATE_TOKEN;
  if (!token) {
    console.error('[estimate] GHL_PRIVATE_TOKEN is not set; lead not sent to Lead Alchemist');
    return json(503, { ok: false, error: 'not_configured' });
  }
  try {
    const r = await sendEstimateLead(lead, { token, locationId: LOCATION_ID, workflowId: WORKFLOW_ID });
    return json(200, { ok: true, created: r.created });
  } catch (e) {
    console.error('[estimate]', (e as Error).message);
    return json(502, { ok: false, error: 'crm_error' });
  }
}

export function GET(): Response {
  return json(405, { ok: false, error: 'method_not_allowed' });
}
