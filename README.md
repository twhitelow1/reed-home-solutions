# Reed Home Solutions website

Local SEO + AI-search (GEO) site for **Reed Home Solutions**, a remodeling and general contracting company in Gypsum, CO (owner: Jace Reed). Built by DubLow Digital on the same Astro architecture as `twhitelow1/vail-valley-it`.

- **Stack:** Astro 7 static site, Node ≥ 22, deployed on Vercel
- **Pages:** 38 total: home, 13 services, 14 town pages, 2 hubs, about, contact, free-estimate planner, 2 guides (insurance claims, remodel pricing), privacy, site map, 404
- **Brand:** voice, USP and SEO targeting in `docs/BRAND.md`
- **Extras:** `llms.txt`, `robots.txt` (gated), plain `sitemap.xml`, JSON-LD on every page (GeneralContractor, Service, FAQPage, BreadcrumbList, HowTo)

## Commands
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static build to dist/
python3 tools/preview_bundle.py dist preview.html   # single-file clickable preview
```

## Where content lives
| File | Drives |
|---|---|
| `src/data/site.ts` | NAP, phone, email, domain, GHL links, tracking IDs, credentials. **Single source of truth.** |
| `src/data/services.ts` + `serviceExtras.ts` | The 10 service pages (`/<slug>`) |
| `src/data/locations.ts` | The 10 town pages (`/remodeling-contractor-<town>-co`) |
| `src/pages/[slug].astro` | Template for service and town pages |
| `src/pages/free-estimate.astro` | Project planner lead magnet (text/email + optional GHL webhook) |

## Preview gating
Pages ship `noindex` and `robots.txt` disallows everything unless `PUBLIC_SITE_INDEXABLE=true`. Set that **only** on the production deployment once the real domain is live. Canonicals always use `site.url`.

## Launch TODOs (from `src/data/site.ts`)
- [ ] **Domain:** buy/confirm the primary domain and update `site.url` (currently the planned `vailhomeremodeling.com`). Point `reedhomesolutionsco.com` at it.
- [ ] **Phone:** swap `(970) 471-6627` (Jace's number from ClientsOS) for the Lead Alchemist 970 VoIP number.
- [ ] **Email:** switch from `reedhomesolutions@gmail.com` to the branded address.
- [ ] **Home base:** confirm Gypsum, CO 81637 for the service-area NAP.
- [ ] **Legal name** (LLC?), **business hours**, **license/registration numbers**.
- [ ] **Google Business Profile:** add place ID, review link and maps URL; add `sameAs` social links.
- [ ] **GoHighLevel:** calendar URL, estimate form embed, planner webhook.
- [ ] **GA4 / Clarity** IDs.
- [ ] **Logo:** replace the placeholder circle mark (`src/components/Mark.astro`, `public/favicon.svg`, `logo.png`) with the approved design.
- [x] **Edwards renovation photos:** 33 photos in `public/images/projects/edwards/`, wired up via `src/data/projects.ts` (project page, home, About, service and Edwards pages).
- [ ] **Photo permission:** the Edwards photos look like listing photos (Century 21, agent Jamie Salyer). Get written OK to use them and add a credit if required.
- [ ] **Edwards scope:** ask Jace which rooms were added and what was replaced, then add a scope list to the project page.
- [ ] **More photos:** Jace portrait, Vail condo roof, deck jobs. Add each job as a new entry in `src/data/projects.ts`.
- [ ] **Reviews:** add verbatim Google reviews to `reviews` in `site.ts` once they exist.
- [ ] Privacy policy legal review.

## Build log
- **2026-10-08:** No existing Reed codebase was found (GitHub, Vercel, Drive, Notion, artifacts all checked), so the site was built fresh from the Sep 25 onboarding call (services, service areas, brand colors, restoration/insurance differentiator). SEO audit: 0 issues. Checked at 1280px and 390px.
- **2026-10-08:** Imported to Vercel (project `reed-home-solutions`, team twhitelow1). Live preview: https://reed-home-solutions.vercel.app (noindex, robots.txt disallow, canonicals to the future domain). Every push to `claude/eager-fermi-2vik0q` redeploys.
- **2026-10-08:** Brand voice/USP/SEO brief applied (`docs/BRAND.md`). Summit County pages added: new Frisco/Copper, Silverthorne, Dillon, Keystone pages; Basalt added to Aspen. New pages from competitor gap research: Condo & HOA Remodeling, Home Additions & ADUs, Real Estate & Inspection Repairs, Remodel Cost Guide. IndexNow key + manual workflow. Deep SEO/AEO audit: 0 issues; production build simulation verified (index, robots open to AI bots, sitemap listed).
- **Next content (from competitor research):** service + town pages for the strongest pairs (kitchen/bath × Vail, Breckenridge, Edwards), each with genuinely local copy; live Google reviews once the GBP has them.
- **2026-10-08:** Service areas corrected per Todd: Eagle County is the only primary area; Summit, Glenwood, Carbondale, Aspen and Steamboat are secondary.
