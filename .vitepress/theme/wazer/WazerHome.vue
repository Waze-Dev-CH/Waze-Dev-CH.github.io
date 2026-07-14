<script setup>
// Landing grand public de la section Wazers, internationalisée (fr/en/de/it).
// Hero = illustration officielle Waze en fond + carte de contenu lisible.
import { computed } from 'vue';
import { useData } from 'vitepress';

const { lang } = useData();
const loc = computed(() => {
  const l = (lang.value || 'fr').slice(0, 2);
  return ['fr', 'en', 'de', 'it'].includes(l) ? l : 'fr';
});

const stores = {
  android: 'https://play.google.com/store/apps/details?id=com.waze',
  ios: 'https://apps.apple.com/app/id323229106',
};
const liveMap = 'https://www.waze.com/live-map/directions?rp_subscription=vignette-switzerland';

// Icônes : illustrations Waze officielles (kit communautaire).
const ICONS = '/img/wazers/waze-kit/icons';

// Structure partagée (chemins, couleurs, icônes) ; les textes sont par locale ci-dessous.
const TILES = [
  { path: 'wazers/vignette', accent: 'var(--swiss-red)', icon: 'vignette.png' },
  { path: 'wazers/stickair', accent: 'var(--wz-go)', icon: 'stickair.png' },
  { path: 'wazers/faq', accent: 'var(--wz-sky-deep)', icon: 'faq.png' },
];
const MORE = [
  { path: 'editors/', accent: '#8A5CF6', icon: 'editor.png' },
  { path: 'developers/', accent: '#FF7A45', icon: 'scripter.png' },
];

const STRINGS = {
  fr: {
    eyebrow: 'Waze Suisse',
    h1: 'Waze connaît la Suisse par cœur.',
    sub: "La navigation communautaire, le trafic en temps réel, et l'essentiel côté suisse : vignette, Stick'AIR et vos questions fréquentes.",
    ghost: 'Tester un itinéraire avec vignette',
    g1: 'Par où commencer ?',
    g2: 'Aller plus loin',
    tiles: [
      { title: 'Vignette autoroutière', desc: "Activer les autoroutes suisses dans Waze, et savoir où l'acheter." },
      { title: "Stick'AIR à Genève", desc: 'Circulation différenciée : Waze contourne les zones restreintes.' },
      { title: 'FAQ conducteurs', desc: "Radars, prix de l'essence, autoroutes… les réponses courtes." },
    ],
    more: [
      { title: 'Devenir éditeur', desc: 'Améliorer la carte suisse dans l’éditeur Waze (WME).' },
      { title: 'Devenir développeur', desc: 'Développer des userscripts pour la communauté.' },
    ],
  },
  en: {
    eyebrow: 'Waze Switzerland',
    h1: 'Waze knows Switzerland by heart.',
    sub: "Community navigation, real-time traffic, and the Swiss essentials: motorway vignette, Stick'AIR and your frequently asked questions.",
    ghost: 'Try a route with the vignette',
    g1: 'Where to start?',
    g2: 'Go further',
    tiles: [
      { title: 'Motorway vignette', desc: 'Enable Swiss motorways in Waze, and find out where to buy it.' },
      { title: "Stick'AIR in Geneva", desc: 'Low-emission zones: Waze avoids the restricted areas.' },
      { title: 'Driver FAQ', desc: 'Speed cameras, fuel prices, motorways: the short answers.' },
    ],
    more: [
      { title: 'Become an editor', desc: 'Improve the Swiss map in the Waze Map Editor (WME).' },
      { title: 'Become a developer', desc: 'Develop userscripts for the community.' },
    ],
  },
  de: {
    eyebrow: 'Waze Schweiz',
    h1: 'Waze kennt die Schweiz in- und auswendig.',
    sub: "Community-Navigation, Verkehr in Echtzeit, und das Wichtigste für die Schweiz: Autobahnvignette, Stick'AIR und Ihre häufigen Fragen.",
    ghost: 'Eine Route mit Vignette testen',
    g1: 'Wo anfangen?',
    g2: 'Mehr entdecken',
    tiles: [
      { title: 'Autobahnvignette', desc: 'Schweizer Autobahnen in Waze aktivieren, und erfahren, wo man sie kauft.' },
      { title: "Stick'AIR in Genf", desc: 'Umweltzonen: Waze umfährt die eingeschränkten Bereiche.' },
      { title: 'Fahrer-FAQ', desc: 'Blitzer, Benzinpreise, Autobahnen: die kurzen Antworten.' },
    ],
    more: [
      { title: 'Editor werden', desc: 'Die Schweizer Karte im Waze Map Editor (WME) verbessern.' },
      { title: 'Developer werden', desc: 'Userscripts für die Community entwickeln.' },
    ],
  },
  it: {
    eyebrow: 'Waze Svizzera',
    h1: 'Waze conosce la Svizzera a memoria.',
    sub: "Navigazione comunitaria, traffico in tempo reale, e l'essenziale lato svizzero: vignetta autostradale, Stick'AIR e le tue domande frequenti.",
    ghost: 'Prova un itinerario con la vignetta',
    g1: 'Da dove iniziare?',
    g2: 'Andare oltre',
    tiles: [
      { title: 'Vignetta autostradale', desc: 'Attivare le autostrade svizzere in Waze, e sapere dove acquistarla.' },
      { title: "Stick'AIR a Ginevra", desc: 'Zone a traffico limitato: Waze evita le aree soggette a restrizioni.' },
      { title: 'FAQ conducenti', desc: 'Autovelox, prezzi del carburante, autostrade: le risposte brevi.' },
    ],
    more: [
      { title: 'Diventare editor', desc: 'Migliorare la mappa svizzera nel Waze Map Editor (WME).' },
      { title: 'Diventare developer', desc: 'Sviluppare userscript per la comunità.' },
    ],
  },
};

const t = computed(() => {
  const s = STRINGS[loc.value] || STRINGS.fr;
  const mk = (defs, txt) =>
    defs.map((d, i) => ({
      link: `/${loc.value}/${d.path}`,
      accent: d.accent,
      icon: `${ICONS}/${d.icon}`,
      title: txt[i].title,
      desc: txt[i].desc,
    }));
  return {
    eyebrow: s.eyebrow,
    h1: s.h1,
    sub: s.sub,
    ghost: s.ghost,
    groups: [
      { title: s.g1, items: mk(TILES, s.tiles) },
      { title: s.g2, items: mk(MORE, s.more) },
    ],
  };
});
</script>

<template>
  <div class="wz">
    <!-- ── HERO ────────────────────────────────────────────────────── -->
    <section class="wz-hero">
      <img class="wz-bg" src="/img/wazers/waze-kit/waze-bg.png" alt="" aria-hidden="true" />
      <div class="wz-hero-inner">
        <div class="wz-card">
          <div class="wz-brand">
            <img class="wz-logo" src="/img/wazers/waze-kit/waze-swiss-square.png" alt="Waze Community Switzerland" width="40" height="40" />
            <span class="wz-eyebrow">{{ t.eyebrow }}</span>
          </div>
          <h1 class="wz-h1">{{ t.h1 }}</h1>
          <p class="wz-sub">{{ t.sub }}</p>
          <div class="wz-cta">
            <a class="wz-store" :href="stores.android" target="_blank" rel="noopener">Google&nbsp;Play</a>
            <a class="wz-store" :href="stores.ios" target="_blank" rel="noopener">App&nbsp;Store</a>
          </div>
          <a class="wz-ghost" :href="liveMap" target="_blank" rel="noopener">
            {{ t.ghost }} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>

    <!-- ── TUILES ────────────────────────────────────────────────── -->
    <div class="wz-body">
      <template v-for="group in t.groups" :key="group.title">
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
  min-height: clamp(240px, 24vw, 330px);
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
  padding: 1.5rem 1.5rem;
}

.wz-card {
  max-width: 540px;
  padding: 1.25rem 1.8rem;
  border-radius: 1.35rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 18px 50px rgba(15, 30, 42, 0.25);
  animation: wz-rise 0.5s ease both;
}

.wz-brand {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin: 0 0 0.55rem;
}

.wz-logo {
  width: 40px;
  height: 40px;
  border-radius: 10px;
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
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  line-height: 1.08;
  letter-spacing: -0.01em;
  text-wrap: balance;
  color: var(--vp-c-text-1);
  margin: 0 0 0.55rem;
}

.wz-sub {
  font-size: 0.95rem;
  line-height: 1.45;
  color: var(--vp-c-text-2);
  margin: 0 0 1rem;
}

.wz-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-bottom: 0.7rem;
}

.wz-store {
  padding: 0.6em 1.3em;
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
  padding: 2rem 1.5rem;
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
  margin-top: 1.5rem;
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
/* Tablettes / petits laptops : la hauteur du hero suit son contenu
   (on retire le plancher de 440px) pour remonter les tuiles. */
@media (max-width: 960px) {
  .wz-hero {
    min-height: auto;
  }

  .wz-hero-inner {
    padding-top: 1.75rem;
    padding-bottom: 1.75rem;
  }

  .wz-body {
    padding-top: 2rem;
  }
}

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

  .wz-sub {
    margin-bottom: 1.1rem;
  }

  .wz-body {
    padding: 1.75rem 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .wz-card {
    animation: none;
  }
}
</style>
