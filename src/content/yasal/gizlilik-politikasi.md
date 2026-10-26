---
title: Gizlilik Politikası
description: Octopus English uygulamasının hangi verileri, hangi amaçla ve nasıl işlediği.
updated: 2026-10-26
---

Bu Gizlilik Politikası, Octopus English mobil uygulamasını ("Uygulama") ve bu web sitesini kullanırken kişisel verilerinin nasıl işlendiğini açıklar. Sorularını her zaman [octopusenglishh@gmail.com](mailto:octopusenglishh@gmail.com) adresine yazabilirsin.

## Kısaca

- Yapay zeka ve çeviri özellikleri için yazdıkların, yalnızca **açık iznin** varsa üçüncü taraf servislere gönderilir. İznini Ayarlar'dan istediğin an geri alabilirsin.
- Kamerayla taradığın görüntüler **telefonunda** işlenir, hiçbir yere gönderilmez.
- Octopus AI ile yaptığın sohbetler veritabanımızda **saklanmaz**.
- Hesabını ve tüm öğrenme verilerini uygulamanın içinden **kalıcı olarak silebilirsin**.
- Uygulamada reklam yoktur; verilerini satmayız ve reklam amacıyla kullanmayız.

## 1. Veri sorumlusu

Kişisel verilerin, Octopus English uygulamasının geliştiricisi tarafından veri sorumlusu sıfatıyla işlenir. İletişim adresi: [octopusenglishh@gmail.com](mailto:octopusenglishh@gmail.com).

## 2. Topladığımız veriler

### Hesap bilgileri

E-posta ile kayıt olursan e-posta adresin, kullanıcı adın ve şifren işlenir. Şifren Firebase Authentication tarafından güvenli biçimde saklanır; biz göremeyiz. Google veya Apple ile giriş yaparsan bu hizmetlerin bizimle paylaştığı ad ve e-posta adresi kullanılır. Hesap doğrulama ve şifre sıfırlama e-postaları bu adrese gönderilir.

### Öğrenme verileri

Kelime havuzuna eklediğin kelimeler ve karşılıkları, öğrendiğin kelimeler, test sonuçların ve test geçmişin, doğru ve yanlış cevap istatistiklerin, günlük serin, seçtiğin İngilizce seviyesi ve günlük kullanım sayaçların (sohbet, çeviri, hikaye ve test hakları gibi).

### Abonelik bilgileri

Hangi pakete sahip olduğun ve aboneliğinin durumu. Ödemeler Apple (App Store) veya Google (Google Play) tarafından alınır; kart bilgilerin bize ulaşmaz. Abonelik durumunu doğrulamak için RevenueCat hizmetini kullanırız.

### İçerik bildirimleri

Yapay zekanın ürettiği bir cevabı ya da hikayeyi "Bildir" ile raporlarsan; bildirilen içerik, seçtiğin neden, varsa yazdığın açıklama ve kullanıcı kimliğin incelenmek üzere kaydedilir.

### Yalnızca cihazında kalan tercihler

Tema seçimin, tıklama sesi ve titreşim ayarların, seslendirme hızı ve tonu ile veri paylaşım iznin yalnızca telefonunda saklanır.

### Çökme raporları

Uygulamadaki hataları bulup düzeltebilmek için uygulama çöktüğünde cihaz modeli, işletim sistemi sürümü ve hata kaydı gibi teknik bilgiler Firebase Crashlytics aracılığıyla toplanabilir.

## 3. İzin gerektiren özellikler ve üçüncü taraf servisler

Uygulamayı ilk açtığında hangi verilerin nereye gittiği sana gösterilir ve iznin istenir. İzin vermezsen aşağıdaki özellikler çalışmaz, uygulamanın geri kalanını kullanmaya devam edersin. İznini **Ayarlar → Gizlilik → Yapay zeka ve çeviri veri paylaşımı** bölümünden istediğin zaman geri alabilirsin.

- **Octopus AI sohbet:** Yazdığın mesajlar, sohbetin son mesajları, seçtiğin sohbet modu ve seviyen, cevap üretilmesi için sunucumuz üzerinden Google Gemini'ye gönderilir.
- **Hikaye üretme:** Seçtiğin hikaye türü ve seviye, sunucumuz üzerinden Google Gemini'ye gönderilir.
- **Çeviri ve sözlük:** Çevirmek ya da anlamına bakmak istediğin metin veya kelime; DeepL, Google Translate ve dictionaryapi.dev servislerine gönderilir.
- **Kelime görseli:** Görseli aranan kelime Pexels'e iletilir.

Sohbet mesajların veritabanımızda saklanmaz; sunucumuz yalnızca günlük kullanım sayını tutar. Bu servislerin verileri nasıl işlediği kendi gizlilik politikalarına tabidir.

Yapay zekanın ürettiği hikayeler, diğer kullanıcıların da okuyabilmesi için ortak bir hikaye havuzunda saklanır; bu hikayeler seni tanımlayan bir bilgi içermez. Tek kelimelik çeviri sonuçları da kimliğinle ilişkilendirilmeden ortak bir sözlük önbelleğinde tutulabilir.

### Telefonunda işlenen veriler

- **Kamera ve galeri:** Taradığın ya da galeriden seçtiğin görüntülerdeki metin, Google ML Kit ile telefonunda okunur. Görüntü hiçbir sunucuya gönderilmez.
- **Mikrofon:** Telaffuz pratiği ve sesle yazma sırasında konuşman, telefonunun kendi konuşma tanıma servisi (Apple veya Google) tarafından metne çevrilir. Uygulama ses kaydı saklamaz.
- **Seslendirme:** Kelimeleri ve metinleri okuyan ses, telefonunun metin okuma motoruyla üretilir.

### Videolar ve haber bağlantıları

"Video ile Öğren" bölümündeki videolar YouTube oynatıcısıyla gösterilir; video izlerken [YouTube Hizmet Şartları](https://www.youtube.com/t/terms) ve [Google Gizlilik Politikası](https://policies.google.com/privacy) geçerlidir. "Haberler" bölümündeki bağlantılar ilgili haber sitesinde açılır; bu sitelerin gizlilik uygulamalarından sorumlu değiliz.

## 4. Verilerini hangi amaçlarla kullanıyoruz

- Hesabını oluşturmak ve oturumunu açık tutmak
- Kelime havuzunu, testlerini ve ilerlemeni saklamak ve cihazlar arasında eşitlemek
- Paket limitlerini ve aboneliğini yönetmek
- İznin varsa yapay zeka ve çeviri özelliklerini sunmak
- Uygunsuz içerik bildirimlerini incelemek ve kötüye kullanımı önlemek
- Hataları tespit edip uygulamayı geliştirmek
- Destek taleplerine cevap vermek

## 5. Verilerin saklandığı yer ve güvenlik

Veriler Google Firebase altyapısında (Firebase Authentication, Cloud Firestore ve Cloud Functions) saklanır ve işlenir. Bu servisler verileri yurt dışındaki sunucularda işleyebilir; bu nedenle verilerin yurt dışına aktarılabilir. Uygulama ile sunucular arasındaki bağlantı şifrelidir. Veritabanı güvenlik kuralları sayesinde hesabına ait verilere yalnızca sen erişebilirsin.

## 6. Saklama süresi

Verilerin hesabın açık olduğu sürece saklanır. Hesabını sildiğinde hesap bilgilerin, kelime havuzun, test geçmişin, istatistiklerin ve abonelik eşleştirme kaydın kalıcı olarak silinir. İçerik bildirimleri, inceleme ve kötüye kullanımı önleme amacıyla saklanabilir. Ortak hikaye havuzu ve sözlük önbelleği seni tanımlayan bilgi içermediği için hesabın silindikten sonra da kalabilir. Satın alma kayıtların Apple ve Google tarafından kendi politikalarına göre tutulur.

## 7. Hakların

6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve uygulanabildiği ölçüde Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR) kapsamında; verilerinin işlenip işlenmediğini öğrenme, verilerine erişme, düzeltilmesini veya silinmesini isteme, işlemeye itiraz etme ve verdiğin izni geri alma hakların vardır.

Hesabını ve verilerini **Ayarlar → Hesap ve Yasal Bilgiler → Hesabımı Sil** adımıyla uygulamanın içinden silebilirsin. Diğer talepler için [octopusenglishh@gmail.com](mailto:octopusenglishh@gmail.com) adresine yazabilirsin.

## 8. Bu web sitesi

Bu web sitesi çerez kullanmaz, ziyaretçi takibi veya analiz aracı içermez. Yazı tipleri dahil bütün dosyalar sitenin kendi sunucusundan yüklenir. Barındırma sağlayıcısı, siteyi sunabilmek için IP adresi gibi teknik kayıtları kısa süreliğine tutabilir.

## 9. Değişiklikler

Bu politikayı zaman zaman güncelleyebiliriz. Önemli değişiklikleri uygulama veya bu sayfa üzerinden duyururuz. Sayfanın başındaki tarih, son güncellemenin tarihidir.

## 10. İletişim

Gizlilikle ilgili her türlü soru ve talebin için: [octopusenglishh@gmail.com](mailto:octopusenglishh@gmail.com)
