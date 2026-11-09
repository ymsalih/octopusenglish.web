/**
 * Sitenin tek yerden yönetilen bilgileri. Bir link ya da adres değişirse
 * yalnızca burası güncellenir; tüm sayfalar buradan okur.
 */
export const site = {
  name: 'Octopus English',

  /** Ana sayfanın Google'da görünen başlığı (~60 karakteri geçmesin). */
  seoTitle: 'Octopus English · İngilizce Kelime, Okuma ve Telaffuz Pratiği',

  /** Arama sonuçlarında başlığın altında görünen metin (~155 karakter). */
  description:
    'Kelimelerini kartlarla tekrar et, dinlediğini yaz, sesli okuyup telaffuzunu puanla; hikayelerle okuma ve sohbetle konuşma pratiği yap. A1’den C2’ye ücretsiz.',

  email: 'octopusenglishh@gmail.com',

  /**
   * Google Search Console doğrulama kodu ("HTML etiketi" yöntemi).
   * Search Console'un verdiği etiketteki content="…" değerini buraya yaz.
   */
  googleSiteVerification: 'W4L7QMQDSklldGQhPHGjose26tMCMzTpr3DJMo1hAOM',

  /**
   * Mağaza linkleri. Boş bırakılan rozet "Yakında" olarak görünür;
   * link varsa rozet tıklanabilir olur ve mağazayı yeni sekmede açar.
   */
  stores: {
    appStore: 'https://apps.apple.com/tr/app/octopus-i-ngilizce-%C3%B6%C4%9Fren/id6806376062?l=tr',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.owlish.app',
  },
} as const;
