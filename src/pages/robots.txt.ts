import type { APIRoute } from 'astro';
import { site } from '../data/site';
// Production: open to search + AI answer engines (that is the AI-GEO strategy).
// Anything else: blocked, so previews never compete with the real domain.
export const GET: APIRoute = () => {
  const prod = import.meta.env.PUBLIC_SITE_INDEXABLE === 'true';
  const bots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended', 'Bingbot'];
  const body = prod
    ? `# ${site.name}\nUser-agent: *\nAllow: /\n\n# AI answer engines and assistants are explicitly welcome.\n${bots.map((b) => `User-agent: ${b}\nAllow: /`).join('\n')}\n\nSitemap: ${site.url}/sitemap.xml\n`
    : `User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
