<script setup>
import { useData } from 'vitepress';
import { useSidebar } from 'vitepress/theme';
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
const { hasSidebar } = useSidebar();
const line = computed(() => COPY[lang.value] ?? COPY.fr);
</script>

<template>
  <footer class="site-footer" :class="{ 'has-sidebar': hasSidebar }">
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
  border-top: 1px solid var(--vp-c-divider);
  padding: 1rem 1.5rem 1.25rem;
  text-align: center;
}

/* Le contenu (fixe) laisse la sidebar occuper la gouttière gauche en desktop ;
   on décale le footer d'autant pour qu'il reste centré dans la colonne. */
@media (min-width: 960px) {
  .site-footer.has-sidebar {
    padding-left: calc(var(--vp-sidebar-width) + 1.5rem);
  }
}

.sf-slogans {
  margin: 0 0 0.3rem;
  font-size: 0.8rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.sf-sep {
  margin: 0 0.5em;
  color: var(--vp-c-divider);
}

.sf-copy {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--vp-c-text-1);
}
</style>
