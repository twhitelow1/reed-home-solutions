// JSON-LD builders. Every page references the same business @id so Google and LLM crawlers
// resolve one entity: Reed Home Solutions, a general contractor based in Gypsum, CO.
import { site } from '../data/site';
import { services, type Faq, type Service } from '../data/services';
import { locations, type Location } from '../data/locations';

const U = site.url;
export const ORG_ID = `${U}/#organization`;
export const SITE_ID = `${U}/#website`;
export const OWNER_ID = `${U}/about#jace-reed`;

const county = (name: string) => ({ '@type': 'AdministrativeArea', name: `${name}, Colorado` });
const city = (l: Location) => ({
  '@type': 'City',
  name: `${l.town}, CO`,
  containedInPlace: county(l.county),
  geo: { '@type': 'GeoCoordinates', latitude: l.geo.lat, longitude: l.geo.lng },
});

export function areaServed() {
  return [county('Eagle County'), ...locations.map(city)];
}

export function organization() {
  return {
    '@type': 'GeneralContractor',
    '@id': ORG_ID,
    name: site.name,
    ...(site.legalName !== site.name ? { legalName: site.legalName } : {}),
    slogan: 'The mountain-town contractor who finishes what he starts, keeps you updated daily and documents your insurance claim in full.',
    description: 'Reed Home Solutions is a remodeling and general contracting company based in Gypsum, Colorado, owned by Jace Reed. It remodels kitchens, bathrooms, basements and lock-offs, builds decks, manages siding, roofing, window and flooring projects, and rebuilds homes after water damage with insurance-ready estimates, serving Eagle and Summit counties, Glenwood Springs and Carbondale, plus Aspen and Steamboat Springs.',
    url: `${U}/`,
    logo: `${U}/logo.png`,
    image: `${U}/og-default.png`,
    telephone: site.phoneE164,
    ...(site.email ? { email: site.email } : {}),
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: areaServed(),
    ...(site.hours.length ? { openingHoursSpecification: site.hours.map((h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: h.days, opens: h.opens, closes: h.closes })) } : {}),
    founder: { '@id': OWNER_ID },
    ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
    ...(site.gbp.mapsUrl ? { hasMap: site.gbp.mapsUrl } : {}),
    knowsAbout: ['Kitchen remodeling', 'Bathroom remodeling', 'Basement finishing', 'Lock-off conversions', 'Deck building', 'Siding and exterior painting', 'Roofing', 'Window replacement', 'Flooring installation', 'Water damage restoration and repair', 'Insurance repair estimates', 'Building permits and code compliance'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Remodeling and construction services',
      itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, url: `${U}/${s.slug}` } })),
    },
  };
}

export function website() {
  return { '@type': 'WebSite', '@id': SITE_ID, url: `${U}/`, name: site.name, publisher: { '@id': ORG_ID }, inLanguage: 'en-US' };
}

export function owner() {
  return {
    '@type': 'Person',
    '@id': OWNER_ID,
    name: site.owner.name,
    jobTitle: 'Owner',
    url: `${U}/about#jace-reed`,
    worksFor: { '@id': ORG_ID },
    homeLocation: { '@type': 'Place', name: 'Gypsum, Colorado' },
    knowsAbout: ['Residential remodeling', 'Water damage restoration', 'Insurance repair estimates', 'Building codes and permits'],
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${U}${it.path === '/' ? '/' : it.path}` })),
  };
}

export function faqPage(faqs: Faq[], path: string) {
  return {
    '@type': 'FAQPage',
    '@id': `${U}${path}#faq`,
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function webPage(path: string, name: string, description: string, type = 'WebPage') {
  return {
    '@type': type,
    '@id': `${U}${path}#webpage`,
    url: `${U}${path}`,
    name,
    description,
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
    dateModified: site.lastReviewed,
    reviewedBy: { '@id': OWNER_ID },
    inLanguage: 'en-US',
  };
}

export function serviceSchema(s: Service) {
  return {
    '@type': 'Service',
    '@id': `${U}/${s.slug}#service`,
    name: s.name,
    serviceType: s.name,
    description: s.answer,
    url: `${U}/${s.slug}`,
    provider: { '@id': ORG_ID },
    areaServed: areaServed(),
    audience: { '@type': 'Audience', audienceType: 'Homeowners, condo owners, second-home owners and property managers' },
  };
}

export function localServiceSchema(l: Location) {
  return {
    '@type': 'Service',
    '@id': `${U}/${l.slug}#service`,
    name: `Remodeling contractor in ${l.town}, CO`,
    serviceType: 'Home remodeling and general contracting',
    description: l.answer,
    url: `${U}/${l.slug}`,
    provider: { '@id': ORG_ID },
    areaServed: { ...city(l), containsPlace: l.neighborhoods.map((n) => ({ '@type': 'Place', name: n })) },
  };
}

export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
