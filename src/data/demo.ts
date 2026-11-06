/**
 * "Kendin dene" simülasyonunun ve Keşfet bölümünün örnek içeriği.
 * Kelimeler uygulamanın seviye paketlerinden (assets/word_packages/*.json)
 * seçildi; videolar temsilidir, gerçek bir YouTube videosunu göstermez.
 */
export type DemoWord = { eng: string; tr: string };
export type VideoTone = 'sunset' | 'ocean' | 'dawn';

export const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
export type Level = (typeof levels)[number];

export const packs: Record<Level, DemoWord[]> = {
  A1: [
    { eng: 'friend', tr: 'arkadaş' },
    { eng: 'morning', tr: 'sabah' },
    { eng: 'teacher', tr: 'öğretmen' },
    { eng: 'tomorrow', tr: 'yarın' },
    { eng: 'bread', tr: 'ekmek' },
    { eng: 'please', tr: 'lütfen' },
    { eng: 'evening', tr: 'akşam' },
    { eng: 'water', tr: 'su' },
  ],
  A2: [
    { eng: 'holiday', tr: 'tatil' },
    { eng: 'airport', tr: 'havaalanı' },
    { eng: 'expensive', tr: 'pahalı' },
    { eng: 'weather', tr: 'hava durumu' },
    { eng: 'ticket', tr: 'bilet' },
    { eng: 'busy', tr: 'meşgul' },
    { eng: 'sometimes', tr: 'bazen' },
    { eng: 'cloud', tr: 'bulut' },
  ],
  B1: [
    { eng: 'achieve', tr: 'başarmak' },
    { eng: 'advantage', tr: 'avantaj' },
    { eng: 'advice', tr: 'tavsiye' },
    { eng: 'allow', tr: 'izin vermek' },
    { eng: 'appear', tr: 'görünmek' },
    { eng: 'avoid', tr: 'kaçınmak' },
    { eng: 'opportunity', tr: 'fırsat' },
    { eng: 'experience', tr: 'deneyim' },
  ],
  B2: [
    { eng: 'attitude', tr: 'tutum' },
    { eng: 'crucial', tr: 'çok önemli, kritik' },
    { eng: 'efficient', tr: 'verimli' },
    { eng: 'flexible', tr: 'esnek' },
    { eng: 'genuine', tr: 'gerçek, samimi' },
    { eng: 'hesitate', tr: 'tereddüt etmek' },
    { eng: 'evidence', tr: 'kanıt' },
    { eng: 'impact', tr: 'etki' },
  ],
  C1: [
    { eng: 'breakthrough', tr: 'büyük ilerleme' },
    { eng: 'coherent', tr: 'tutarlı' },
    { eng: 'compelling', tr: 'ikna edici' },
    { eng: 'diverse', tr: 'çeşitli' },
    { eng: 'embrace', tr: 'benimsemek' },
    { eng: 'feasible', tr: 'uygulanabilir' },
    { eng: 'eloquent', tr: 'etkili konuşan' },
    { eng: 'evolve', tr: 'gelişmek, evrilmek' },
  ],
  C2: [
    { eng: 'ephemeral', tr: 'geçici' },
    { eng: 'audacious', tr: 'cüretkâr' },
    { eng: 'equanimity', tr: 'soğukkanlılık' },
    { eng: 'erudite', tr: 'bilgili' },
    { eng: 'fastidious', tr: 'titiz' },
    { eng: 'conundrum', tr: 'bilmece, çıkmaz' },
    { eng: 'ebullient', tr: 'coşkulu' },
    { eng: 'fortuitous', tr: 'rastlantısal' },
  ],
};

/** Simülasyonda kelime havuzunun başlangıç içeriği. */
export const starterPool: DemoWord[] = [
  { eng: 'persistent', tr: 'azimli' },
  { eng: 'brave', tr: 'cesur' },
  { eng: 'journey', tr: 'yolculuk' },
  { eng: 'curious', tr: 'meraklı' },
  { eng: 'whisper', tr: 'fısıldamak' },
  { eng: 'harbor', tr: 'liman' },
];

export const videos: { tone: VideoTone; title: string; desc: string; length: number }[] = [
  { tone: 'sunset', title: 'Ordering Coffee in English', desc: 'Kafede sipariş verirken kullanılan kalıplar.', length: 48 },
  { tone: 'ocean', title: 'Travel English at the Airport', desc: 'Havalimanında işine yarayacak cümleler.', length: 56 },
  { tone: 'dawn', title: 'Small Talk: Everyday Conversations', desc: 'Günlük sohbetlerde doğal kalmanın yolları.', length: 44 },
];
