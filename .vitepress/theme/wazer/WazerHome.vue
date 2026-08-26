<script setup>
// Landing grand public de la section Wazers, internationalisée (fr/en/de/it).
// Hero = illustration officielle Waze en fond + carte de contenu lisible.
import { computed, onMounted, ref } from 'vue';
import { useData } from 'vitepress';

// Bandeau d'info signalement police (aout 2026), masquable et memorise par navigateur.
const NOTICE_KEY = 'wz-notice-police-2026-08';
const noticeOpen = ref(false);
onMounted(() => {
  try {
    noticeOpen.value = localStorage.getItem(NOTICE_KEY) !== '1';
  } catch {
    noticeOpen.value = true;
  }
});
function dismissNotice() {
  noticeOpen.value = false;
  try {
    localStorage.setItem(NOTICE_KEY, '1');
  } catch {}
}

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
const discord = 'https://discord.gg/dmxUwvTkk5';

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
    noticeTitle: "Depuis août 2026, le signalement de la police est désactivé sur Waze en Suisse et au Liechtenstein.",
    noticeBody: "Cette fonctionnalité n'est actuellement plus disponible dans ces deux pays. Plus de détails,",
    noticeMore: 'ici',
    noticeClose: 'Fermer',
    noticeLink: 'wazers/faq#radars-et-police',
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
    commTitle: 'Rejoignez la communauté',
    commDesc: 'Questions, entraide et actualités Waze pour la Suisse : la communauté vous attend sur Discord.',
    commCta: 'Rejoindre le Discord',
  },
  en: {
    noticeTitle: "Since August 2026, police reporting has been disabled on Waze in Switzerland and Liechtenstein.",
    noticeBody: "This feature is currently no longer available in these two countries. More details",
    noticeMore: 'here',
    noticeClose: 'Close',
    noticeLink: 'wazers/faq#speed-cameras-and-police',
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
    commTitle: 'Join the community',
    commDesc: 'Questions, help and Waze news for Switzerland: the community is waiting for you on Discord.',
    commCta: 'Join the Discord',
  },
  de: {
    noticeTitle: "Seit August 2026 sind die Polizeimeldungen auf Waze in der Schweiz und in Liechtenstein deaktiviert.",
    noticeBody: "Diese Funktion ist in diesen beiden Ländern derzeit nicht mehr verfügbar. Mehr Details",
    noticeMore: 'hier',
    noticeClose: 'Schliessen',
    noticeLink: 'wazers/faq#blitzer-und-polizei',
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
    commTitle: 'Werden Sie Teil der Community',
    commDesc: 'Fragen, gegenseitige Hilfe und Waze-News für die Schweiz: die Community erwartet Sie auf Discord.',
    commCta: 'Discord beitreten',
  },
  it: {
    noticeTitle: "Da agosto 2026 le segnalazioni della polizia su Waze sono disattivate in Svizzera e nel Liechtenstein.",
    noticeBody: "Questa funzione attualmente non è più disponibile in questi due paesi. Maggiori dettagli",
    noticeMore: 'qui',
    noticeClose: 'Chiudi',
    noticeLink: 'wazers/faq#autovelox-e-polizia',
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
    commTitle: 'Unisciti alla comunità',
    commDesc: 'Domande, aiuto reciproco e novità Waze per la Svizzera: la comunità ti aspetta su Discord.',
    commCta: 'Unisciti al Discord',
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
    noticeTitle: s.noticeTitle,
    noticeBody: s.noticeBody,
    noticeMore: s.noticeMore,
    noticeClose: s.noticeClose,
    noticeLink: `/${loc.value}/${s.noticeLink}`,
    eyebrow: s.eyebrow,
    h1: s.h1,
    sub: s.sub,
    ghost: s.ghost,
    groups: [
      { title: s.g1, items: mk(TILES, s.tiles) },
      { title: s.g2, items: mk(MORE, s.more) },
    ],
    commTitle: s.commTitle,
    commDesc: s.commDesc,
    commCta: s.commCta,
  };
});
</script>

<template>
  <div class="wz">
    <!-- ── BANDEAU INFO (signalement police) ───────────────────────── -->
    <aside v-if="noticeOpen" class="wz-notice">
      <div class="wz-notice-inner">
        <span class="wz-notice-icon" aria-hidden="true">!</span>
        <p class="wz-notice-text">
          <strong>{{ t.noticeTitle }}</strong> {{ t.noticeBody }}
          <a :href="t.noticeLink">{{ t.noticeMore }}</a>.
        </p>
        <button class="wz-notice-close" type="button" :aria-label="t.noticeClose" @click="dismissNotice">
          <span aria-hidden="true">×</span>
        </button>
      </div>
    </aside>

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

    <!-- ── COMMUNAUTÉ (Discord) ───────────────────────────────────── -->
    <section class="wz-comm">
      <div class="wz-comm-inner">
        <svg class="wz-comm-logo" viewBox="0 0 127.14 96.36" fill="currentColor" aria-hidden="true">
          <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
        </svg>
        <div class="wz-comm-body">
          <h2 class="wz-comm-title">{{ t.commTitle }}</h2>
          <p class="wz-comm-desc">{{ t.commDesc }}</p>
        </div>
        <a class="wz-comm-btn" :href="discord" target="_blank" rel="noopener">
          {{ t.commCta }} <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Le hero prend la hauteur restante quand la page est plus courte que
   l'écran (cf. .VPContent:has(.wz) dans custom.css). */
.wz {
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* ── Bandeau info masquable ───────────────────────────────────────── */
.wz-notice {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background: color-mix(in srgb, var(--swiss-red) 12%, var(--vp-c-bg));
  border-bottom: 1px solid color-mix(in srgb, var(--swiss-red) 40%, transparent);
}

.wz-notice-inner {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0.75rem 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.wz-notice-icon {
  flex-shrink: 0;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background: var(--swiss-red);
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  line-height: 1.4rem;
  text-align: center;
}

.wz-notice-text {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--vp-c-text-1);
}

.wz-notice-text a {
  white-space: nowrap;
  font-weight: 600;
  color: var(--swiss-red);
  text-decoration: none;
}

.wz-notice-text a:hover {
  text-decoration: underline;
}

.wz-notice-close {
  flex-shrink: 0;
  margin-left: auto;
  padding: 0 0.35rem;
  border: 0;
  background: none;
  color: var(--vp-c-text-2);
  font-size: 1.3rem;
  line-height: 1.2;
  cursor: pointer;
}

.wz-notice-close:hover {
  color: var(--vp-c-text-1);
}

@media (max-width: 640px) {
  .wz-notice-inner {
    padding: 0.75rem 1rem;
  }
}

/* ── Hero full-bleed : illustration Waze + carte de contenu ───────── */
.wz-hero {
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  min-height: clamp(200px, 20vw, 290px);
  flex: 1 0 auto;
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
  padding: 1.15rem 1.5rem;
}

.wz-card {
  max-width: 540px;
  padding: 1.05rem 1.7rem;
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
  margin: 0 0 0.85rem;
}

.wz-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-bottom: 0.55rem;
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
  padding: 1.5rem 1.5rem;
  /* Enfant flex avec marges auto : sans width, il se réduit à son contenu. */
  width: 100%;
}

.wz-tiles-title {
  font-family: var(--wz-font-display);
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--vp-c-text-1);
  text-align: center;
  margin: 0 0 1rem;
}

.wz-tiles-title:not(:first-child) {
  margin-top: 1.25rem;
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
  padding: 1.1rem;
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

/* ── Bandeau communauté (Discord) ─────────────────────────────────── */
.wz-comm {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  background: #5865f2;
  color: #fff;
}

.wz-comm-inner {
  max-width: 1152px;
  margin: 0 auto;
  padding: 1.55rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.4rem;
}

.wz-comm-logo {
  flex-shrink: 0;
  width: 56px;
  height: 42px;
}

.wz-comm-body {
  flex: 1;
  min-width: 0;
}

.wz-comm-title {
  font-family: var(--wz-font-display);
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.15;
  color: #fff;
  margin: 0 0 0.3rem;
  border: none;
  padding: 0;
}

.wz-comm-desc {
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.88);
  margin: 0;
}

.wz-comm-btn {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  padding: 0.6em 1.3em;
  border-radius: 999px;
  background: #fff;
  color: #5865f2;
  font-family: var(--wz-font-display);
  font-weight: 600;
  font-size: 0.98rem;
  text-decoration: none;
  transition: transform 0.16s ease, box-shadow 0.16s ease;
}

.wz-comm-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(15, 30, 42, 0.28);
}

.wz-comm-btn span {
  transition: transform 0.16s ease;
}

.wz-comm-btn:hover span {
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
    padding-top: 1.35rem;
    padding-bottom: 1.35rem;
  }

  .wz-body {
    padding-top: 1.5rem;
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

  .wz-comm-inner {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    padding: 2rem 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .wz-card {
    animation: none;
  }
}
</style>
