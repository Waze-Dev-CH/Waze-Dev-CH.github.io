<script setup>
import { useData } from 'vitepress';
import { ref, computed, onMounted } from 'vue';

// Champs are declared in the page frontmatter (`champs:`). Emails are stored as
// the user part only + a shared domain; the full address is never in the SSR
// HTML — it is assembled client-side on mount, so scrapers reading the static
// markup don't get a harvestable address.
const { frontmatter } = useData();
const champs = computed(() => frontmatter.value.champs ?? []);
const domain = 'waze-switzerland.ch';

const revealed = ref(false);
onMounted(() => { revealed.value = true; });

const label = (user) => (revealed.value ? `${user}@${domain}` : `${user} [chez] ${domain}`);
const href = (user) => (revealed.value ? `mailto:${user}@${domain}` : undefined);
</script>

<template>
  <div class="champs-grid">
    <div v-for="c in champs" :key="c.pseudo" class="champ-card">
      <div class="champ-head">
        <span class="champ-pseudo">{{ c.pseudo }}</span>
        <span v-if="c.title" class="champ-title">{{ c.title }}</span>
      </div>
      <p v-if="c.roles" class="champ-roles">{{ c.roles }}</p>
      <p v-if="c.langs" class="champ-langs">
        <span v-for="l in c.langs" :key="l" class="champ-lang">{{ l }}</span>
      </p>
      <a
        v-if="c.email"
        class="champ-mail"
        :href="href(c.email)"
        :title="revealed ? 'Écrire un e-mail' : undefined"
      >{{ label(c.email) }}</a>
    </div>
  </div>
</template>

<style scoped>
.champs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.champ-card {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1rem 1.15rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.75rem;
  background: var(--vp-c-bg-soft);
}

.champ-head {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.champ-pseudo {
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--vp-c-text-1);
}

.champ-title {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.champ-roles {
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.45;
  color: var(--vp-c-text-2);
}

.champ-langs {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.champ-lang {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  padding: 0.1em 0.5em;
  border-radius: 999px;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-3);
}

.champ-mail {
  margin-top: auto;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  word-break: break-word;
}

.champ-mail:hover {
  text-decoration: underline;
}
</style>
