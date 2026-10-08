import { defineConfig } from 'astro/config';
import { writeFile } from 'node:fs/promises';
import { site } from './src/data/site.ts';

const SITE = site.url;

// Plain sitemap.xml built from the pages that actually exist after the build: just <loc> and a
// date-only <lastmod> (site.lastReviewed). No index, stylesheet or extra tags, so Google accepts it.
const plainSitemap = {
  name: 'plain-sitemap',
  hooks: {
    'astro:build:done': async ({ dir, pages }) => {
      const urls = pages
        .map((p) => p.pathname.replace(/\/$/, ''))
        .filter((p) => !p.includes('.') && !/(^|\/)(404|thank-you)$/.test(p))
        .map((p) => (p ? `${SITE}/${p}` : `${SITE}/`))
        .sort((a, b) => (a === `${SITE}/` ? -1 : b === `${SITE}/` ? 1 : a.localeCompare(b)));
      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...new Set(urls)]
        .map((u) => `  <url>\n    <loc>${u}</loc>\n    <lastmod>${site.lastReviewed}</lastmod>\n  </url>`)
        .join('\n')}\n</urlset>\n`;
      await writeFile(new URL('sitemap.xml', dir), xml);
    },
  },
};

// Canonical production origin. All canonicals, OG URLs and schema @ids use this,
// even on preview deployments, so search engines only ever credit the real domain.
export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'auto' },
  integrations: [plainSitemap],
});
