<script setup>
import { useData } from 'vitepress';
import { computed } from 'vue';
import { data as taglines } from './taglines.data';

// ponytail: the localized black line lives here (4 short strings) rather than
// themeConfig.footer, so the default VPFooter stays off and we render a single
// condensed footer. Add a locale here when you add one to the site.
const COPY = {
  fr: 'Waze Community Switzerland · Documentation communautaire — non affiliée à Waze/Google',
  en: 'Waze Community Switzerland · Community documentation — not affiliated with Waze/Google',
  de: 'Waze Community Schweiz · Community-Dokumentation — nicht mit Waze/Google verbunden',
  it: 'Waze Community Svizzera · Documentazione comunitaria — non affiliata a Waze/Google',
};

const { lang } = useData();
const line = computed(() => COPY[lang.value] ?? COPY.fr);
const slogans = computed(() => taglines.map((t) => t.text).join('   ·   '));
</script>

<template>
  <footer class="site-footer">
    <p v-if="slogans" class="sf-slogans">{{ slogans }}</p>
    <p class="sf-copy">{{ line }}</p>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--vp-c-divider);
  padding: 1rem 1.5rem 1.25rem;
  text-align: center;
}

.sf-slogans {
  margin: 0 0 0.3rem;
  font-size: 0.74rem;
  line-height: 1.5;
  color: var(--vp-c-text-3);
}

.sf-copy {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--vp-c-text-1);
}
</style>
