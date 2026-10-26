// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Sitenin yayındaki adresi. Kanonik adresler ve sosyal medya önizleme
  // görseli bu adresle üretilir. Kendi alan adını bağlarsan burayı güncelle.
  site: 'https://octopusenglish.web.app',

  // Astro 7'nin varsayılanı 'jsx': satır sonu içeren boşlukları JSX gibi siler
  // ve metin içindeki kelimeler yapışabilir. 'true' boşlukları tek boşluğa indirir.
  compressHTML: true,

  // Sayfalar "destek.html" olarak üretilir; Firebase Hosting'in cleanUrls ayarı
  // bunları "/destek" adresinden yönlendirme olmadan sunar (firebase.json).
  build: { format: 'file' },
  trailingSlash: 'never',
});
