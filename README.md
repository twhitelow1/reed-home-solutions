# Reed Home Solutions website

Local SEO + AI-search (GEO) site for **Reed Home Solutions**, a remodeling and general contracting company in Gypsum, CO (owner: Jace Reed). Built by DubLow Digital on the same Astro architecture as `twhitelow1/vail-valley-it`.

- **Stack:** Astro 7 static site, Node ≥ 22, deployed on Vercel
- **Pages:** 29 total: home, 10 services, 10 town pages, 2 hubs, about, contact, free-estimate planner, insurance claim guide, privacy, site map, 404
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
- [ ] **Photos:** Jace portrait, Edwards renovation, Vail condo roof, deck jobs. Add to About and service pages.
- [ ] **Reviews:** add verbatim Google reviews to `reviews` in `site.ts` once they exist.
- [ ] Privacy policy legal review.

## Build log
- **2026-10-08:** No existing Reed codebase was found (GitHub, Vercel, Drive, Notion, artifacts all checked), so the site was built fresh from the Sep 25 onboarding call (services, service areas, brand colors, restoration/insurance differentiator). SEO audit: 0 issues. Checked at 1280px and 390px.
