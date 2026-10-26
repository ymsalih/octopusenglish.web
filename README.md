<div align="center">

<img src="src/assets/logo.png" alt="Octopus English ahtapotu" width="132" />

# Octopus English · Web Sitesi

**İngilizceyi yaşayarak öğren.**<br />
Octopus English mobil uygulamasının tanıtım sitesi: derin denizde geçen, kaydırdıkça canlanan bir hikaye.

[![Canlı site](https://img.shields.io/badge/canl%C4%B1-octopusenglish.web.app-F2C45A?style=for-the-badge&labelColor=0B1540)](https://octopusenglish.web.app)

![Astro](https://img.shields.io/badge/Astro-7.4-7C5CF5?style=flat-square&logo=astro&logoColor=white&labelColor=0B1540)
![Firebase Hosting](https://img.shields.io/badge/Firebase-Hosting-F2C45A?style=flat-square&logo=firebase&logoColor=white&labelColor=0B1540)
![JS](https://img.shields.io/badge/JavaScript-~10%20KB-A996FF?style=flat-square&labelColor=0B1540)
![Çerez](https://img.shields.io/badge/%C3%A7erez-yok-4FD1A5?style=flat-square&labelColor=0B1540)

[Canlı site](https://octopusenglish.web.app) ·
[Destek](https://octopusenglish.web.app/destek) ·
[Gizlilik Politikası](https://octopusenglish.web.app/gizlilik-politikasi) ·
[Kullanım Koşulları](https://octopusenglish.web.app/kullanim-kosullari)

</div>

---

## İçindekiler

- [Öne çıkanlar](#-öne-çıkanlar)
- [Sayfalar](#-sayfalar)
- [Teknoloji](#-teknoloji)
- [Hızlı başlangıç](#-hızlı-başlangıç)
- [Proje yapısı](#-proje-yapısı)
- [Sık yapılan değişiklikler](#-sık-yapılan-değişiklikler)
- [Animasyon sistemi](#-animasyon-sistemi)
- [Yayına alma](#-yayına-alma)
- [Performans ve erişilebilirlik](#-performans-ve-erişilebilirlik)
- [Sorun giderme](#-sorun-giderme)
- [Marka ve lisans](#-marka-ve-lisans)

---

## ✨ Öne çıkanlar

| | |
|:--|:--|
| 🐙 **Sinematik açılış** | Uygulamanın açılış animasyonu web'e taşındı: ahtapot yüzerek gelir, kollarıyla "O" harfini oluşturur, gözleriyle imleci takip eder. |
| 📜 **Kelime kelime manifesto** | "Bir ahtapotun sekiz kolu, üç kalbi ve dokuz beyni vardır…" cümlesi kaydırdıkça aydınlanır. |
| 📱 **Canlı telefon ekranları** | Uygulamanın altı ekranı HTML/CSS ile birebir çizildi ve kendi kendine oynar: kelime ekleme, kart kaydırmalı test, yapay zeka sohbeti, etkileşimli hikaye, kamerayla çeviri, telaffuz puanı. |
| 🧲 **Yapışkan anlatım** | Masaüstünde telefon sabit kalır, sen kaydırdıkça ekranı değişir. Mobilde her özellik kendi telefonuyla gelir. |
| 🦑 **Çizilen ahtapot kolu** | "Nasıl çalışır" bölümündeki dalgalı yol, kaydırmayla adım adım çizilir. |
| 👑 **Premium paketleri** | Basic, Plus, Pro ve Max limitleri; Max kartının kenarında dönen altın ışık. |
| 🌊 **Derinleşen okyanus** | Arka planda süzülen deniz karı ve biyolüminesans ışıklar; aşağı indikçe su koyulaşır. |

---

## 🧭 Sayfalar

| Adres | Kaynak | İçerik |
|:--|:--|:--|
| [`/`](https://octopusenglish.web.app) | `src/pages/index.astro` | Ana sayfa (9 bölüm) |
| [`/destek`](https://octopusenglish.web.app/destek) | `src/pages/destek.astro` | Sık sorulan sorular ve iletişim |
| [`/gizlilik-politikasi`](https://octopusenglish.web.app/gizlilik-politikasi) | `src/content/yasal/gizlilik-politikasi.md` | Gizlilik Politikası |
| [`/kullanim-kosullari`](https://octopusenglish.web.app/kullanim-kosullari) | `src/content/yasal/kullanim-kosullari.md` | Kullanım Koşulları |
| *(bulunamayan her adres)* | `src/pages/404.astro` | "Bu derinlikte bir şey bulamadık." |

---

## 🧱 Teknoloji

| | Kullanılan | Neden |
|:--|:--|:--|
| Çatı | [Astro 7](https://astro.build) | Sayfalar derleme anında düz HTML'e dönüşür; tarayıcıya gereksiz JS gitmez. |
| Yazı tipleri | Fredoka + Plus Jakarta Sans (Fontsource) | Sitenin kendi sunucusundan yüklenir; Google'a istek atılmaz. |
| İkonlar | Material Symbols Rounded (Iconify) | Uygulamadaki ikonların aynısı; derleme anında SVG'ye çevrilir. |
| Animasyon | Saf CSS + ~160 satır TypeScript | Kütüphane yok; tek kaydırma dinleyicisi ve `IntersectionObserver`. |
| Görseller | `astro:assets` | 515 KB'lık logo, kullanıldığı boyuta göre 1–4 KB'lık WebP'ye iner. |
| Yayın | Firebase Hosting | Ücretsiz plan, otomatik HTTPS, sürüm geçmişi. |

---

## 🚀 Hızlı başlangıç

> **Gereksinim:** Node.js 22.23.4 veya üstü (Node 24 önerilir).

```bash
npm install        # ilk seferde bağımlılıkları kurar
npm run dev        # http://localhost:4321 — kaydettiğin her değişiklik anında görünür
```

| Komut | Ne yapar |
|:--|:--|
| `npm run dev` | Geliştirme sunucusunu başlatır (durdurmak için `Ctrl + C`) |
| `npm run dev -- --host` | Aynı Wi‑Fi'deki telefondan da açılabilir hale getirir |
| `npm run build` | Yayına hazır siteyi `dist/` klasörüne üretir |
| `npm run preview` | `dist/` çıktısını yerelde dener |

---

## 📁 Proje yapısı

```text
OctopusWebSitesi/
├─ src/
│  ├─ pages/                  ← her dosya bir adres
│  │  ├─ index.astro            ana sayfa
│  │  ├─ destek.astro           SSS + iletişim
│  │  ├─ [yasal].astro          Markdown'dan yasal sayfalar üretir
│  │  └─ 404.astro
│  ├─ layouts/
│  │  └─ BaseLayout.astro       <head>, yazı tipleri, menü, alt bilgi, kaydırma motoru
│  ├─ components/
│  │  ├─ home/                  ana sayfa bölümleri
│  │  │  ├─ Hero · Manifesto · FeatureStory · Stats · HowItWorks
│  │  │  └─ MoreFeatures · Plans · Trust · FinalCta
│  │  ├─ phone/                 telefon çerçevesi, durum çubuğu, alt menü
│  │  │  └─ screens/            Words · Test · Chat · Story · Translate · Speak
│  │  ├─ Header · Footer · Ocean · StoreBadges · PageHeader · Icon
│  ├─ content/yasal/          ← yasal metinler (düz Markdown)
│  ├─ data/
│  │  ├─ site.ts                site adı, e-posta, mağaza linkleri
│  │  └─ plans.ts               paket limitleri
│  ├─ scripts/
│  │  ├─ motion.ts              kaydırma animasyonları
│  │  └─ octopus-scene.js       açılış ahtapotu (uygulamadaki splash'in web uyarlaması)
│  ├─ styles/global.css        renkler, yazı tipleri, ortak sınıflar
│  ├─ assets/                  logo, uygulama ikonu, mağaza rozetleri
│  └─ content.config.ts        yasal metinlerin şeması
├─ redirect/                  eski adres için yedek yönlendirme sayfası
├─ firebase.json              yayın ayarı (yalnızca hosting)
├─ .firebaserc                hangi Firebase projesi
└─ astro.config.mjs           sitenin adresi ve derleme ayarları
```

---

## 📝 Sık yapılan değişiklikler

| Ne değiştireceksin | Dosya |
|:--|:--|
| 🛒 App Store / Google Play linkleri | `src/data/site.ts` → `stores` |
| ✉️ Destek e-postası | `src/data/site.ts` → `email` |
| 👑 Paket limitleri | `src/data/plans.ts` |
| ⚖️ Gizlilik Politikası / Kullanım Koşulları | `src/content/yasal/*.md` |
| ❓ Destek sayfasındaki sorular | `src/pages/destek.astro` → `groups` |
| 🌐 Sitenin adresi (kendi alan adın olursa) | `astro.config.mjs` → `site` |
| 🎨 Renkler | `src/styles/global.css` → `:root` |

### Mağaza linklerini eklemek

Link boş olduğu sürece rozet **"Yakında"** etiketiyle, tıklanamaz halde görünür. Linki yazıp kaydettiğin an tıklanabilir olur:

```ts
// src/data/site.ts
stores: {
  appStore: 'https://apps.apple.com/tr/app/octopus-english/id0000000000',
  googlePlay: 'https://play.google.com/store/apps/details?id=com.owlish.app',
},
```

> App Store linkindeki sayısal kimlik, App Store Connect → **App Information → Apple ID** alanındadır.

### Yasal metni güncellemek

Markdown dosyasını düzenle ve en üstteki tarihi değiştir. Sayfadaki "Son güncelleme" yazısı ve içindekiler listesi kendiliğinden güncellenir:

```md
---
title: Gizlilik Politikası
description: …
updated: 2026-10-26   ← bunu değiştir
---
```

> `title`, `description` veya `updated` eksik ya da hatalıysa derleme hata verir; yanlışlıkla eksik bir yasal sayfa yayınlanmaz.

---

## 🎬 Animasyon sistemi

Animasyonlar HTML'deki birkaç işaretle çalışır; motor `src/scripts/motion.ts` dosyasında.

| İşaret | Ne olur |
|:--|:--|
| `data-reveal` | Öğe ekrana girince bulanıklıktan netleşerek belirir. `style="--d:0.2s"` ile gecikme verilir. |
| `data-reveal="scale"` / `"left"` / `"right"` / `"fade"` | Belirme yönünü değiştirir. |
| `data-progress="exit"` | Bölüm ekranın üstünden çıkarken `--p` değişkeni 0 → 1 olur (açılış sahnesi). |
| `data-progress="sticky"` | Yapışkan bölüm boyunca `--p` 0 → 1 olur (manifesto). |
| `data-progress="through"` | Bölüm ekrana girip çıkana kadar `--p` 0 → 1 olur (ahtapot kolu). |
| `data-steps` / `data-step` / `data-screen` | Ekranın ortasındaki adım aktif olur; telefonda eşleşen ekran oynar. |
| `data-count="6"` | Görünür olunca 0'dan sayarak yazar. |
| `.spot` | Kartın üzerinde imleci takip eden ışık. |

CSS bu değerlerle hareket eder. Örnek:

```css
.hero__text {
  opacity: calc(1 - var(--p) * 1.7);
  transform: translateY(calc(var(--p) * -90px));
}
```

---

## 🌍 Yayına alma

Site, uygulamadan **tamamen ayrı** bir Firebase projesinde yayınlanır. Uygulamanın projesine (`ingilizce-destek-app`) hiçbir şekilde dokunmaz.

| Adres | Firebase sitesi | Ne sunar |
|:--|:--|:--|
| **https://octopusenglish.web.app** | `octopusenglish` | Asıl site (`dist/`) |
| https://octopus-web-bdef8.web.app | `octopus-web-bdef8` (varsayılan) | Her sayfayı yeni adrese kalıcı (301) yönlendirir |

### Güncelleme yayınlamak

```bash
npm run build
firebase deploy --only hosting
```

Çıktıda şunları gör:

```text
=== Deploying to 'octopus-web-bdef8'...      ← doğru proje
✔  Deploy complete!
Hosting URL: https://octopusenglish.web.app
```

### Sıfırdan kurulum (bir kez yapıldı, kayıt için)

<details>
<summary><b>Adımları göster</b></summary>

1. **CLI'yı kur ve giriş yap**
   ```bash
   npm install -g firebase-tools
   firebase login
   ```
2. **Firebase Console'da** yeni proje aç → *Build → Hosting → Başlayın*.
3. **İstediğin adla site ekle:** Hosting sayfasının altında *Başka site ekle* → `octopusenglish`, ya da:
   ```bash
   firebase hosting:sites:create octopusenglish --project octopus-web-bdef8
   ```
4. **Ayar dosyaları:** `.firebaserc` projeyi, `firebase.json` hangi klasörün hangi siteye gideceğini ve eski adresin yönlendirmesini tanımlar.
5. **Derle ve yükle:** `npm run build` → `firebase deploy --only hosting`.

</details>

### Güvenlik kuralları

> [!IMPORTANT]
> - Komutları her zaman **bu klasörde** çalıştır. `firebase deploy`, bulunduğu klasördeki `firebase.json` dosyasını okur.
> - Aktif projeyi görmek için `firebase use` yaz; `octopus-web-bdef8` görmelisin.
> - Sürüme her zaman `--only hosting` ekle.

> [!TIP]
> Bir yayın bir şeyi bozduysa Firebase Console → Hosting → **octopusenglish** → *Sürüm geçmişi* → önceki sürümde **Geri al**. Site birkaç saniye içinde eski haline döner.

---

## ⚡ Performans ve erişilebilirlik

- **Hafif:** Tüm site yaklaşık 750 KB. JavaScript yalnızca ~10 KB'lık açılış sahnesi ve sayfaya gömülü birkaç küçük script.
- **Ekran dışında durur:** Açılış sahnesi ve telefon animasyonları ekranda görünmüyorsa çizim yapmaz; pil ve işlemci boşuna harcanmaz.
- **Hareket azaltma desteği:** "Hareketi azalt" tercihi açık olan kullanıcılarda animasyonlar kapanır, ahtapot hazır haliyle görünür, bütün içerik okunur kalır.
- **JS olmadan da çalışır:** JavaScript kapalıysa içerik gizlenmez; sadece animasyonlar oynamaz.
- **Klavye ve ekran okuyucu:** "İçeriğe geç" bağlantısı, odak halkaları, telefon maketlerinde açıklayıcı etiketler.
- **Gizlilik:** Çerez, analiz aracı veya üçüncü taraf istek yok.

---

## 🔧 Sorun giderme

<details>
<summary><b><code>npm run dev</code> Node sürümü hatası veriyor</b></summary>

`node -v` ile sürümü kontrol et; 22.23.4 veya üstü olmalı. Gerekirse [nodejs.org](https://nodejs.org) adresinden güncel LTS sürümünü kur.
</details>

<details>
<summary><b>4321 portu dolu</b></summary>

Açık kalmış başka bir terminalde sunucu çalışıyor olabilir; onu `Ctrl + C` ile kapat ya da `npm run dev -- --port 4322` kullan.
</details>

<details>
<summary><b>Mağaza rozetleri tıklanmıyor</b></summary>

`src/data/site.ts` içindeki `stores` linkleri boştur. Linkleri ekleyip yeniden derle ve yayınla.
</details>

<details>
<summary><b>Yayından sonra eski sürümü görüyorum</b></summary>

Tarayıcı önbelleği olabilir: Firebase, HTML sayfalarını tarayıcıda en fazla **1 saat** önbellekte tutar. Sayfayı `Ctrl + F5` ile yenilersen yeni sürüm hemen gelir. Script ve görsellerin adı her derlemede değiştiği için onlarda eski sürüm kalmaz.
</details>

<details>
<summary><b>Yanlış projeye yüklemekten korkuyorum</b></summary>

`firebase use` komutu aktif projeyi gösterir. Garanti için komuta projeyi ekleyebilirsin:
`firebase deploy --only hosting --project octopus-web-bdef8`
</details>

---

## 🧾 Marka ve lisans

- Octopus English adı, logosu ve ahtapot karakteri uygulamanın sahibine aittir. Logo ve ikon, `ingilizce_destek_app` projesinden kopyalanmıştır; orijinallerine dokunulmamıştır.
- Açılış animasyonu, uygulamanın `octopus_english_brand/reference/octopus_scene.js` dosyasından uyarlanmıştır.
- App Store ve Google Play rozetleri resmi rozetlerdir. Apple ve App Store, Apple Inc.'in; Google Play ve Google Play logosu, Google LLC'nin ticari markalarıdır.

<div align="center">
<br />
<sub>Derinlere dalmaya hazır mısın? 🐙</sub>
</div>
