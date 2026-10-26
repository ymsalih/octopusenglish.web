/**
 * Sitenin kaydırma motoru. Tek bir kaydırma dinleyicisi ve birkaç
 * IntersectionObserver ile çalışır; kütüphane kullanmaz.
 *
 *  data-reveal                 → görünür alana girince .is-visible alır (bir kez)
 *  data-progress="exit"        → bölüm ekranın üstünden çıkarken --p: 0 → 1
 *  data-progress="through"     → bölüm ekrana girip tamamen çıkana kadar --p: 0 → 1
 *  data-progress="sticky"      → yapışkan (sticky) bölümün kaydırma payı boyunca --p: 0 → 1
 *  data-steps / data-step      → ekranın ortasındaki adım aktif olur; eşleşen
 *                                [data-screen] öğeleri .is-active alır
 *  data-count="6"              → görünür olunca 0'dan sayarak yazar
 *  .spot                       → imleç konumunu --mx / --my olarak yazar
 *  :root --page-p              → tüm sayfanın kaydırma ilerlemesi
 */

const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const clamp = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

/* ---------- Beliren öğeler ve sayaçlar ---------- */

function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count);
  if (!Number.isFinite(target)) return;
  if (reduceMotion) {
    el.textContent = String(target);
    return;
  }
  const duration = 1400;
  const t0 = performance.now();
  const tick = (now: number) => {
    const p = clamp((now - t0) / duration);
    const eased = 1 - Math.pow(1 - p, 4);
    el.textContent = String(Math.round(target * eased));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const el = entry.target as HTMLElement;
      el.classList.add('is-visible');
      if (el.dataset.count) countUp(el);
      el.querySelectorAll<HTMLElement>('[data-count]').forEach(countUp);
      revealObserver.unobserve(el);
    }
  },
  { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
);
document.querySelectorAll('[data-reveal], [data-count]').forEach((el) => revealObserver.observe(el));

/* ---------- Kaydırmaya bağlı ilerleme (--p) ---------- */

const progressEls = Array.from(document.querySelectorAll<HTMLElement>('[data-progress]'));
const lastP = new WeakMap<HTMLElement, string>();
const header = document.querySelector<HTMLElement>('[data-header]');
let ticking = false;

function update() {
  ticking = false;
  const vh = window.innerHeight;

  for (const el of progressEls) {
    const r = el.getBoundingClientRect();
    if (r.bottom < -vh || r.top > vh * 2) continue; // uzaktaki bölümler atlanır
    let p = 0;
    switch (el.dataset.progress) {
      case 'exit':
        p = clamp(-r.top / r.height);
        break;
      case 'sticky':
        p = clamp(-r.top / Math.max(1, r.height - vh));
        break;
      default: // 'through'
        p = clamp((vh - r.top) / (vh + r.height));
    }
    const value = p.toFixed(4);
    if (lastP.get(el) !== value) {
      el.style.setProperty('--p', value);
      lastP.set(el, value);
    }
  }

  const max = document.documentElement.scrollHeight - vh;
  root.style.setProperty('--page-p', (max > 0 ? clamp(window.scrollY / max) : 0).toFixed(4));
  header?.classList.toggle('is-scrolled', window.scrollY > 12);
}

function requestUpdate() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(update);
  }
}
window.addEventListener('scroll', requestUpdate, { passive: true });
window.addEventListener('resize', requestUpdate);
update();

/* ---------- Adım adım anlatım (yapışkan telefon) ---------- */

document.querySelectorAll<HTMLElement>('[data-steps]').forEach((container) => {
  const steps = Array.from(container.querySelectorAll<HTMLElement>('[data-step]'));
  // Masaüstündeki tek yapışkan telefonun ekranları adımlara göre değişir.
  const screens = Array.from(container.querySelectorAll<HTMLElement>('[data-screen]:not([data-screen-inline])'));
  if (!steps.length) return;

  // Mobilde her adımın kendi telefonu var; ekrana girince oynar, çıkınca durur.
  const inlineObserver = new IntersectionObserver(
    (entries) => {
      for (const e of entries) e.target.classList.toggle('is-active', e.isIntersecting);
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0 },
  );
  container.querySelectorAll('[data-screen-inline]').forEach((s) => inlineObserver.observe(s));

  const setActive = (id: string) => {
    if (container.dataset.active === id) return;
    container.dataset.active = id;
    steps.forEach((s) => s.classList.toggle('is-active', s.dataset.step === id));
    screens.forEach((s) => s.classList.toggle('is-active', s.dataset.screen === id));
  };
  setActive(steps[0].dataset.step!);

  // Ekranın tam ortasındaki yatay çizgiyi kesen adım aktif olur.
  const stepObserver = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) setActive((e.target as HTMLElement).dataset.step!);
      }
    },
    { rootMargin: '-50% 0px -50% 0px', threshold: 0 },
  );
  steps.forEach((s) => stepObserver.observe(s));

  // Bölüm ekran dışındayken telefon animasyonları duraklatılır.
  const viewObserver = new IntersectionObserver((entries) => {
    for (const e of entries) container.classList.toggle('in-view', e.isIntersecting);
  });
  viewObserver.observe(container);
});

/* ---------- İmleci takip eden ışık ---------- */

if (window.matchMedia('(hover: hover)').matches) {
  document.addEventListener(
    'pointermove',
    (e) => {
      const target = (e.target as Element | null)?.closest?.<HTMLElement>('.spot');
      if (!target) return;
      const r = target.getBoundingClientRect();
      target.style.setProperty('--mx', `${e.clientX - r.left}px`);
      target.style.setProperty('--my', `${e.clientY - r.top}px`);
    },
    { passive: true },
  );
}
