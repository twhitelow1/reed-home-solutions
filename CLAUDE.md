# Reed Home Solutions website

Remodeling contractor site for **Reed Home Solutions** (owner Jace Reed, Gypsum, CO), a DubLow Digital client.
Astro 7 static site (Node ≥ 22) on Vercel, built for local SEO and AI answer engines (GEO). Same architecture as `twhitelow1/vail-valley-it`.

## Commands
- `npm run dev` — dev server on http://localhost:4321
- `npm run build` — static build to `dist/`. Run before every push; it is the only check.

## Architecture
Content lives in `src/data/`, not in templates:
- `site.ts` — NAP, domain, phone, GHL links, tracking, credentials. Change the domain here only.
- `services.ts` + `serviceExtras.ts` → service pages via `src/pages/[slug].astro`
- `locations.ts` → town pages (`/remodeling-contractor-<town>-co`) via the same route
- `src/lib/schema.ts` — JSON-LD (GeneralContractor entity); `src/layouts/Base.astro` — head, meta, tracking
- `llms.txt.ts`, `robots.txt.ts` — generated endpoints; `sitemap.xml` written by the hook in `astro.config.mjs`

## Rules
- Never invent reviews, prices, warranties, licenses, project photos or stats. Unknowns are `TODO` in `site.ts`.
- Roofing, windows and most flooring are installed by trade partners Reed manages. Say so honestly.
- Reed is a contractor, not a public adjuster, and never waives deductibles.
- Indexing gated by `PUBLIC_SITE_INDEXABLE=true` (production only). URLs: no trailing slash; add `vercel.json` redirects when renaming slugs.

## Workflow
Develop on a `claude/*` branch, run `npm run build`, push, open a draft PR.
