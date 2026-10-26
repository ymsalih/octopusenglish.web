/**
 * Sitenin tek yerden yönetilen bilgileri. Bir link ya da adres değişirse
 * yalnızca burası güncellenir; tüm sayfalar buradan okur.
 */
export const site = {
  name: 'Octopus English',
  description:
    'Yapay zeka öğretmeni, etkileşimli hikayeler, kamerayla çeviri ve akıllı kelime kartlarıyla A1’den C2’ye İngilizce öğren.',
  email: 'octopusenglishh@gmail.com',

  /**
   * Mağaza linkleri. Boş bırakılan rozet "Yakında" olarak görünür;
   * link eklenince otomatik olarak tıklanabilir hale gelir.
   * Android paket adı: com.owlish.app — iOS paket adı: com.owlish.ios
   */
  stores: {
    appStore: '', // örn. 'https://apps.apple.com/tr/app/octopus-english/id0000000000'
    googlePlay: '', // yayına çıkınca: 'https://play.google.com/store/apps/details?id=com.owlish.app'
  },
} as const;
