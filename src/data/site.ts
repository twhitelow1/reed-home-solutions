// ─────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for NAP + brand facts.
// NAP must match the Google Business Profile character-for-character once it exists.
// Anything marked TODO needs confirmation before launch.
// ─────────────────────────────────────────────────────────────
export const site = {
  name: 'Reed Home Solutions',
  legalName: 'Reed Home Solutions', // TODO legal entity name (LLC?) from the onboarding form
  tagline: 'Remodeling & General Contracting',
  // TODO production domain. Planned on the onboarding call: a "Vail home remodeling" keyword domain as the
  // website, with reedhomesolutionsco.com redirecting to it and carrying email. Canonicals, sitemap and
  // schema all read this one value, so change it here when the domain is bought.
  url: 'https://vailhomeremodeling.com',
  phone: '(970) 431-6734', // Lead Alchemist VoIP number (tracks calls/texts in GHL)
  phoneE164: '+19704316734',
  email: 'reedhomesolutions@gmail.com', // TODO switch to the branded address on reedhomesolutionsco.com
  // Service-area business: no street address published (matches a hidden-address GBP).
  address: { locality: 'Gypsum', region: 'CO', postalCode: '81637', country: 'US' }, // TODO confirm home base town
  geo: { lat: 39.6469, lng: -106.9517 },
  hours: [] as { days: string[]; opens: string; closes: string }[], // TODO business hours (left empty = hidden everywhere)
  // GoHighLevel (Lead Alchemist). Leave blank and every CTA falls back to /free-estimate + phone.
  bookingUrl: '', // TODO GHL calendar URL for estimate visits
  formEmbedUrl: '', // TODO GHL estimate form embed src
  // Free-estimate form posts to /api/estimate (api/estimate.ts, a Vercel Function), which upserts the contact in
  // Reed's Lead Alchemist sub-account, fills custom fields and enrolls it in the estimate workflow.
  // Needs GHL_PRIVATE_TOKEN in Vercel env vars; IDs live in api/estimate.ts.
  // Lead Alchemist calendar shown after the estimate form submits, so the lead can book a call back.
  // Paste the calendar's booking widget URL (…/widget/booking/<id>). Blank = thank-you message only.
  callbackCalendarUrl: '', // TODO calendar widget URL from Jace's Lead Alchemist calendar
  tracking: {
    ga4Id: '', // TODO
    gtmId: '',
    clarityId: '',
    googleSiteVerification: '',
    bingSiteVerification: '',
  },
  owner: { name: 'Jace Reed', role: 'Owner', url: '/about' },
  // Credentials stated on the onboarding call. Add license numbers per jurisdiction when provided.
  credentials: ['Certified to pull building permits', 'Insured'], // TODO license / registration numbers + insurer COI on request
  gbp: {
    // TODO Google Business Profile is being created. Fill these when it is verified.
    placeId: '',
    reviewUrl: '',
    mapsUrl: '',
  },
  indexNowKey: '9367e5972f15c4736a26cc8318c1ad4d', // IndexNow (Bing/Copilot/ChatGPT search): key file lives at /<key>.txt
  sameAs: [] as string[], // TODO GBP, Facebook, Instagram, Houzz, Nextdoor URLs
  agency: { name: 'DubLow Digital', url: 'https://dublowdigital.com' },
  lastReviewed: '2026-10-08',
};

export const estimateHref = site.bookingUrl || '/free-estimate';
export const telHref = `tel:${site.phoneE164}`;
export const smsHref = `sms:${site.phoneE164}`;

// Verbatim Google reviews only. Empty until the Google Business Profile has real reviews.
export const reviews: { author: string; topic: string; text: string }[] = [];
