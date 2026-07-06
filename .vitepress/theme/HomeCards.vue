<script setup>
import { useData } from 'vitepress';
import { computed } from 'vue';

// Cards are declared per-locale in the home page frontmatter (`cards:`),
// so each language ships its own text and links. Renders nothing if absent.
const { frontmatter } = useData();
const cards = computed(() => frontmatter.value.cards ?? []);
</script>

<template>
  <div v-if="cards.length" class="home-cards">
    <div
      v-for="(card, i) in cards"
      :key="i"
      class="hc-card"
      :class="'hc-' + (card.variant || 'default')"
    >
      <span v-if="card.icon" class="hc-icon" aria-hidden="true">{{ card.icon }}</span>
      <span class="hc-body">
        <a
          v-if="card.href"
          class="hc-title hc-link"
          :href="card.href"
          :target="card.external ? '_blank' : undefined"
          :rel="card.external ? 'noopener' : undefined"
        >{{ card.title }}<span class="hc-arrow" aria-hidden="true">→</span></a>
        <strong v-else class="hc-title">{{ card.title }}</strong>
        <!-- ponytail: v-html of author-controlled frontmatter — lets a locale drop an inline link (e.g. on "vignette"). Not user input, so safe. -->
        <span v-if="card.body" class="hc-text" v-html="card.body"></span>
        <span v-if="card.buttons?.length" class="hc-buttons">
          <a
            v-for="(b, j) in card.buttons"
            :key="j"
            class="hc-pill"
            :href="b.href"
            :target="b.external ? '_blank' : undefined"
            :rel="b.external ? 'noopener' : undefined"
          >{{ b.label }}</a>
        </span>
      </span>
    </div>
  </div>
</template>

<style scoped>
.home-cards {
  max-width: 848px;
  margin: 0 auto 1.25rem auto;
  padding: 0 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 1rem;
}

.hc-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1 1 320px;
  max-width: 416px;
  padding: 0.9rem 1.15rem;
  border-radius: 0.875rem;
  border: 1.5px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.hc-brand {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.hc-icon {
  font-size: 1.75rem;
  flex-shrink: 0;
  line-height: 1;
}

.hc-body {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.2em;
}

.hc-title {
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.hc-brand .hc-title {
  color: var(--vp-c-brand-1);
}

a.hc-title {
  text-decoration: none;
  transition: opacity 0.18s;
}

a.hc-title:hover {
  opacity: 0.85;
}

.hc-arrow {
  transition: transform 0.18s;
}

a.hc-title:hover .hc-arrow {
  transform: translateX(3px);
}

.hc-text {
  font-size: 0.825rem;
  line-height: 1.55;
  color: var(--vp-c-text-2);
}

.hc-text :deep(a) {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-decoration: none;
}

.hc-text :deep(a:hover) {
  text-decoration: underline;
}

/* ── Buttons inside a card (e.g. app download) ─────────────────────── */
.hc-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.35rem;
}

.hc-pill {
  display: inline-block;
  padding: 0.3em 0.95em;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-brand-1);
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.18s, border-color 0.18s;
}

.hc-pill:hover {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
}
</style>
