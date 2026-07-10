<script setup>
import { useData } from 'vitepress';
import { computed } from 'vue';
import { data as taglines } from './taglines.data';

// ponytail: the localized black line lives here (4 short strings) rather than
// themeConfig.footer, so the default VPFooter stays off and we render a single
// condensed footer. Add a locale here when you add one to the site.
const COPY = {
  fr: 'Waze Community Switzerland · Documentation communautaire, non affiliée à Waze/Google',
  en: 'Waze Community Switzerland · Community documentation, not affiliated with Waze/Google',
  de: 'Waze Community Schweiz · Community-Dokumentation, nicht mit Waze/Google verbunden',
  it: 'Waze Community Svizzera · Documentazione comunitaria, non affiliata a Waze/Google',
};

const { lang } = useData();
const line = computed(() => COPY[lang.value] ?? COPY.fr);
</script>

<template>
  <footer class="site-footer">
    <p v-if="taglines.length" class="sf-slogans">
      <template v-for="(t, i) in taglines" :key="t.lang"><span
        v-if="i"
        class="sf-sep"
        aria-hidden="true"
      >·</span><span :lang="t.lang">{{ t.text }}</span></template>
    </p>
    <p class="sf-copy">{{ line }}</p>
  </footer>
</template>

<style scoped>
.site-footer {
  /** z-index : passe au-dessus du « curtain » (fixed, fond blanc) de l'aside
      qui débordait sur la bande cyan en bas de page. */
  position: relative;
  z-index: 20;
  background: #32CCFF;
  padding: 1.5rem;
  text-align: center;
}

.sf-slogans {
  margin: 0 0 0.3rem;
  font-size: 0.8rem;
  line-height: 1.6;
  color: rgba(15, 30, 42, 0.75);
}

.sf-sep {
  margin: 0 0.5em;
  color: rgba(15, 30, 42, 0.35);
}

.sf-copy {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.5;
  color: #0F1E2A;
}
</style>
