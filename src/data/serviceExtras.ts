// Depth for each service page: quick facts, signs, process, fit, pricing factors, local section.
// Pricing is factors only — never invented numbers.
export type Extra = {
  facts: [string, string][]; // exactly 4 label/value pairs
  signs: string[];
  process: { h: string; p: string }[];
  fit: string[];
  pricing: [string, string][];
  local: { h2: string; html: string };
};

const visit = { h: 'Site visit', p: 'Jace walks the space with you, takes measurements and photos, and asks what you want the finished project to do for you.' };
const estimate = { h: 'Written estimate', p: 'You get a line-item estimate with what is included, what is not, and the decisions still open. We aim to turn it around fast.' };
const permits = { h: 'Permits and ordering', p: 'We submit permits and HOA applications and order long-lead materials before demolition so the job does not stall.' };
const build = { h: 'Build and updates', p: 'Our crew and trade partners do the work in the right order. You get regular updates and written change orders before anything extra happens.' };
const close = { h: 'Walkthrough and sign-off', p: 'Final inspection, a walkthrough with you, a punch list, and cleanup. The job is done when you agree it is done.' };
const std = [visit, estimate, permits, build, close];

export const extras: Record<string, Extra> = {
  'kitchen-remodeling': {
    facts: [['Typical project', 'Refresh to full renovation'], ['Permits', 'Pulled and managed by us'], ['Point of contact', 'Jace Reed, owner'], ['Service area', 'Eagle County + nearby towns']],
    signs: ['Cabinets are failing, sagging or water-damaged under the sink', 'Counter space and storage do not fit how you cook', 'Wiring, lighting or outlets are outdated or overloaded', 'The layout blocks traffic between kitchen, dining and living areas', 'You are preparing a home for sale or a rental season'],
    process: std,
    fit: ['Full-time residents updating an older Vail Valley home', 'Second-home owners who want the work managed while they are away', 'Condo owners working within HOA remodeling rules', 'Investors renovating before a sale or long-term rental'],
    pricing: [['Layout changes', 'Moving the sink, range or walls means new plumbing, gas, venting and electrical.'], ['Cabinets', 'Stock, semi-custom and custom cabinets differ widely in cost and lead time.'], ['Counters', 'Laminate, quartz, granite and natural stone vary by material and fabrication.'], ['Appliances and venting', 'Larger hoods may need make-up air; built-in appliances need exact openings.'], ['Hidden conditions', 'Old wiring, plumbing or water damage behind walls may need correcting.'], ['Access and HOA rules', 'Condo work hours, elevator use and parking affect labor time.']],
    local: { h2: 'Kitchen remodeling across the Vail Valley', html: '<p>We remodel kitchens from Vail Village condos to family homes in Eagle Ranch and Gypsum, and in Glenwood Springs, Carbondale, Aspen, Steamboat Springs and Breckenridge as the schedule allows. Mountain projects depend on supplier lead times and delivery access, so we plan orders early and keep a buffer in the schedule.</p>' },
  },
  'bathroom-remodeling': {
    facts: [['Typical project', 'Tub-to-shower to full primary bath'], ['Waterproofing', 'Continuous membrane under all shower tile'], ['Permits', 'Pulled and managed by us'], ['Background', 'Water-damage restoration']],
    signs: ['Soft or stained floor around the tub or toilet', 'Cracked grout or loose tile in the shower', 'Mold or peeling paint from poor ventilation', 'A tub that is hard to step over', 'Water stains on the ceiling below the bathroom'],
    process: std,
    fit: ['Homeowners replacing a dated or leaking bathroom', 'Condo owners who need work coordinated with the HOA and neighbors below', 'Short-term and long-term rental owners who need a durable, quick turnaround', 'Owners planning to age in place'],
    pricing: [['Size and layout', 'Moving the toilet, shower or vanity adds plumbing work.'], ['Shower type', 'A tiled, waterproofed shower costs more than a prefabricated base but lasts longer and looks better.'], ['Tile and glass', 'Large-format tile, patterns and custom glass add labor and material.'], ['Subfloor condition', 'Old leaks often leave rot that must be repaired.'], ['Fixtures and heated floors', 'Fixture selections and radiant floor heat add cost.']],
    local: { h2: 'Bathroom remodeling in Eagle County and beyond', html: '<p>From West Vail and Avon condos to homes in Edwards, Eagle and Gypsum, bathrooms are our most common remodel. We also take projects in Glenwood Springs, Carbondale, Aspen, Steamboat Springs and Breckenridge.</p>' },
  },
  'basement-lock-off-remodeling': {
    facts: [['Typical project', 'Basement finish, added bedroom or lock-off unit'], ['Code focus', 'Egress, fire separation, alarms'], ['Permits', 'Pulled and managed by us'], ['Experience', 'Permitted room additions in Edwards']],
    signs: ['You need another bedroom but cannot afford to move', 'Your lower level is unfinished or used only for storage', 'You want rental income or space for a caretaker or family', 'An existing basement bedroom has no egress window', 'A previous owner finished space without a permit'],
    process: [visit, { h: 'Feasibility check', p: 'We check zoning, HOA covenants and town rules for added bedrooms or a separate unit before design work starts.' }, estimate, permits, build, close],
    fit: ['Families who need another bedroom or bunk room', 'Owners adding a long-term rental or caretaker unit', 'Buyers fixing unpermitted basement work after closing', 'Owners preparing a home for sale'],
    pricing: [['Egress openings', 'Cutting foundation walls for code-sized egress windows and wells is a major line item.'], ['Bathroom and kitchenette', 'New plumbing, especially below the sewer line, adds cost.'], ['Fire separation', 'Separate units may need rated walls, ceilings and doors.'], ['Moisture and radon', 'Testing and mitigation if needed.'], ['Finish level', 'Flooring, trim, lighting and built-ins.']],
    local: { h2: 'Lock-offs and basements in mountain towns', html: '<p>Lock-offs are common in Vail, Avon and Edwards, and many homes in Eagle, Gypsum and Glenwood Springs have unfinished lower levels with room to grow. Rules for accessory units and rentals differ between the Town of Vail, Avon, Eagle County, Garfield County and other jurisdictions, so we check yours first.</p>' },
  },
  'flooring-installation': {
    facts: [['Materials', 'Hardwood, LVP, tile, carpet'], ['Installation', 'Local flooring partner + our tile crew'], ['Prep', 'Flatness and moisture checked'], ['Coordination', 'Scheduled with your remodel']],
    signs: ['Floors are worn, cupped, cracked or stained', 'Carpet in entries or basements keeps getting wet', 'Squeaks or soft spots underfoot', 'Mismatched flooring between rooms', 'Water damage from a leak or appliance failure'],
    process: [visit, estimate, { h: 'Prep', p: 'We remove old flooring, repair and level the subfloor, test moisture and acclimate materials.' }, { h: 'Install', p: 'Our flooring partner or tile crew installs, then trim and transitions go back on.' }, close],
    fit: ['Homeowners updating floors on their own or as part of a remodel', 'Rental owners who need durable, waterproof floors', 'Owners repairing floors after a water loss'],
    pricing: [['Material', 'The single biggest factor.'], ['Square footage and layout', 'Many small rooms and angles add cuts and labor.'], ['Stairs', 'Priced per step and labor-intensive.'], ['Subfloor repair', 'Leveling and replacing damaged subfloor.'], ['Removal', 'Tearing out tile or glued-down floors takes longer than carpet.']],
    local: { h2: 'Flooring across Eagle County', html: '<p>We install flooring in homes and condos from Vail to Gypsum and in nearby towns. Our flooring partner has warehouses on both sides of the mountains, which helps with material availability and lead times.</p>' },
  },
  'deck-building-repair': {
    facts: [['Typical project', 'New deck, rebuild or repair'], ['Framing', 'Sized for local snow loads'], ['Materials', 'Composite, PVC or wood'], ['Season', 'Spring through fall builds']],
    signs: ['Soft, spongy or cracked deck boards', 'Rot or rust where the deck meets the house', 'Wobbly railings or stairs', 'Footings that have heaved or settled', 'Constant sanding and staining just to keep it looking decent'],
    process: [visit, estimate, { h: 'Permits and materials', p: 'We submit permits and order decking and railing so materials are on site when the ground is ready.' }, build, close],
    fit: ['Homeowners replacing an aging or unsafe deck', 'Owners adding outdoor living space', 'HOAs and property managers with multi-unit deck repairs'],
    pricing: [['Size and height', 'Taller decks need bigger posts, bracing and more labor.'], ['Decking material', 'Composite and PVC cost more upfront but less to maintain.'], ['Railings', 'Wood, metal, cable and glass rail systems vary widely.'], ['Stairs and landings', 'Each run adds framing and railing.'], ['Footings and access', 'Rocky soil and steep lots slow excavation.']],
    local: { h2: 'Decks for Vail Valley homes', html: '<p>Decks are one of our most requested projects across Eagle County. We build in Vail, Avon, Edwards, Eagle and Gypsum and take deck projects in Glenwood Springs, Carbondale, Aspen, Steamboat Springs and Breckenridge, where snow loads and wildfire requirements vary by jurisdiction.</p>' },
  },
  'siding-exterior-painting': {
    facts: [['Typical project', 'Siding replacement, repair or repaint'], ['Prep', 'Rot and flashing fixed first'], ['Materials', 'Fiber cement, wood, engineered wood'], ['HOA', 'Design review submittals handled']],
    signs: ['Peeling, faded or chalky paint, especially on south and west walls', 'Soft or rotted boards near the ground or around windows', 'Gaps, cracks or missing caulk', 'Woodpecker or hail damage', 'Water stains inside on exterior walls'],
    process: std,
    fit: ['Homeowners with weathered or damaged siding', 'HOAs and property managers planning exterior maintenance', 'Owners upgrading to more fire-resistant materials'],
    pricing: [['Wall area and height', 'Tall walls need scaffolding or lifts.'], ['Material', 'Fiber cement, wood and engineered wood differ in material and labor.'], ['Hidden rot', 'Sheathing and framing repairs behind failed siding.'], ['Trim and flashing', 'Window and door details take time to do right.'], ['Coating choice', 'Premium high-UV coatings cost more and last longer.']],
    local: { h2: 'Exteriors from Vail to the Roaring Fork Valley', html: '<p>Strong sun and snow are hard on exteriors everywhere in the region. We work across Eagle County and in Glenwood Springs, Carbondale, Aspen, Steamboat Springs and Breckenridge, and check each town’s and HOA’s exterior material and color rules before ordering.</p>' },
  },
  'roof-replacement-repair': {
    facts: [['Typical project', 'Repair, reroof or flat-roof system'], ['Installation', 'Trusted local roofing crew'], ['Insurance', 'Documentation and adjuster communication'], ['Interior repairs', 'Handled by Reed Home Solutions']],
    signs: ['Ice dams or icicles along the eaves every winter', 'Water stains on ceilings or walls', 'Missing, curled or granule-shedding shingles', 'Hail or wind damage after a storm', 'Ponding water on a flat roof'],
    process: [{ h: 'Inspection', p: 'We inspect and photograph the roof and attic and check for interior damage.' }, estimate, { h: 'Insurance (if applicable)', p: 'We document storm damage and communicate with your adjuster about scope.' }, build, close],
    fit: ['Homeowners with leaks, ice dams or an aging roof', 'Owners with hail or wind damage', 'HOAs and property managers with flat or low-slope roofs'],
    pricing: [['Roof size and pitch', 'Steeper roofs need more safety equipment and labor.'], ['Material', 'Asphalt, metal and flat-roof membranes differ widely.'], ['Layers to remove', 'Multiple old layers add tear-off cost.'], ['Decking repair', 'Rotted sheathing is replaced as found.'], ['Ice-and-water and ventilation', 'Key to preventing ice dams.']],
    local: { h2: 'Roofing in high-snow mountain towns', html: '<p>We manage roofing projects across Eagle County, including a recent flat-roof system on a condo building in Vail, and in nearby towns as schedules allow. Snow load, wildfire-related roofing requirements and HOA material rules vary by jurisdiction, and we confirm them on every job.</p>' },
  },
  'window-replacement': {
    facts: [['Typical project', 'Window and exterior door replacement'], ['Altitude', 'High-altitude glass confirmed'], ['Install', 'Flashed and air-sealed'], ['Egress', 'Bedroom code compliance']],
    signs: ['Fog between panes', 'Drafts, frost or ice on interior frames', 'Rotted sills or water stains under windows', 'Windows that stick or will not open', 'High heating bills in an older home'],
    process: [visit, estimate, { h: 'Ordering', p: 'We order units sized to your openings, confirm altitude handling and track lead times.' }, build, close],
    fit: ['Owners of older homes with drafty or failed windows', 'Condo owners replacing units within HOA guidelines', 'Owners adding or upgrading bedroom egress'],
    pricing: [['Number and size', 'Large and specialty shapes cost more.'], ['Frame material', 'Vinyl, fiberglass, wood and clad wood.'], ['Glass package', 'Low-e, triple pane and tempered glass where required.'], ['Insert vs. full frame', 'Full-frame replacement involves trim and siding work.'], ['Access', 'Upper floors may need lifts or scaffolding.']],
    local: { h2: 'Windows for Vail Valley homes and condos', html: '<p>We replace windows and doors across Eagle County and in nearby towns. Many condo associations in Vail and Avon specify frame colors and styles, so we confirm those requirements before ordering.</p>' },
  },
  'home-renovation-general-contracting': {
    facts: [['Typical project', 'Whole-home and multi-room renovations'], ['Network', 'Vetted local subcontractors'], ['Permits', 'Certified to pull permits'], ['Communication', 'One point of contact']],
    signs: ['Several rooms need work and you want one schedule', 'The project needs permits or structural changes', 'You are renovating to sell, rent or move in', 'You are out of town and need someone to run the job', 'Past contractors were hard to reach'],
    process: std,
    fit: ['Homeowners renovating several rooms at once', 'Investors and flippers who need fast, permitted work', 'Second-home owners who need a local contractor to manage everything', 'Condo owners working within HOA rules'],
    pricing: [['Scope', 'Number of rooms and trades involved.'], ['Structural work', 'Removing walls, beams and engineering.'], ['Finish level', 'Cabinetry, tile, fixtures and trim selections.'], ['Hidden conditions', 'Code corrections and damage found during demolition.'], ['Schedule and access', 'Occupied homes, condos and remote sites take longer.']],
    local: { h2: 'General contracting across Eagle County and nearby towns', html: '<p>Reed Home Solutions is based in Gypsum and works throughout Eagle County, including Vail, Avon, Edwards and Eagle, plus Glenwood Springs, Carbondale, Aspen, Steamboat Springs and Breckenridge. Recent work includes a permitted renovation and room addition in Edwards.</p>' },
  },
  'water-damage-insurance-repair': {
    facts: [['Typical project', 'Rebuild after water or storm damage'], ['Estimates', 'Insurance-ready, line-item'], ['Adjuster', 'Direct communication'], ['Background', 'Years in water-damage restoration']],
    signs: ['A burst pipe, leak or appliance failure has been dried out and needs rebuilding', 'Your insurer asked for a contractor estimate', 'You are unsure whether hidden damage was missed', 'Ceiling or wall stains from an ice dam or roof leak', 'Flooring buckled or cabinets swelled from water'],
    process: [{ h: 'Inspection', p: 'We inspect, photograph and measure the damage, including areas that may hide moisture.' }, { h: 'Estimate for your insurer', p: 'We write a detailed repair estimate and share it with you and your adjuster.' }, { h: 'Approval and supplements', p: 'We work through questions with the adjuster and submit supplements for hidden damage found during repairs.' }, build, close],
    fit: ['Homeowners after a burst pipe or appliance leak', 'Second-home owners who found damage after time away', 'Condo owners and HOAs coordinating repairs between units', 'Property managers handling insurance repairs'],
    pricing: [['Extent of damage', 'How many rooms and materials were affected.'], ['Like-kind replacement', 'Insurance pays for comparable materials; upgrades are separate.'], ['Hidden damage', 'Found during repairs and submitted as supplements.'], ['Matching', 'Matching existing tile, flooring or cabinets can expand scope.'], ['Deductible', 'Your responsibility under your policy.']],
    local: { h2: 'Insurance repairs across mountain towns', html: '<p>Frozen pipes in vacant second homes, ice-dam leaks and condo leaks between units are common across Eagle County, Aspen, Steamboat and Summit County. We rebuild in all of them and coordinate with HOAs and property managers when more than one unit is involved.</p>' },
  },
};
