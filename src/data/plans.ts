/**
 * Paket limitleri. Uygulamadaki varsayılanlarla aynıdır
 * (lib/services/subscription_service.dart → defaultLimits).
 * Uygulama asıl değerleri Firestore'daki `config/limits` belgesinden okur;
 * orada bir değer değiştirirsen burayı da güncelle.
 */
export const UNLIMITED = 999999;

export type PlanId = 'basic' | 'plus' | 'pro' | 'max';

export interface Plan {
  id: PlanId;
  name: string;
  tagline: string;
  badge?: string;
  limits: {
    words: number; // toplam kelime havuzu kapasitesi
    storyGen: number; // günlük yapay zeka hikayesi
    storyRead: number; // günlük havuzdan hikaye okuma
    chat: number; // günlük Octopus AI mesajı
    translate: number; // günlük çeviri
    test: number; // günlük test sorusu
  };
}

export const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    tagline: 'Keşfetmek için ücretsiz',
    limits: { words: 50, storyGen: 1, storyRead: 4, chat: 6, translate: 20, test: 40 },
  },
  {
    id: 'plus',
    name: 'Plus',
    tagline: 'Düzenli pratik için',
    limits: { words: 300, storyGen: 3, storyRead: 6, chat: 10, translate: 50, test: 80 },
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'Hızlı ilerlemek için',
    badge: 'Önerilen',
    limits: { words: 700, storyGen: 5, storyRead: 8, chat: 20, translate: 100, test: 150 },
  },
  {
    id: 'max',
    name: 'Max',
    tagline: 'Sınırları kaldır',
    badge: 'En kapsamlı',
    limits: { words: UNLIMITED, storyGen: 8, storyRead: 11, chat: 40, translate: UNLIMITED, test: UNLIMITED },
  },
];

export const limitRows: { key: keyof Plan['limits']; label: string; icon: string; daily: boolean }[] = [
  { key: 'words', label: 'Kelime havuzu kapasitesi', icon: 'style-rounded', daily: false },
  { key: 'chat', label: 'Octopus AI mesajı', icon: 'forum-rounded', daily: true },
  { key: 'storyGen', label: 'Yeni yapay zeka hikayesi', icon: 'auto-awesome-rounded', daily: true },
  { key: 'storyRead', label: 'Havuzdan hikaye okuma', icon: 'auto-stories-rounded', daily: true },
  { key: 'translate', label: 'Akıllı çeviri', icon: 'translate-rounded', daily: true },
  { key: 'test', label: 'Kelime testi sorusu', icon: 'quiz-rounded', daily: true },
];

export function formatLimit(value: number, daily: boolean): string {
  if (value >= UNLIMITED) return 'Sınırsız';
  return daily ? `Günde ${value}` : `${value} kelime`;
}
