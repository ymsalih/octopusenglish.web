/**
 * Site haritası (/sitemap.xml). Google Search Console'a bu adres verilir.
 * Yasal sayfaların "son güncelleme" tarihleri Markdown dosyalarından gelir.
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const legal = await getCollection('yasal');
  const pages: { path: string; lastmod?: Date }[] = [
    { path: '/' },
    { path: '/destek' },
    ...legal.map((p) => ({ path: `/${p.id}`, lastmod: p.data.updated })),
  ];
  const urls = pages
    .map((p) => {
      const loc = new URL(p.path, site).href;
      const lastmod = p.lastmod ? `<lastmod>${p.lastmod.toISOString().slice(0, 10)}</lastmod>` : '';
      return `  <url><loc>${loc}</loc>${lastmod}</url>`;
    })
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
