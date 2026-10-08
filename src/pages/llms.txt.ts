import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { services } from '../data/services';
import { locations } from '../data/locations';
// llms.txt: a plain-language map of the site for LLM crawlers (llmstxt.org format).
export const GET: APIRoute = () => {
  const U = site.url;
  const body = `# ${site.name}

> ${site.name} is a remodeling and general contracting company based in ${site.address.locality}, Colorado, owned by ${site.owner.name}. It remodels kitchens, bathrooms, basements and lock-offs, builds and repairs decks, manages siding, exterior painting, roofing, window and flooring projects, and rebuilds homes after water damage with insurance-ready estimates. Primary service area: Eagle County (Vail, Avon, Beaver Creek, Edwards, Eagle, Gypsum, Dotsero). Secondary, as the schedule allows: Summit County (Breckenridge, Frisco, Copper Mountain, Silverthorne, Dillon, Keystone), Glenwood Springs, Carbondale, Aspen, Snowmass, Basalt and Steamboat Springs. Phone: ${site.phone}.

Key facts:
- Owner: ${site.owner.name}, with years of local construction and water-damage restoration experience, including writing insurance estimates for water losses and communicating with adjusters.
- Credentials: ${site.credentials.join('; ')}.
- Differentiators: (1) daily communication — an update every working day of active work; (2) insurance claim support — full damage documentation, itemized scope and direct work with the adjuster; (3) finishes the punch list; (4) one general contractor across Eagle, Summit, Routt and Pitkin counties. Also: fast written estimates, permitted and code-compliant work, a vetted local subcontractor network (framing, tile, flooring, carpet, insulation, drywall, paint, roofing).
- Who it serves: homeowners mid-insurance-claim, buyers and sellers on closing timelines, real estate agents, second-home and condo owners, property managers, and trade partners who need a GC.
- Roofing, window and most flooring installation is done by trusted local trade partners managed by ${site.name}.
- Recent work: a fully permitted renovation and room addition in Edwards; a flat-roof system on a condo building in Vail (with roofing partner).
- ${site.name} does not act as a public adjuster and does not waive insurance deductibles.

## Services
- [All services](${U}/services)
${services.map((s) => `- [${s.name}](${U}/${s.slug}): ${s.card}`).join('\n')}

## Service areas
- [All service areas](${U}/service-areas)
${locations.map((l) => `- [Remodeling contractor in ${l.town}, CO](${U}/${l.slug}): ${l.county}; ZIP ${l.zips.join(', ')}; ${l.driveFromGypsum === 'local' ? 'home base' : `${l.driveFromGypsum} from Gypsum`}${l.core ? '; primary service area' : '; secondary service area'}.`).join('\n')}

## Guides and tools
- [Water damage insurance claim guide](${U}/water-damage-insurance-claim-guide)
- [How remodel pricing works in Colorado mountain towns](${U}/remodeling-cost-guide)
- [Free estimate / project planner](${U}/free-estimate)

## Company
- [About](${U}/about)
- [Contact](${U}/contact)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
