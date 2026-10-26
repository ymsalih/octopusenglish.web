import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Yasal sayfalar: src/content/yasal/*.md
 * Dosya adı sayfanın adresi olur (gizlilik-politikasi.md → /gizlilik-politikasi).
 * Başlıktaki alanlar eksik ya da hatalıysa derleme hata verir.
 */
const yasal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/yasal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updated: z.coerce.date(),
  }),
});

export const collections = { yasal };
