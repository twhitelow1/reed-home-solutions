// One object = one service page at /<slug>. Depth sections (facts, signs, process, pricing
// factors, local notes) live in serviceExtras.ts. No invented prices, warranties or stats.
export type Faq = { q: string; a: string };
export type Service = {
  slug: string;
  name: string;
  group: (typeof serviceGroups)[number];
  icon: string;
  card: string; // one-line summary for cards, nav and llms.txt
  title: string; // <title>, ≤ 65 chars
  description: string; // meta description, 140–160 chars
  h1: string;
  answer: string; // answer-first intro, quotable
  sections: { h2: string; html: string }[];
  includes: string[];
  faqs: Faq[];
  related: string[]; // 3 service slugs
  partner?: string; // set when installation is done by a vetted trade partner Reed manages
};

export const serviceGroups = ['Interior Remodeling', 'Exterior & Roofing', 'Renovation & Insurance Repair'] as const;

export const services: Service[] = [
  {
    slug: 'kitchen-remodeling',
    name: 'Kitchen Remodeling',
    group: 'Interior Remodeling',
    icon: 'kitchen',
    card: 'Full kitchen remodels and refreshes: layout, cabinets, counters, tile, lighting and appliances, permitted and managed start to finish.',
    title: 'Kitchen Remodeling in the Vail Valley | Reed Home Solutions',
    description: 'Kitchen remodeling across Vail, Eagle County, Aspen and Steamboat. Layout, cabinets, counters, tile and permits handled by one local contractor. Free estimate.',
    h1: 'Kitchen remodeling in the Vail Valley',
    answer: 'Reed Home Solutions remodels kitchens in homes and condos across the Vail Valley, from Vail and Avon to Eagle, Gypsum, Glenwood Springs and Aspen. Jace Reed runs the project personally: design decisions, permits, demolition, framing, plumbing and electrical coordination, cabinets, counters, tile and final punch list, with one point of contact and fast written estimates.',
    sections: [
      {
        h2: 'What a kitchen remodel with Reed Home Solutions covers',
        html: '<p>Most kitchen projects we see fall into three sizes. A <strong>refresh</strong> keeps the layout and replaces surfaces: counters, backsplash, paint, lighting, hardware and sometimes cabinet fronts. A <strong>remodel</strong> replaces cabinets and appliances and may move a sink or range. A <strong>full renovation</strong> changes the footprint, removes or opens walls, and reroutes plumbing, gas, venting and electrical.</p><p>We help you decide which one you actually need. The goal is the kitchen you want for the budget you have, not the biggest possible scope.</p>',
      },
      {
        h2: 'Kitchens in mountain homes and condos',
        html: '<p>Kitchens here come with their own constraints. Condo kitchens in Vail, Lionshead and Avon often sit under HOA rules that limit work hours, elevator use, noise and dumpster placement, and many require the association’s approval before work starts. Older ski-era homes may hide undersized wiring, galvanized supply lines or venting that does not meet current code once walls are open.</p><p>Range hoods matter more at altitude and in tight, well-sealed homes: larger hoods may require make-up air under current mechanical codes. We plan for these items up front so they show up in the estimate, not as change orders.</p>',
      },
      {
        h2: 'Working with designers and your own selections',
        html: '<p>Bring your own designer, work from a plan you already have, or make selections with us. Jace has worked alongside local designers and is comfortable building from their drawings. If you are choosing cabinets, counters and tile yourself, we give you the lead times and measurements you need so materials arrive before the crew needs them.</p>',
      },
    ],
    includes: ['Site visit, measurements and written estimate', 'Permit applications and inspections', 'HOA and condo association coordination', 'Demolition and debris removal', 'Framing, drywall and wall removal (with engineering when load-bearing)', 'Plumbing, gas and electrical by licensed trades', 'Cabinet and countertop installation', 'Tile backsplash and flooring', 'Lighting, paint and trim', 'Final walkthrough and punch list'],
    faqs: [
      { q: 'How much does a kitchen remodel cost in the Vail Valley?', a: 'It depends on scope more than square footage: whether the layout changes, cabinet and counter choices, appliance package, and what we find behind the walls. Mountain-town labor and material delivery also add cost compared with the Front Range. We give a written, line-item estimate after a site visit so you can see where the money goes and adjust selections before work starts.' },
      { q: 'How long does a kitchen remodel take?', a: 'A surface refresh can take a couple of weeks. A full remodel with new cabinets usually runs several weeks to a few months, and the biggest variable is material lead time, especially custom cabinets and stone counters. We order long-lead items before demolition so your kitchen is not torn apart while you wait on deliveries.' },
      { q: 'Do I need a permit to remodel my kitchen?', a: 'Usually yes if you move plumbing, gas or electrical, remove walls, or replace more than cosmetic finishes. Requirements vary between the Town of Vail, Avon, Eagle County, Garfield County, Pitkin County and other jurisdictions. Jace is certified to pull permits and handles the application and inspections for you.' },
      { q: 'Can you remodel a condo kitchen with HOA rules?', a: 'Yes. We review the association’s remodeling rules before we price the job, submit any required applications, and schedule work around allowed hours, elevator reservations and parking limits.' },
      { q: 'Who provides kitchen remodeling in Eagle County?', a: 'Reed Home Solutions is a Gypsum-based remodeling contractor serving all of Eagle County, plus Summit County, Glenwood Springs, Carbondale, Aspen and Steamboat Springs as the schedule allows. Call or request a free estimate online.' },
    ],
    related: ['bathroom-remodeling', 'flooring-installation', 'home-renovation-general-contracting'],
  },
  {
    slug: 'bathroom-remodeling',
    name: 'Bathroom Remodeling',
    group: 'Interior Remodeling',
    icon: 'bath',
    card: 'Bathroom remodels, tub-to-shower conversions and tile showers, built with proper waterproofing for mountain homes and condos.',
    title: 'Bathroom Remodeling in the Vail Valley | Reed Home Solutions',
    description: 'Bathroom remodels, tub-to-shower conversions and tile showers in Vail, Eagle, Avon and Aspen. Waterproofed right, permitted and managed locally. Free estimate.',
    h1: 'Bathroom remodeling in the Vail Valley',
    answer: 'Reed Home Solutions remodels bathrooms across Eagle County and the Roaring Fork Valley, from powder-room updates to full primary-bath renovations and tub-to-shower conversions. Because Jace Reed comes from water-damage restoration, waterproofing, ventilation and leak prevention are built into every bathroom we do.',
    sections: [
      {
        h2: 'Bathroom remodels built by someone who has seen the leaks',
        html: '<p>Before starting Reed Home Solutions, Jace spent years in restoration, opening up walls and floors after water losses. A large share of those losses start in bathrooms: failed shower pans, unsealed tile, poorly vented fans and supply lines that freeze in exterior walls. That experience shapes how we build.</p><p>Every tiled shower gets a continuous waterproofing system under the tile, sloped correctly to the drain, with properly sealed niches and benches. Exhaust fans are sized for the room and vented outside, not into the attic.</p>',
      },
      {
        h2: 'Common bathroom projects',
        html: '<ul><li><strong>Tub-to-shower conversions</strong> for easier access, common in condos and rentals.</li><li><strong>Walk-in tile showers</strong> with glass, niches and curbless entries where the floor structure allows.</li><li><strong>Primary-bath renovations</strong> with new layout, double vanities, heated floors and lighting.</li><li><strong>Powder-room and guest-bath updates</strong> before a sale or rental season.</li><li><strong>Accessibility upgrades</strong> such as blocking for grab bars, comfort-height toilets and wider doorways.</li></ul>',
      },
      {
        h2: 'Condo and rental bathrooms',
        html: '<p>Bathrooms in Vail and Avon condos often share plumbing stacks with neighbors and sit above other units, so mistakes travel. We confirm shut-off procedures with the HOA, protect common areas, and schedule work to keep a rental property’s downtime short between bookings.</p>',
      },
    ],
    includes: ['Site visit and written estimate', 'Permits and inspections where required', 'Demolition and disposal', 'Plumbing rough-in and fixture installation by licensed plumbers', 'Shower waterproofing system under all tile', 'Tile floors, walls and shower surrounds', 'Vanities, counters, mirrors and lighting', 'Exhaust fan sized and vented to the exterior', 'Glass shower doors and accessories', 'Final clean and walkthrough'],
    faqs: [
      { q: 'How much does a bathroom remodel cost in Vail or Eagle County?', a: 'Cost depends on size, whether fixtures move, tile choices, glass, and condition of the subfloor and framing behind the old surround. A tub-to-shower conversion costs far less than a primary bath with relocated plumbing. We give a line-item written estimate after seeing the space.' },
      { q: 'How long does a bathroom remodel take?', a: 'Many bathroom remodels take two to five weeks of active work once materials are on site. Tile, glass and custom vanities drive the schedule, so we confirm lead times before demolition.' },
      { q: 'Can you convert a bathtub to a walk-in shower?', a: 'Yes. Tub-to-shower conversions are one of our most common projects. We check drain location and floor framing, then build a waterproofed tile shower or install a quality shower base, with glass sized to the opening.' },
      { q: 'Why does shower waterproofing matter so much?', a: 'Tile and grout are not waterproof. Without a continuous membrane underneath, water slowly reaches the framing and subfloor, which leads to rot and mold that often is not visible until it is expensive. Jace has repaired many of these losses in restoration, so we do not skip this step.' },
      { q: 'Do you remodel bathrooms in Aspen and Steamboat Springs?', a: 'Yes. Our primary area is Eagle County, and we take bathroom projects in Summit County, Glenwood Springs, Carbondale, Aspen and Steamboat Springs as the schedule allows.' },
    ],
    related: ['kitchen-remodeling', 'basement-lock-off-remodeling', 'water-damage-insurance-repair'],
  },
  {
    slug: 'basement-lock-off-remodeling',
    name: 'Basement & Lock-Off Remodeling',
    group: 'Interior Remodeling',
    icon: 'key',
    card: 'Basement finishes, added bedrooms and lock-off conversions built to code, with egress, fire separation and permits handled.',
    title: 'Basement & Lock-Off Remodeling, Vail Valley | Reed Home Solutions',
    description: 'Finish a basement, add bedrooms or convert a lock-off into a rental unit in the Vail Valley. Code compliance, egress and permits handled. Free estimate.',
    h1: 'Basement finishing and lock-off conversions in the Vail Valley',
    answer: 'Reed Home Solutions finishes basements, adds bedrooms and converts lock-offs into separate living or rental units across Eagle County and nearby mountain towns. Jace Reed handles the code side: egress windows, fire separation, ceiling heights, smoke and CO alarms, and permits, so the added space is legal, insurable and counts when you sell.',
    sections: [
      {
        h2: 'Adding usable, legal space',
        html: '<p>In a market where square footage is expensive, the space under your main floor is often the cheapest place to grow. A finished basement can add a bedroom, a family room, a bunk room for guests, a gear room or a home office.</p><p>Jace has done this on his own projects. On a permitted home renovation in Edwards, his team added rooms and had to meet every code requirement that comes with creating new bedrooms. That experience is exactly what basement and lock-off projects need.</p>',
      },
      {
        h2: 'What makes a lock-off conversion different',
        html: '<p>A lock-off is a portion of a home that can be closed off from the main unit, usually with its own entrance and bathroom. They are common in Vail Valley homes and condos and are popular for long-term local rentals, caretaker units and family visits.</p><p>Turning a space into a separate unit raises questions that a basement family room does not: whether your zoning and HOA allow it, fire separation between units, separate egress, a kitchenette and its venting, and whether a short-term rental license applies in your town. We help you sort out what your jurisdiction allows before you spend money on design.</p>',
      },
      {
        h2: 'Code items we plan for',
        html: '<ul><li><strong>Emergency escape and rescue openings</strong> (egress windows or doors) for every sleeping room.</li><li><strong>Ceiling height</strong> under beams, ducts and soffits.</li><li><strong>Fire separation</strong> between units where required, including rated assemblies and doors.</li><li><strong>Smoke and carbon monoxide alarms</strong>, interconnected where required.</li><li><strong>Moisture and radon</strong>: Colorado has elevated radon levels, so we recommend testing and plan for mitigation if needed.</li></ul>',
      },
    ],
    includes: ['Feasibility walkthrough and zoning/HOA check', 'Written estimate with code items itemized', 'Permits and inspections', 'Egress window or door installation', 'Framing, insulation and drywall', 'Bathroom and kitchenette build-out', 'Electrical, plumbing and HVAC by licensed trades', 'Fire separation and alarms where required', 'Flooring, trim and paint', 'Final inspection sign-off'],
    faqs: [
      { q: 'Can I turn my lock-off into a rental unit?', a: 'Often, but it depends on your zoning, HOA covenants and town rules, and some towns require a short-term rental license or limit accessory units. We check those first, then design the conversion to meet building and fire code so the unit is legal to rent.' },
      { q: 'Does a basement bedroom need an egress window?', a: 'Yes. Under the International Residential Code, which Colorado mountain jurisdictions generally adopt, every sleeping room needs an emergency escape and rescue opening, which in a basement usually means a code-sized egress window with a window well. We install these as part of the project.' },
      { q: 'How much does it cost to finish a basement?', a: 'The biggest cost drivers are whether you add a bathroom or kitchenette, how many egress openings you need, moisture or radon mitigation, and finish level. We itemize each so you can phase the work if needed.' },
      { q: 'Will a finished basement add value to my home?', a: 'Permitted, code-compliant living space is generally counted by appraisers and buyers; unpermitted space can create problems at sale or with insurance. That is why we build it permitted from day one.' },
      { q: 'Do you handle permits for basement remodels?', a: 'Yes. Jace is certified to pull permits and manages the application, inspections and final sign-off with your town or county building department.' },
    ],
    related: ['home-renovation-general-contracting', 'bathroom-remodeling', 'window-replacement'],
  },
  {
    slug: 'flooring-installation',
    name: 'Flooring Installation',
    group: 'Interior Remodeling',
    icon: 'floor',
    card: 'Hardwood, luxury vinyl plank, tile and carpet installed by a trusted local flooring partner, coordinated with the rest of your remodel.',
    title: 'Flooring Installation in the Vail Valley | Reed Home Solutions',
    description: 'Hardwood, LVP, tile and carpet installation in Vail, Eagle County and nearby towns, coordinated with your remodel by one local contractor. Free estimate.',
    h1: 'Flooring installation in the Vail Valley',
    answer: 'Reed Home Solutions installs hardwood, luxury vinyl plank, tile and carpet in homes and condos across Eagle County and nearby mountain towns. Carpet and most flooring is installed by a long-time local flooring partner, with Jace Reed coordinating subfloor prep, scheduling and the rest of the remodel so trades are not tripping over each other.',
    partner: 'Carpet and most flooring is installed by an established local flooring company Jace has worked with for years. Tile is set by our tile crew.',
    sections: [
      {
        h2: 'Choosing flooring for a mountain home',
        html: '<p>Flooring here takes a beating: ski boots, gravel, mag chloride from winter roads, dogs and wet gear. Indoor air is also very dry in winter, which makes solid hardwood move more than it would at lower elevations.</p><div class="tablewrap"><table><thead><tr><th scope="col">Material</th><th scope="col">Strengths</th><th scope="col">Watch for</th></tr></thead><tbody><tr><td><strong>Luxury vinyl plank (LVP)</strong></td><td>Waterproof, durable, good for entries, basements and rentals</td><td>Needs a flat subfloor; quality varies widely</td></tr><tr><td><strong>Engineered hardwood</strong></td><td>Real wood look, more stable than solid wood in dry climates</td><td>Can scratch; limited refinishing on thin wear layers</td></tr><tr><td><strong>Solid hardwood</strong></td><td>Can be refinished many times</td><td>Moves with humidity swings; acclimation is critical</td></tr><tr><td><strong>Tile</strong></td><td>Best for wet areas, mudrooms and radiant heat</td><td>Cold without radiant heat; needs a stiff floor structure</td></tr><tr><td><strong>Carpet</strong></td><td>Warm and quiet for bedrooms and bunk rooms</td><td>Not for entries or wet areas</td></tr></tbody></table></div>',
      },
      {
        h2: 'Prep is where flooring succeeds or fails',
        html: '<p>Most flooring failures come from what is underneath: out-of-flat subfloors, moisture in concrete slabs, or skipped acclimation. We check flatness and moisture, fix squeaks and soft spots, and install the right underlayment before the new floor goes down.</p>',
      },
    ],
    includes: ['Measurements and written estimate', 'Removal and disposal of old flooring', 'Subfloor repair, leveling and moisture testing', 'Underlayment and transitions', 'Hardwood, LVP, laminate, tile or carpet installation', 'Baseboard and trim reinstallation', 'Coordination with other remodel trades'],
    faqs: [
      { q: 'What is the best flooring for a Vail Valley home?', a: 'For entries, basements and rentals, luxury vinyl plank and tile hold up best to snow, gravel and water. For living areas, engineered hardwood tends to handle our dry winter air better than solid hardwood. We help you match material to each room.' },
      { q: 'Do you install carpet?', a: 'Yes, through a local flooring company Jace has worked with for years. We coordinate the measure, install and any subfloor repair as part of your project.' },
      { q: 'How much does flooring installation cost?', a: 'Material choice is the biggest factor, followed by square footage, stairs, subfloor repair and removal of old flooring. We provide a written estimate after measuring.' },
      { q: 'Can you install flooring over radiant heat?', a: 'Tile and many engineered and vinyl products are rated for radiant heat. We confirm the manufacturer’s requirements before recommending a product.' },
    ],
    related: ['kitchen-remodeling', 'basement-lock-off-remodeling', 'water-damage-insurance-repair'],
  },
  {
    slug: 'deck-building-repair',
    name: 'Deck Building & Repair',
    group: 'Exterior & Roofing',
    icon: 'deck',
    card: 'New decks, rebuilds and repairs in composite or wood, framed for snow loads and flashed to protect your home.',
    title: 'Deck Building & Repair in the Vail Valley | Reed Home Solutions',
    description: 'New decks, deck rebuilds and repairs in Vail, Eagle County and nearby towns. Built for snow loads, flashed right and permitted. Request a free estimate.',
    h1: 'Deck building and deck repair in the Vail Valley',
    answer: 'Reed Home Solutions builds new decks, rebuilds worn-out decks and repairs framing, railings and stairs across Eagle and Summit counties, Glenwood Springs, Carbondale, Aspen and Steamboat. Decks here carry heavy snow and take intense high-altitude sun, so we frame for local loads, flash the ledger to protect your house, and help you pick decking that will last.',
    sections: [
      {
        h2: 'Decks built for mountain conditions',
        html: '<p>A deck in the Vail Valley has a harder life than one in Denver. Design snow loads are higher, freeze-thaw cycles work fasteners loose, and UV at 7,000+ feet fades and checks wood quickly. Many mountain jurisdictions also have wildfire-related requirements for decks and the materials under and around them.</p><p>We size joists, beams and footings for your jurisdiction’s snow load, use corrosion-resistant hardware rated for treated lumber, and install proper flashing where the deck meets the house. That ledger connection is the single most common source of rot and water damage we see on older decks.</p>',
      },
      {
        h2: 'Composite or wood?',
        html: '<div class="tablewrap"><table><thead><tr><th scope="col">Decking</th><th scope="col">Pros</th><th scope="col">Cons</th></tr></thead><tbody><tr><td><strong>Composite / PVC</strong></td><td>Low maintenance, no staining, resists splintering</td><td>Higher upfront cost; can get hot in direct sun</td></tr><tr><td><strong>Cedar or redwood</strong></td><td>Natural look, lighter weight</td><td>Needs regular sealing at altitude; fades fast</td></tr><tr><td><strong>Pressure-treated</strong></td><td>Lowest material cost</td><td>Checks and warps without maintenance</td></tr><tr><td><strong>Hardwood (e.g., ipe)</strong></td><td>Very dense and durable</td><td>Expensive and hard to work</td></tr></tbody></table></div>',
      },
      {
        h2: 'Deck repair and rebuilds',
        html: '<p>Not every tired deck needs to be torn out. If the framing and footings are sound, we can replace boards, railings and stairs. If joists are soft, the ledger is rotted, or footings have heaved, a rebuild is usually the safer and better-value option. We show you what we find and give you both options when both are reasonable.</p>',
      },
    ],
    includes: ['Inspection of existing framing, ledger and footings', 'Design and written estimate', 'Permits and inspections', 'Footings and framing sized for local snow loads', 'Ledger flashing and waterproofing', 'Composite, PVC or wood decking', 'Railings, stairs and gates', 'Under-deck debris removal and cleanup'],
    faqs: [
      { q: 'How much does a new deck cost in the Vail Valley?', a: 'Size, height off the ground, decking material, railing style, stairs and access for equipment all drive cost. Composite costs more upfront than wood but saves on maintenance. We give a written estimate with material options side by side.' },
      { q: 'Do I need a permit to build a deck?', a: 'In most mountain jurisdictions, yes, especially for decks attached to the house or more than about 30 inches above grade. Jace is certified to pull permits and handles the application and inspections.' },
      { q: 'When is the best time to build a deck in the mountains?', a: 'Late spring through fall, once the ground thaws. Good contractors book up early, so the best time to plan and price a deck is winter or early spring.' },
      { q: 'Should I repair or replace my old deck?', a: 'If the framing, ledger and footings are sound, repairing boards and railings is usually enough. Rot at the ledger, soft joists or moving footings point to a rebuild. We inspect and explain what we find.' },
      { q: 'Who builds decks in Eagle County?', a: 'Reed Home Solutions builds and repairs decks throughout Eagle County, including Vail, Avon, Edwards, Eagle and Gypsum, plus Summit County, Glenwood Springs, Carbondale, Aspen and Steamboat Springs.' },
    ],
    related: ['siding-exterior-painting', 'roof-replacement-repair', 'home-renovation-general-contracting'],
  },
  {
    slug: 'siding-exterior-painting',
    name: 'Siding & Exterior Painting',
    group: 'Exterior & Roofing',
    icon: 'siding',
    card: 'Siding replacement and repair, trim, and exterior painting and staining that stands up to high-altitude sun and snow.',
    title: 'Siding & Exterior Painting | Vail Valley | Reed Home Solutions',
    description: 'Siding replacement, trim repair and exterior painting or staining in Vail, Eagle County and nearby towns. Built for UV, snow and wildfire zones. Free estimate.',
    h1: 'Siding replacement and exterior painting in the Vail Valley',
    answer: 'Reed Home Solutions replaces and repairs siding and handles exterior painting and staining for homes and small multi-family buildings across Eagle County and nearby mountain towns. We fix the rot and flashing problems first, then recommend siding and coatings suited to strong mountain sun, snow and, where it applies, wildfire-resistant construction.',
    sections: [
      {
        h2: 'Why exteriors wear out faster up here',
        html: '<p>UV exposure at high elevation breaks down paint and stain much faster than at sea level, especially on south- and west-facing walls. Snow piles against lower siding, and freeze-thaw cycles open gaps around windows and trim. Once water gets behind siding, it rots sheathing and framing quietly for years.</p>',
      },
      {
        h2: 'Siding options',
        html: '<ul><li><strong>Fiber cement</strong>: noncombustible, stable and paintable; a common choice in wildfire-prone areas.</li><li><strong>Wood siding and shingles</strong>: traditional mountain look; needs regular stain or paint and may be restricted in some wildfire zones or HOAs.</li><li><strong>Engineered wood</strong>: wood look with better resistance to rot and impact than natural wood.</li><li><strong>Metal and stone veneer accents</strong>: durable, popular on newer mountain homes and at snow-splash zones.</li></ul><p>Many HOAs and towns have design review rules for exterior materials and colors. We check those before you choose.</p>',
      },
      {
        h2: 'Exterior painting and staining',
        html: '<p>A good exterior paint job is mostly preparation: washing, scraping, replacing rotted boards, caulking and priming bare wood. We use coatings made for high-UV exposure and schedule work for the warm, dry stretches when the product can cure properly.</p>',
      },
    ],
    includes: ['Exterior inspection for rot, flashing and drainage issues', 'Written estimate', 'HOA and design review submittals', 'Siding removal and disposal', 'Sheathing repair and weather barrier', 'Window, door and trim flashing', 'Siding and trim installation', 'Surface prep, priming, painting or staining', 'Cleanup and final walkthrough'],
    faqs: [
      { q: 'How often should a house in the Vail Valley be painted or stained?', a: 'More often than at lower elevations, because UV breaks down coatings faster. South- and west-facing walls usually show wear first. We assess condition and recommend a coating that extends the interval.' },
      { q: 'What siding is best for wildfire areas?', a: 'Noncombustible materials such as fiber cement, stucco, stone and metal are generally preferred in wildfire-prone areas, and some jurisdictions require ignition-resistant materials. We confirm what your town or county requires.' },
      { q: 'Can you replace just the damaged siding?', a: 'Often yes, if matching material is available and the damage is limited. We open the damaged area, fix any rot or flashing behind it, and match profile and color as closely as possible.' },
      { q: 'Do you handle HOA approval for exterior changes?', a: 'Yes. We prepare material and color information for HOA or design review submittals and build the approval time into the schedule.' },
    ],
    related: ['roof-replacement-repair', 'window-replacement', 'deck-building-repair'],
  },
  {
    slug: 'roof-replacement-repair',
    name: 'Roof Replacement & Repair',
    group: 'Exterior & Roofing',
    icon: 'roof',
    card: 'Roof repairs, replacements and flat-roof systems for homes and condos, managed by Reed and installed by a trusted local roofing crew.',
    title: 'Roof Replacement & Repair | Vail Valley | Reed Home Solutions',
    description: 'Roof repair, replacement and flat-roof systems for homes and condos in Vail, Eagle County and nearby towns. Ice dams, snow load and insurance claims.',
    h1: 'Roof replacement and roof repair in the Vail Valley',
    answer: 'Reed Home Solutions manages roof repairs, full replacements and flat-roof systems for homes and condo buildings across Eagle County and nearby mountain towns. Installation is done by a trusted local roofing crew Jace works with regularly, including a recent flat-roof system on a condo building in Vail, with Reed Home Solutions handling scope, permits, insurance paperwork and any interior repairs from leaks.',
    partner: 'Roofing is installed by an established local roofing crew Jace works with regularly. Reed Home Solutions manages the project, permits and any related interior repairs.',
    sections: [
      {
        h2: 'Mountain roofing problems we see',
        html: '<ul><li><strong>Ice dams</strong>: heat loss melts snow, which refreezes at the eaves and backs water under shingles. Ventilation, insulation and ice-and-water underlayment are the long-term fix.</li><li><strong>Snow load and sliding snow</strong>: heavy snow stresses older framing, and sliding snow damages gutters, vents and decks below.</li><li><strong>Hail and wind</strong>: storm damage that often qualifies for an insurance claim.</li><li><strong>Flat and low-slope roofs</strong> on condos and modern homes, where drainage and membrane seams are everything.</li></ul>',
      },
      {
        h2: 'Roof leaks and the damage inside',
        html: '<p>A roof leak rarely stops at the roof. Wet insulation, stained drywall and mold in the attic are common by the time a leak is noticed. Because Jace comes from water-damage restoration, Reed Home Solutions can handle both sides: the roof and the interior repairs, under one estimate.</p>',
      },
      {
        h2: 'Roofing and insurance claims',
        html: '<p>If hail or wind damaged your roof, we document the damage, prepare a detailed repair estimate and communicate with your adjuster. Colorado law prohibits roofing contractors from paying or waiving a homeowner’s insurance deductible, and we follow that rule on every job. Be wary of any contractor who offers to.</p><p>Read our <a href="/water-damage-insurance-claim-guide">insurance claim guide</a> for what to expect.</p>',
      },
    ],
    includes: ['Roof inspection and photo documentation', 'Written estimate with material options', 'Insurance claim documentation and adjuster communication', 'Permits and inspections', 'Tear-off and disposal', 'Ice-and-water underlayment at eaves and valleys', 'Shingle, metal or flat-roof membrane installation', 'Flashing, vents and gutters', 'Interior leak repairs (drywall, insulation, paint)'],
    faqs: [
      { q: 'Do you install roofs yourselves?', a: 'Roofing is installed by an established local roofing crew Jace works with regularly. Reed Home Solutions manages the scope, permits, schedule, insurance paperwork and any interior repairs, so you have one contractor accountable for the whole job.' },
      { q: 'How do I stop ice dams?', a: 'Short term, careful snow and ice removal at the eaves. Long term, ice dams are a heat-loss problem: improving attic insulation and ventilation and installing ice-and-water underlayment during reroofing are the lasting fixes.' },
      { q: 'Will insurance pay for my roof?', a: 'Insurance typically covers sudden damage such as hail or wind, not wear and age. We document damage and prepare an estimate for your adjuster, but coverage decisions are your insurer’s. We never offer to waive or cover a deductible, which Colorado law prohibits for roofing contractors.' },
      { q: 'Can you repair a flat roof on a condo building?', a: 'Yes. We recently managed a flat-roof system on a condo building in Vail and can work with HOAs and property managers on scope, access and scheduling.' },
    ],
    related: ['water-damage-insurance-repair', 'siding-exterior-painting', 'window-replacement'],
  },
  {
    slug: 'window-replacement',
    name: 'Window & Door Replacement',
    group: 'Exterior & Roofing',
    icon: 'window',
    card: 'Energy-efficient window and exterior door replacement, sourced through trusted suppliers and flashed correctly for mountain weather.',
    title: 'Window & Door Replacement | Vail Valley | Reed Home Solutions',
    description: 'Replace drafty or fogged windows and exterior doors in Vail, Eagle County and nearby towns. Efficient units, proper flashing, managed locally. Free estimate.',
    h1: 'Window and door replacement in the Vail Valley',
    answer: 'Reed Home Solutions replaces windows and exterior doors in homes and condos across Eagle County and nearby mountain towns, sourcing units through trusted window suppliers and installers. We focus on what makes replacement windows last at altitude: the right glass, careful flashing and air sealing, and coordination with siding, trim and HOA requirements.',
    partner: 'Windows are sourced through established window suppliers and installers; Reed Home Solutions manages measurement, ordering, installation and trim.',
    sections: [
      {
        h2: 'Signs your windows are due',
        html: '<ul><li>Fogging or condensation between the panes (a failed seal).</li><li>Drafts, frost or ice on the inside of frames in winter.</li><li>Rotted sills or trim, or water stains below windows.</li><li>Windows that are hard to open, which matters for egress in bedrooms.</li><li>Single-pane or early double-pane units in older ski-era homes.</li></ul>',
      },
      {
        h2: 'Glass and frames for high-altitude homes',
        html: '<p>Insulated glass units are sealed at the factory’s elevation. Units shipped to high altitude need to be built or equipped for the pressure difference, or seals can fail early. We confirm altitude handling with the supplier on every order. Low-e coatings help with winter heat loss and strong summer sun, and frame material (vinyl, fiberglass, wood, clad wood) affects cost, look and HOA approval.</p>',
      },
      {
        h2: 'Installation is what keeps water out',
        html: '<p>Most window leaks are installation problems, not product problems. We flash the rough opening, integrate the window with the weather barrier, and air-seal and insulate around the frame before trim goes back on.</p>',
      },
    ],
    includes: ['Measurements and product recommendations', 'Written estimate', 'HOA submittals where required', 'Ordering and lead-time tracking', 'Removal of old units', 'Rough-opening repair and flashing', 'Installation, air sealing and insulation', 'Interior and exterior trim', 'Egress-compliant bedroom windows'],
    faqs: [
      { q: 'How much does window replacement cost in the Vail Valley?', a: 'It depends on the number and size of windows, frame material, glass package, whether it is an insert or full-frame replacement, and trim or siding repair. We provide a written estimate after measuring.' },
      { q: 'How long do replacement windows take to arrive?', a: 'Lead times vary by manufacturer and season, often several weeks or more. We order early and schedule installation around delivery.' },
      { q: 'Why do new windows fog up at high altitude?', a: 'Sealed glass units made at low elevation can fail when shipped to high altitude unless they are built for it. We confirm the supplier accounts for altitude on every order.' },
      { q: 'Do you replace exterior doors too?', a: 'Yes. Entry doors, patio doors and sliders, installed with the same flashing and air sealing as windows.' },
    ],
    related: ['siding-exterior-painting', 'basement-lock-off-remodeling', 'home-renovation-general-contracting'],
  },
  {
    slug: 'home-renovation-general-contracting',
    name: 'Home Renovation & General Contracting',
    group: 'Renovation & Insurance Repair',
    icon: 'hardhat',
    card: 'Whole-home renovations, additions and multi-room projects run by one general contractor with a strong local subcontractor network.',
    title: 'General Contractor in the Vail Valley | Reed Home Solutions',
    description: 'General contractor for home renovations, additions and multi-room remodels in Vail, Eagle County and nearby towns. One point of contact. Free estimate.',
    h1: 'General contractor for home renovations in the Vail Valley',
    answer: 'Reed Home Solutions is a general contractor for home renovations, additions and multi-room remodels across Eagle and Summit counties, the Roaring Fork Valley and Steamboat Springs. Jace Reed manages the whole job, including permits, scheduling, framing, tile, flooring, insulation, drywall and paint through a vetted local subcontractor network, so you have one accountable point of contact.',
    sections: [
      {
        h2: 'What a general contractor does for you',
        html: '<p>A renovation touches many trades: framing, plumbing, electrical, HVAC, insulation, drywall, tile, flooring, cabinets, paint and trim. Each depends on the one before it. The general contractor’s job is to price the whole project, pull permits, schedule each trade in the right order, keep inspections on track and make sure the finished work meets the plan and the code.</p><p>Jace has built a strong subcontractor base for framing, tile, flooring, carpet, insulation, drywall and paint over his years in local construction and restoration. We use people we have worked with, not whoever is available that week.</p>',
      },
      {
        h2: 'Projects we take on',
        html: '<ul><li>Whole-home and multi-room renovations, including fix-and-flip and pre-sale renovations.</li><li>Additions and added bedrooms.</li><li>Kitchen, bath and basement projects combined into one schedule.</li><li>Condo renovations under HOA rules.</li><li>Rental and second-home updates between seasons.</li><li>Custom building projects, by discussion.</li></ul><p>Jace recently completed a fully permitted renovation of a home in Edwards, adding rooms and bringing the house up to current code.</p>',
      },
      {
        h2: 'Fast answers and clear estimates',
        html: '<p>The most common complaint about contractors is not hearing back. We aim to turn estimates around quickly, explain what is and is not included, and keep you updated through the job. If something unexpected shows up behind a wall, you hear about it the same day, with options and prices before we proceed.</p>',
      },
    ],
    includes: ['Site visit and scope review', 'Line-item written estimate', 'Permits, inspections and code compliance', 'HOA and design review coordination', 'Scheduling of all trades', 'Framing, insulation, drywall and paint', 'Plumbing, electrical and HVAC through licensed trades', 'Tile, flooring, cabinets and trim', 'Change orders in writing before work proceeds', 'Final walkthrough and punch list'],
    faqs: [
      { q: 'Do I need a general contractor for my renovation?', a: 'If the project involves more than one trade, structural changes or permits, a general contractor saves time and reduces risk by coordinating trades, inspections and code compliance. For a single small job, you may not need one.' },
      { q: 'Are you licensed and insured?', a: 'Reed Home Solutions is insured, and Jace Reed is certified to pull building permits. Contractor licensing in Colorado is handled by individual towns and counties; we register where each project requires and can provide proof of insurance on request.' },
      { q: 'Do you do custom homes?', a: 'Our focus is remodels and renovations. Jace can take on custom building projects, and we are happy to talk through yours.' },
      { q: 'How quickly can I get an estimate?', a: 'Fast estimates are a priority. After a site visit, we aim to deliver a written estimate quickly, and sooner for simple projects. Call to schedule a visit.' },
      { q: 'Who is a good general contractor in the Vail Valley?', a: 'Look for someone who answers the phone, gives written line-item estimates, pulls permits, is insured and can show completed work. Reed Home Solutions is a Gypsum-based general contractor serving Eagle County and nearby mountain towns.' },
    ],
    related: ['kitchen-remodeling', 'basement-lock-off-remodeling', 'water-damage-insurance-repair'],
  },
  {
    slug: 'water-damage-insurance-repair',
    name: 'Water Damage & Insurance Repair',
    group: 'Renovation & Insurance Repair',
    icon: 'droplet',
    card: 'Rebuild after water, freeze or storm damage, with insurance-ready estimates and direct communication with your adjuster.',
    title: 'Water Damage Repair & Insurance Claims | Reed Home Solutions',
    description: 'Rebuild after water, frozen-pipe or storm damage in the Vail Valley. Insurance-ready estimates and direct adjuster communication from a restoration pro.',
    h1: 'Water damage repair and insurance rebuilds in the Vail Valley',
    answer: 'Reed Home Solutions rebuilds homes and condos after water, frozen-pipe and storm damage across Eagle County and nearby mountain towns. Jace Reed spent years in water-damage restoration, so he can write detailed, insurance-ready repair estimates, talk directly with your adjuster, and handle the rebuild: drywall, insulation, cabinets, flooring, tile and paint.',
    sections: [
      {
        h2: 'Why a restoration background matters',
        html: '<p>After a water loss, two things decide how smoothly the claim goes: how well the damage is documented and how clearly the repair scope is written. Most general contractors are not used to writing estimates the way insurance adjusters review them. Jace is, from years of creating estimates for water losses and communicating with insurers, property managers and homeowners.</p><p>That means fewer back-and-forth rounds with your insurer, and a rebuild that matches what was approved.</p>',
      },
      {
        h2: 'Common losses in mountain homes',
        html: '<ul><li><strong>Frozen and burst pipes</strong> in exterior walls, crawlspaces and vacant second homes.</li><li><strong>Ice dam leaks</strong> into ceilings and walls.</li><li><strong>Failed supply lines</strong> under sinks, toilets, washers and refrigerators.</li><li><strong>Shower pan and tile failures</strong> leaking into the floor below, often in condos.</li><li><strong>Water heater and boiler failures</strong>.</li></ul>',
      },
      {
        h2: 'Mitigation first, then the rebuild',
        html: '<p>If water is actively coming in or materials are still wet, call a water mitigation company and your insurer right away: drying and removal of wet materials should start within the first day or two to limit mold. Once the space is dry, Reed Home Solutions handles the reconstruction. If you are not sure what to do first, call us and we will point you in the right direction.</p><p>See the step-by-step <a href="/water-damage-insurance-claim-guide">water damage insurance claim guide</a>.</p>',
      },
    ],
    includes: ['Damage inspection and photo documentation', 'Detailed, insurance-ready repair estimate', 'Direct communication with your adjuster', 'Supplements for hidden damage found during repairs', 'Permits where required', 'Drywall, insulation and texture', 'Cabinets, counters and trim', 'Flooring and tile', 'Paint and final clean', 'Optional upgrades priced separately from the claim'],
    faqs: [
      { q: 'Can you work directly with my insurance company?', a: 'Yes. We prepare a detailed repair estimate, provide photos and documentation, and communicate with your adjuster about scope. Coverage decisions are made by your insurer, and you remain the policyholder; we are your contractor, not a public adjuster.' },
      { q: 'What should I do first after a water leak?', a: 'Stop the water at the shut-off if you can, make the area safe, take photos, and call your insurer. If materials are wet, a water mitigation company should start drying right away. Then call us for the rebuild estimate.' },
      { q: 'Does homeowners insurance cover frozen pipes?', a: 'Many policies cover sudden water damage from a burst pipe, but terms vary, and some policies limit coverage if a home was left unheated. Check your policy or ask your agent. We document the damage either way.' },
      { q: 'Can I upgrade materials during an insurance repair?', a: 'Often yes. Insurance pays for like-kind-and-quality repair, and you pay the difference for upgrades. We price upgrades separately so your claim stays clean.' },
      { q: 'Will you waive my deductible?', a: 'No. You are responsible for your deductible, and Colorado law prohibits roofing contractors from paying or waiving it. We apply the same standard to every insurance job.' },
    ],
    related: ['bathroom-remodeling', 'roof-replacement-repair', 'home-renovation-general-contracting'],
  },
  {
    slug: 'condo-remodeling',
    name: 'Condo & HOA Remodeling',
    group: 'Interior Remodeling',
    icon: 'building',
    card: 'Condo and townhome remodels run inside HOA rules: approvals, work hours, elevator and parking logistics, and neighbors below.',
    title: 'Condo Remodeling in Vail & Summit County | Reed Home Solutions',
    description: 'Condo and townhome remodeling in Vail, Avon, Beaver Creek, Breckenridge and Frisco. HOA approvals, access rules and absentee owners handled. Free estimate.',
    h1: 'Condo and HOA remodeling in the Vail Valley and Summit County',
    answer: 'Reed Home Solutions remodels condos and townhomes in Vail, Avon, Beaver Creek, Breckenridge, Frisco and Keystone. Condo work is mostly logistics: HOA approval before demo, allowed work hours, elevator and loading-dock reservations, parking, protecting common areas and not flooding the unit below. We plan all of it up front, and owners who are out of town get a progress update every working day.',
    sections: [
      {
        h2: 'Why condo remodels are different',
        html: '<p>In a single-family home, you and the building department make the decisions. In a condo, the homeowners association has a say too. Most mountain-town associations require written approval before work starts, and many limit work to weekdays during set hours. Some require proof of insurance from every contractor, a deposit for common-area damage, or a pre-construction walkthrough with the property manager.</p><p>Colorado associations operate under the Colorado Common Interest Ownership Act (CCIOA) and their own declarations and rules. Those documents decide what you can change inside your unit and what counts as a common element, like shared walls, plumbing stacks and exterior windows. We read them with you before we price the job, so nothing gets stopped halfway.</p>',
      },
      {
        h2: 'Logistics we plan before day one',
        html: '<ul><li><strong>Approval package:</strong> scope, drawings or photos, contractor insurance certificate, schedule.</li><li><strong>Access:</strong> elevator pads and reservations, loading-dock times, parking for one work truck, key or fob handoff.</li><li><strong>Noise and hours:</strong> loud work (demo, tile cutting) scheduled inside the allowed window.</li><li><strong>Water:</strong> shut-off locations confirmed with the HOA before plumbing work, because a leak travels to the unit below.</li><li><strong>Debris:</strong> where a dumpster or trailer can sit, or haul-off by the load.</li></ul>',
      },
      {
        h2: 'Owners who are not here',
        html: '<p>Many condo owners live out of state or rent the unit out. You will not have to chase us for news. During active work you get a short update every working day: what got done, what is next, and any decision we need from you, with photos. When something unexpected turns up behind a wall, you hear about it that day with options and a price before we go further.</p>',
      },
    ],
    includes: ['Review of HOA declaration and remodeling rules', 'HOA approval package and contractor insurance certificate', 'Permits and inspections', 'Elevator, parking and common-area protection', 'Kitchen, bath, flooring and finish work', 'Coordination with the property manager', 'Daily photo updates for absentee owners', 'Final walkthrough and punch list'],
    faqs: [
      { q: 'Do I need HOA approval to remodel my condo?', a: 'Usually yes. Most Colorado mountain-town associations require written approval before work starts, especially for anything touching plumbing, walls, flooring or windows. We prepare the approval package with you.' },
      { q: 'Can you remodel my condo while I live out of state?', a: 'Yes. We coordinate access with your property manager or HOA and send a progress update with photos every working day of active work.' },
      { q: 'What is CCIOA and why does it matter for my remodel?', a: 'The Colorado Common Interest Ownership Act governs how Colorado HOAs operate. Together with your association declaration and rules, it shapes what you can change inside your unit and which parts of the building belong to the association. We review those documents before pricing.' },
      { q: 'What if my condo remodel leaks into the unit below?', a: 'We confirm shut-offs with the HOA before plumbing work, protect floors and test new plumbing before closing walls. Reed Home Solutions is insured, and we can provide a certificate to your association.' },
      { q: 'Who remodels condos in Breckenridge and Vail?', a: 'Reed Home Solutions remodels condos and townhomes in Vail, Avon, Beaver Creek, Breckenridge, Frisco and Keystone.' },
    ],
    related: ['kitchen-remodeling', 'bathroom-remodeling', 'flooring-installation'],
  },
  {
    slug: 'home-additions-adus',
    name: 'Home Additions & ADUs',
    group: 'Renovation & Insurance Repair',
    icon: 'addition',
    card: 'Bedroom and bump-out additions, garage conversions and accessory dwelling units, permitted and built to code.',
    title: 'Home Additions & ADUs in the Vail Valley | Reed Home Solutions',
    description: 'Room additions, bump-outs, garage conversions and accessory dwelling units in Eagle and Summit counties. Zoning, permits and code handled. Free estimate.',
    h1: 'Home additions and ADUs in the Vail Valley and Summit County',
    answer: 'Reed Home Solutions builds room additions, bump-outs, garage conversions and accessory dwelling units (ADUs) in Eagle and Summit counties. We start with what your zoning, HOA and lot allow, then handle design coordination, permits, foundations, framing, mechanical trades and finishes. Jace recently added rooms to a home in Edwards on a fully permitted job.',
    sections: [
      {
        h2: 'Start with what your lot allows',
        html: '<p>Before anyone draws an addition, three things decide what is possible: zoning (setbacks, height, lot coverage and floor area), your HOA covenants and design review, and the site itself (slope, soils, snow storage and access). We check those first. It is cheaper to learn a lot is maxed out before you pay for plans.</p>',
      },
      {
        h2: 'ADUs and caretaker units',
        html: '<p>Accessory dwelling units help with family space, a caretaker, or long-term local housing, and several mountain towns encourage them. Rules differ a lot between the Town of Vail, Avon, Eagle, Gypsum, Eagle County, Breckenridge, Frisco, Silverthorne and Summit County: some limit size, require deed restrictions for local occupancy, or set parking minimums. We help you find the rules for your address and plan the unit to meet them, including separate egress, fire separation and utilities.</p><p>Converting existing space is often the faster path. See <a href="/basement-lock-off-remodeling">basement and lock-off remodeling</a>.</p>',
      },
      {
        h2: 'Building an addition at altitude',
        html: '<p>Additions here need footings below frost depth, framing and roofs sized for local snow loads, and a clean tie-in to the existing roof so you do not create a new ice dam valley. The short building season matters too. We aim to get the foundation in and the addition dried in before winter, then finish the interior through the cold months.</p>',
      },
    ],
    includes: ['Zoning, HOA and site feasibility check', 'Coordination with your architect or designer', 'Permits, engineering and inspections', 'Excavation and foundations', 'Framing, roofing and tie-in to the existing house', 'Windows, siding and exterior finishes', 'Plumbing, electrical and HVAC by licensed trades', 'Insulation, drywall, flooring and paint', 'Daily updates and a written schedule'],
    faqs: [
      { q: 'Can I add an ADU to my property in Eagle or Summit County?', a: 'It depends on your zoning, lot size and HOA. Many mountain towns allow accessory units, often with size limits, parking requirements or local-occupancy deed restrictions. We check the rules for your address before design starts.' },
      { q: 'How long does a home addition take?', a: 'Design and permitting often take longer than construction. Once permitted, a modest addition usually takes a few months of building. Weather and material lead times are the biggest variables, so we plan to be dried in before winter.' },
      { q: 'Do I need an architect for an addition?', a: 'Most additions need stamped plans and often engineering. If you do not have an architect, we can recommend one and coordinate with them from the start so the design fits your budget.' },
      { q: 'Is it cheaper to finish a basement than build an addition?', a: 'Usually yes, because the structure already exists. If you have unfinished or underused space, converting it is worth pricing first.' },
    ],
    related: ['basement-lock-off-remodeling', 'home-renovation-general-contracting', 'deck-building-repair'],
  },
  {
    slug: 'real-estate-inspection-repairs',
    name: 'Real Estate & Inspection Repairs',
    group: 'Renovation & Insurance Repair',
    icon: 'sign',
    card: 'Pre-listing updates and inspection repairs on tight closing timelines for buyers, sellers, agents and property managers.',
    title: 'Inspection Repairs & Pre-Listing Work | Reed Home Solutions',
    description: 'Inspection repairs and pre-listing updates in the Vail Valley and Summit County, scheduled around closing dates. Written estimates agents can share.',
    h1: 'Inspection repairs and pre-listing work for real estate deals',
    answer: 'Reed Home Solutions handles inspection repairs, pre-listing updates and move-in projects for buyers, sellers, real estate agents and property managers in Eagle and Summit counties. We work to the closing date: a fast site visit, a written itemized estimate you can attach to an inspection objection or resolution, and clear documentation of completed work for the file.',
    sections: [
      {
        h2: 'Built around the closing date',
        html: '<p>Real estate repairs have a hard deadline. When an inspection comes back, the buyer, seller and both agents need a credible number quickly, and then the work needs to be done and documented before closing. We prioritize the site visit, send a written, line-item estimate that can be shared with the other side, and give you a start date and a finish date in writing.</p>',
      },
      {
        h2: 'Common items we handle',
        html: '<ul><li>Deck and railing repairs flagged for safety.</li><li>Water damage, staining or soft subfloors found during inspection.</li><li>Missing GFCI outlets, smoke and CO alarms, and handrails (through licensed trades where required).</li><li>Siding, trim and flashing repairs.</li><li>Bathroom leaks and failed caulk or grout.</li><li>Pre-listing paint, flooring and fixture updates.</li><li>Unpermitted work that needs to be brought up to code.</li></ul>',
      },
      {
        h2: 'For agents and property managers',
        html: '<p>If you manage listings or rentals, you need a contractor who answers the phone and shows up when the lockbox is open. We coordinate access with you, send photos of completed work, and provide invoices and permit records for the transaction file. Rental turnovers between tenants or between guest stays work the same way.</p>',
      },
    ],
    includes: ['Fast site visit after inspection', 'Written, itemized estimate for the inspection response', 'Start and finish dates in writing', 'Repairs by our crew and licensed trades', 'Permits where required', 'Before-and-after photos and invoices for the file', 'Lockbox and access coordination with agents'],
    faqs: [
      { q: 'Can you finish inspection repairs before closing?', a: 'In most cases, yes, if the scope fits the timeline. We tell you up front whether the dates work. If they do not, we say so and suggest which items to complete now and which to credit at closing.' },
      { q: 'Can my agent share your estimate with the other side?', a: 'Yes. Our estimates are written and itemized so they can be attached to an inspection objection, resolution or credit negotiation.' },
      { q: 'Do you work with property managers on rental turnovers?', a: 'Yes. We schedule around tenant moves and guest bookings, coordinate access, and send photos and invoices when the work is done.' },
      { q: 'Can you fix unpermitted work found during an inspection?', a: 'Often yes. Jace is certified to pull permits. We assess what was done, what needs to change to meet code, and what it will take to get it permitted.' },
    ],
    related: ['deck-building-repair', 'water-damage-insurance-repair', 'home-renovation-general-contracting'],
  },
];

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s])) as Record<string, Service>;
export const featuredServices = ['kitchen-remodeling', 'bathroom-remodeling', 'basement-lock-off-remodeling', 'deck-building-repair', 'home-renovation-general-contracting', 'water-damage-insurance-repair'].map((s) => serviceBySlug[s]);
