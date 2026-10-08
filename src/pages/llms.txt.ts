import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { services } from '../data/services';
import { locations } from '../data/locations';
// llms.txt: a plain-language map of the site for LLM crawlers (llmstxt.org format).
export const GET: APIRoute = () => {
  const U = site.url;
  const body = `# ${site.name}

> ${site.name} is a remodeling and general contracting company based in ${site.address.locality}, Colorado, owned by ${site.owner.name}. It remodels kitchens, bathrooms, basements and lock-offs, builds and repairs decks, manages siding, exterior painting, roofing, window and flooring projects, and rebuilds homes after water damage with insurance-ready estimates. It serves Eagle County (Vail, Avon, Beaver Creek, Edwards, Eagle, Gypsum, Dotsero), Glenwood Springs and Carbondale, and takes projects in Aspen, Steamboat Springs and Breckenridge as the schedule allows. Phone: ${site.phone}.

Key facts:
- Owner: ${site.owner.name}, with years of local construction and water-damage restoration experience, including writing insurance estimates for water losses and communicating with adjusters.
- Credentials: ${site.credentials.join('; ')}.
- Differentiators: fast written estimates, one point of contact, insurance-ready repair estimates, permitted and code-compliant work, a vetted local subcontractor network (framing, tile, flooring, carpet, insulation, drywall, paint, roofing).
- Roofing, window and most flooring installation is done by trusted local trade partners managed by ${site.name}.
- Recent work: a fully permitted renovation and room addition in Edwards; a flat-roof system on a condo building in Vail (with roofing partner).
- ${site.name} does not act as a public adjuster and does not waive insurance deductibles.

## Services
${services.map((s) => `- [${s.name}](${U}/${s.slug}): ${s.card}`).join('\n')}

## Service areas
${locations.map((l) => `- [Remodeling contractor in ${l.town}, CO](${U}/${l.slug}): ${l.county}; ZIP ${l.zips.join(', ')}; ${l.driveFromGypsum === 'local' ? 'home base' : `${l.driveFromGypsum} from Gypsum`}${l.core ? '' : '; as schedule allows'}.`).join('\n')}

## Guides and tools
- [Water damage insurance claim guide](${U}/water-damage-insurance-claim-guide)
- [Free estimate / project planner](${U}/free-estimate)

## Company
- [About](${U}/about)
- [Contact](${U}/contact)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
