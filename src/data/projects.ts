// Completed projects with real photos. Files live in public/images/projects/<project>/ as
// <name>.webp (1600 px wide) plus <name>-thumb.webp (480 px wide).
// Alt text describes only what is visible in the photo. Never add photos that aren't Reed's work.
// TODO before launch: confirm written permission to use these listing photos (shot for the
// Century 21 listing, agent Jamie Salyer) and add a photo credit if the photographer requires one.

export type Tag = 'kitchen' | 'bath' | 'living' | 'bedroom' | 'flooring';
export type Photo = { name: string; alt: string; w: number; h: number; tags: Tag[] };
export type Project = {
  slug: string;
  title: string;
  town: string;
  locationSlug: string;
  dir: string;
  summary: string;
  services: string[];
  photos: Photo[];
};

const L = 1067; // landscape height at 1600 wide
const P = 2400; // portrait height at 1600 wide

export const projects: Project[] = [
  {
    slug: 'edwards-home-renovation',
    title: 'Home renovation and room addition in Edwards',
    town: 'Edwards',
    locationSlug: 'remodeling-contractor-edwards-co',
    dir: 'edwards',
    summary:
      'A fully permitted renovation of a home in Edwards, Colorado that added rooms and brought the house up to current code. Reed Home Solutions ran the job as general contractor, from permits through the final punch list.',
    // TODO ask Jace for the room-by-room scope (which rooms were added, what was replaced) before adding a scope list.
    services: ['home-renovation-general-contracting', 'home-additions-adus', 'kitchen-remodeling', 'bathroom-remodeling', 'flooring-installation'],
    photos: [
      { name: 'open-living-room-and-kitchen', alt: 'Open living room and kitchen with a high ceiling, corner fireplace and wood-look plank floors', w: 1600, h: L, tags: ['living', 'kitchen', 'flooring'] },
      { name: 'kitchen-island-and-dining', alt: 'Remodeled kitchen with white shaker cabinets, a center island, stainless range and a dining area by the windows', w: 1600, h: L, tags: ['kitchen', 'flooring'] },
      { name: 'primary-bath-navy-vanity', alt: 'Primary bathroom with a navy double vanity, brass fixtures and a marble-look tiled walk-in shower', w: 1600, h: L, tags: ['bath'] },
      { name: 'kitchen-white-shaker-cabinets', alt: 'Kitchen range wall with white shaker cabinets, black pulls, stainless microwave and gas range', w: 1600, h: L, tags: ['kitchen'] },
      { name: 'living-room-fireplace', alt: 'Living room with a tiled corner fireplace, French doors and clerestory windows', w: 1600, h: L, tags: ['living', 'flooring'] },
      { name: 'primary-bath-tile-shower', alt: 'Walk-in shower with large marble-look wall tile, a recessed niche and brass shower fixtures', w: 1600, h: L, tags: ['bath'] },
      { name: 'great-room-kitchen-island', alt: 'Great room looking past the kitchen island toward the dining area and fireplace', w: 1600, h: L, tags: ['living', 'kitchen', 'flooring'] },
      { name: 'kitchen-sink-peninsula', alt: 'Kitchen peninsula with an undermount double sink and black faucet facing the dining room', w: 1600, h: L, tags: ['kitchen'] },
      { name: 'primary-bath-double-vanity', alt: 'Double vanity with two undermount sinks, brass faucets and a wide mirror', w: 1600, h: L, tags: ['bath'] },
      { name: 'kitchen-peninsula-and-entry', alt: 'Kitchen peninsula with bar stools, recessed lighting and white cabinets to the ceiling', w: 1600, h: L, tags: ['kitchen', 'flooring'] },
      { name: 'kitchen-range-and-cabinets', alt: 'L-shaped kitchen with white cabinets, stainless gas range and over-the-range microwave', w: 1600, h: L, tags: ['kitchen'] },
      { name: 'hall-bath-wood-vanity', alt: 'Hall bathroom with a wood vanity, white stone-look top, black faucet and tile floor', w: 1600, h: L, tags: ['bath'] },
      { name: 'fireplace-tile-surround', alt: 'Gas fireplace with a marble-look tile surround and white mantel', w: 1600, h: P, tags: ['living'] },
      { name: 'dining-room-pendant-light', alt: 'Dining room with a black linear pendant light, wood table and three windows', w: 1600, h: L, tags: ['living', 'flooring'] },
      { name: 'living-room-from-above', alt: 'Living room seen from the loft above, with plank flooring and the corner fireplace', w: 1600, h: L, tags: ['living', 'flooring'] },
      { name: 'powder-room-vanity', alt: 'Powder room with a glass vessel sink on a white shaker vanity and a round mirror', w: 1600, h: P, tags: ['bath'] },
      { name: 'dining-room-to-kitchen', alt: 'Dining room looking into the kitchen and living area, with a linear pendant over the table', w: 1600, h: L, tags: ['kitchen', 'living', 'flooring'] },
      { name: 'primary-bedroom-suite', alt: 'Primary bedroom with new carpet, a ceiling fan and doors to the bathroom and walk-in closet', w: 1600, h: L, tags: ['bedroom', 'flooring'] },
      { name: 'guest-bath-vanity-and-tub', alt: 'Guest bathroom with a black vanity, integrated sink, black faucet and tub-shower', w: 1600, h: L, tags: ['bath'] },
      { name: 'powder-room-vessel-sink', alt: 'Glass vessel sink and brushed nickel faucet under a round mirror', w: 1600, h: L, tags: ['bath'] },
      { name: 'hall-bath-vanity-countertop', alt: 'Close-up of a wood vanity with a white stone-look countertop, black faucet and black-framed mirror', w: 1600, h: L, tags: ['bath'] },
      { name: 'primary-bath-brass-faucet', alt: 'Brass faucet and undermount sink on a white vanity top with tile shower behind', w: 1600, h: L, tags: ['bath'] },
      { name: 'dining-room-windows', alt: 'Dining area with a wood table, upholstered chairs and a wall of windows', w: 1600, h: L, tags: ['living'] },
      { name: 'dining-room-detail', alt: 'Dining table under a black lantern-style pendant light', w: 1600, h: L, tags: ['living'] },
      { name: 'entry-door-and-hall', alt: 'Entry with a new front door, black hardware and wood-look plank floor', w: 1600, h: L, tags: ['flooring'] },
      { name: 'bedroom-ceiling-fan', alt: 'Bedroom with three windows, a ceiling fan, new carpet and a walk-in closet', w: 1600, h: L, tags: ['bedroom', 'flooring'] },
      { name: 'bedroom-built-in-shelves', alt: 'Bedroom with built-in open shelving, new carpet and baseboard heat', w: 1600, h: L, tags: ['bedroom', 'flooring'] },
      { name: 'bedroom-closets-and-shelving', alt: 'Bedroom with two sets of bifold closet doors and built-in shelves', w: 1600, h: L, tags: ['bedroom'] },
      { name: 'bedroom-carpet-log-column', alt: 'Bedroom with new carpet, a natural log column and closet doors', w: 1600, h: L, tags: ['bedroom', 'flooring'] },
      { name: 'hall-bath-vanity-and-closet', alt: 'Hall bathroom with a wood vanity, tile floor and linen closet', w: 1600, h: L, tags: ['bath'] },
      { name: 'guest-bath-vanity', alt: 'Black vanity with an integrated white sink, black faucet and black-framed mirror', w: 1600, h: L, tags: ['bath'] },
      { name: 'bedroom-windows', alt: 'Bedroom with a row of three windows, new carpet and a ceiling light', w: 1600, h: L, tags: ['bedroom', 'flooring'] },
      { name: 'bedroom-closet', alt: 'Bedroom with sliding closet doors and new carpet', w: 1600, h: L, tags: ['bedroom', 'flooring'] },
    ],
  },
];

export const projectBySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));

export const photoSrc = (p: Project, ph: Photo, thumb = false) =>
  `/images/projects/${p.dir}/${p.dir}-${ph.name}${thumb ? '-thumb' : ''}.webp`;

// Photos for a service page, best first. Empty array means the page shows none.
const serviceTags: Record<string, Tag[]> = {
  'kitchen-remodeling': ['kitchen'],
  'bathroom-remodeling': ['bath'],
  'flooring-installation': ['flooring'],
  'home-renovation-general-contracting': ['living', 'kitchen', 'bath'],
  'home-additions-adus': ['bedroom', 'living'],
};

export function photosForService(slug: string, limit = 6) {
  const tags = serviceTags[slug];
  if (!tags) return [];
  return projects
    .filter((p) => p.services.includes(slug))
    .flatMap((p) => p.photos.filter((ph) => ph.tags.some((t) => tags.includes(t))).map((ph) => ({ project: p, photo: ph })))
    .slice(0, limit);
}

export function photosForTown(locationSlug: string, limit = 6) {
  return projects.filter((p) => p.locationSlug === locationSlug).flatMap((p) => p.photos.slice(0, limit).map((ph) => ({ project: p, photo: ph })));
}
