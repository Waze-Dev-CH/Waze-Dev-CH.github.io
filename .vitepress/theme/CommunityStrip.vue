<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useData } from 'vitepress';

// Bandeau site-wide : ce site est communautaire, pas le site officiel de Waze.
// Volontairement non masquable (c'est une mention, pas une annonce).
const COPY = {
  fr: {
    label: 'Site communautaire',
    text: "Ce site est géré par des membres de la communauté. Il n'est ni exploité ni supervisé par Waze.",
    cta: 'Site officiel de Waze',
  },
  en: {
    label: 'Community managed',
    text: 'This site is run by community members. It is not operated or supervised by Waze.',
    cta: 'Official Waze site',
  },
  de: {
    label: 'Community-Website',
    text: 'Diese Website wird von Community-Mitgliedern betrieben. Sie wird weder von Waze betrieben noch beaufsichtigt.',
    cta: 'Offizielle Waze-Website',
  },
  it: {
    label: 'Sito comunitario',
    text: 'Questo sito è gestito da membri della comunità. Non è gestito né supervisionato da Waze.',
    cta: 'Sito ufficiale di Waze',
  },
};

const { lang } = useData();
const loc = computed(() => (COPY[lang.value] ? lang.value : 'fr'));
const t = computed(() => COPY[loc.value]);
const href = computed(() => `https://www.waze.com/${loc.value}/company`);

// VitePress a besoin de la hauteur du slot layout-top pour décaler la nav
// fixe et la sidebar ; elle varie selon la langue et la largeur d'écran.
const el = ref(null);
let ro;
onMounted(() => {
  ro = new ResizeObserver(() => {
    document.documentElement.style.setProperty('--vp-layout-top-height', `${el.value.offsetHeight}px`);
  });
  ro.observe(el.value);
});
onUnmounted(() => ro?.disconnect());
</script>

<template>
  <aside ref="el" class="cs">
    <p class="cs-inner">
      <span class="cs-label">{{ t.label }}</span>
      <span class="cs-text">{{ t.text }}</span>
      <a class="cs-link" :href="href" target="_blank" rel="noopener">{{ t.cta }} <span aria-hidden="true">↗</span></a>
    </p>
  </aside>
</template>

<style scoped>
.cs {
  /* Le slot layout-top doit être hors flux : VitePress réserve déjà sa hauteur
     via --vp-layout-top-height (nav, sidebar, contenu). Sans `fixed`, la
     hauteur est comptée deux fois et laisse une bande blanche sous la nav. */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--vp-z-index-layout-top);
  background: var(--wz-ink, #0f1e2a);
  border-bottom: 2px solid var(--wz-sun, #ffc53d);
}

.cs-inner {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0.45rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  gap: 0.35rem 0.7rem;
  font-size: 0.78rem;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.82);
  text-align: center;
}

.cs-label {
  font-family: var(--wz-font-display, inherit);
  font-weight: 600;
  font-size: 0.72rem;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--wz-sun, #ffc53d);
}

.cs-link {
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}

.cs-link:hover {
  border-bottom-color: #fff;
}

@media (max-width: 640px) {
  .cs-inner {
    padding: 0.5rem 1rem;
  }
}
</style>
