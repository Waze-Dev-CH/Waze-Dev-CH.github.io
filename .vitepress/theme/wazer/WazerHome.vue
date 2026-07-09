<script setup>
// Landing grand public de la section Wazers (FR).
// Hero = illustration officielle Waze en fond + carte de contenu lisible.
const stores = {
  android: 'https://play.google.com/store/apps/details?id=com.waze',
  ios: 'https://apps.apple.com/app/id323229106',
};
const liveMap = 'https://www.waze.com/live-map/directions?rp_subscription=vignette-switzerland';

// Icônes : illustrations Waze officielles (kit communautaire).
const ICONS = '/img/wazers/waze-kit/icons';

const tiles = [
  {
    link: '/fr/wazers/vignette',
    accent: 'var(--swiss-red)',
    title: 'Vignette autoroutière',
    desc: "Activer les autoroutes suisses dans Waze — et savoir où l'acheter.",
    icon: `${ICONS}/vignette.png`,
  },
  {
    link: '/fr/wazers/stickair',
    accent: 'var(--wz-go)',
    title: "Stick'AIR — Genève",
    desc: 'Circulation différenciée : Waze contourne les zones restreintes.',
    icon: `${ICONS}/stickair.png`,
  },
  {
    link: '/fr/wazers/faq',
    accent: 'var(--wz-sky-deep)',
    title: 'FAQ conducteurs',
    desc: "Radars, prix de l'essence, autoroutes… les réponses courtes.",
    icon: `${ICONS}/faq.png`,
  },
];

// Passerelles vers les autres publics (contributeurs).
const moreTiles = [
  {
    link: '/fr/editors/',
    accent: '#8A5CF6',
    title: 'Devenir éditeur',
    desc: 'Améliorer la carte suisse dans l’éditeur Waze (WME).',
    icon: `${ICONS}/editor.png`,
  },
  {
    link: '/fr/scripters/',
    accent: '#FF7A45',
    title: 'Scripter Waze',
    desc: 'Développer des userscripts pour la communauté.',
    icon: `${ICONS}/scripter.png`,
  },
];

const groups = [
  { title: 'Par où commencer ?', items: tiles },
  { title: 'Aller plus loin', items: moreTiles },
];
</script>

<template>
  <div class="wz">
    <!-- ── HERO ────────────────────────────────────────────────────── -->
    <section class="wz-hero">
      <img class="wz-bg" src="/img/wazers/waze-kit/waze-bg.png" alt="" aria-hidden="true" />
      <div class="wz-hero-inner">
        <div class="wz-card">
          <div class="wz-brand">
            <img class="wz-logo" src="/img/wazers/waze-kit/waze-swiss-square.png" alt="Waze Community Switzerland" width="52" height="52" />
            <span class="wz-eyebrow">Waze Suisse</span>
          </div>
          <h1 class="wz-h1">Waze connaît la Suisse par cœur.</h1>
          <p class="wz-sub">
            Waze, c'est la navigation communautaire : le trafic en temps réel,
            signalé par des millions de conducteurs. Côté suisse, on vous explique
            l'essentiel — vignette, Stick'AIR, et les questions qui reviennent.
          </p>
          <div class="wz-cta">
            <a class="wz-store" :href="stores.android" target="_blank" rel="noopener">Google&nbsp;Play</a>
            <a class="wz-store" :href="stores.ios" target="_blank" rel="noopener">App&nbsp;Store</a>
          </div>
          <a class="wz-ghost" :href="liveMap" target="_blank" rel="noopener">
            Tester un itinéraire avec vignette <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>

    <!-- ── TUILES ────────────────────────────────────────────────── -->
    <div class="wz-body">
      <template v-for="group in groups" :key="group.title">
        <h2 class="wz-tiles-title">{{ group.title }}</h2>
        <section class="wz-tiles">
          <a
            v-for="tile in group.items"
            :key="tile.link"
            class="wz-tile"
            :href="tile.link"
            :style="{ '--wz-accent': tile.accent }"
          >
            <img class="wz-tile-art" :src="tile.icon" alt="" aria-hidden="true" width="48" height="48" />
            <span class="wz-tile-body">
              <span class="wz-tile-title">{{ tile.title }}</span>
              <span class="wz-tile-desc">{{ tile.desc }}</span>
            </span>
            <span class="wz-tile-arrow" aria-hidden="true">→</span>
          </a>
        </section>
      </template>
    </div>
  </div>
</template>

<style scoped>
/* ── Hero full-bleed : illustration Waze + carte de contenu ───────── */
.wz-hero {
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  min-height: clamp(440px, 42vw, 560px);
  overflow: hidden;
  display: flex;
  align-items: center;
}

.wz-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.wz-hero-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1152px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
}

.wz-card {
  max-width: 540px;
  padding: 2rem 2.1rem;
  border-radius: 1.5rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 18px 50px rgba(15, 30, 42, 0.25);
  animation: wz-rise 0.5s ease both;
}

.wz-brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0 0 0.9rem;
}

.wz-logo {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  display: block;
  flex-shrink: 0;
}

.wz-eyebrow {
  font-family: var(--wz-font-display);
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--wz-sky-deep);
}

.wz-h1 {
  font-family: var(--wz-font-display);
  font-weight: 600;
  font-size: clamp(2rem, 4.4vw, 3rem);
  line-height: 1.06;
  letter-spacing: -0.01em;
  text-wrap: balance;
  color: var(--vp-c-text-1);
  margin: 0 0 0.9rem;
}

.wz-sub {
  font-size: 1.02rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 0 0 1.5rem;
}

.wz-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.9rem;
}

.wz-store {
  padding: 0.7em 1.4em;
  border-radius: 999px;
  background: var(--wz-ink);
  color: #fff;
  font-family: var(--wz-font-display);
  font-weight: 600;
  font-size: 0.98rem;
  text-decoration: none;
  transition: transform 0.16s ease, box-shadow 0.16s ease;
}

.wz-store:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(15, 30, 42, 0.22);
}

.dark .wz-store {
  background: var(--wz-sky);
  color: var(--wz-ink);
}

.wz-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.35em;
  font-family: var(--wz-font-display);
  font-weight: 500;
  color: var(--wz-sky-deep);
  text-decoration: none;
}

.wz-ghost span {
  transition: transform 0.16s ease;
}

.wz-ghost:hover span {
  transform: translateX(4px);
}

.dark .wz-ghost {
  color: var(--wz-sky);
}

@keyframes wz-rise {
  from {
    opacity: 0;
    transform: translateY(12px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── Corps (tuiles) ───────────────────────────────────────────────── */
.wz-body {
  max-width: 1152px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
}

.wz-tiles-title {
  font-family: var(--wz-font-display);
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--vp-c-text-1);
  text-align: center;
  margin: 0 0 1.4rem;
}

.wz-tiles-title:not(:first-child) {
  margin-top: 2.5rem;
}

.wz-tiles {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(248px, 1fr));
  gap: 1rem;
}

.wz-tile {
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  padding: 1.3rem;
  border-radius: 1.1rem;
  border: 1.5px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}

.wz-tile:hover {
  transform: translateY(-4px);
  border-color: var(--wz-accent);
  box-shadow: 0 12px 30px rgba(15, 30, 42, 0.10);
}

.wz-tile-art {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: block;
}

.wz-tile-body {
  flex: 1;
  min-width: 0;
}

.wz-tile-title {
  display: block;
  font-family: var(--wz-font-display);
  font-weight: 600;
  font-size: 1.08rem;
  color: var(--vp-c-text-1);
  margin-bottom: 0.25rem;
}

.wz-tile-desc {
  display: block;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.wz-tile-arrow {
  flex-shrink: 0;
  align-self: center;
  color: var(--wz-accent);
  font-size: 1.2rem;
  transition: transform 0.18s ease;
}

.wz-tile:hover .wz-tile-arrow {
  transform: translateX(4px);
}

/* ── Responsive ───────────────────────────────────────────────────── */
@media (max-width: 640px) {
  .wz-hero {
    min-height: 0;
    padding: 1rem 0;
  }

  .wz-hero-inner {
    padding: 1.25rem 1rem;
  }

  .wz-card {
    padding: 1.5rem 1.35rem;
    box-shadow: 0 12px 34px rgba(15, 30, 42, 0.3);
  }
}

@media (prefers-reduced-motion: reduce) {
  .wz-card {
    animation: none;
  }
}
</style>
