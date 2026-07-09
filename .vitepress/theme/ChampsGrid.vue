<script setup>
import { useData } from 'vitepress';
import { ref, computed, onMounted } from 'vue';

// Champs are declared in the page frontmatter (`champs:`). Only the user part of
// the address is in the frontmatter; the domain is added client-side on mount,
// so the static HTML never contains a complete, recomposable address. Before
// hydration we render a plain <span> (no dead href, works without JS as text).
const { frontmatter } = useData();
const champs = computed(() => frontmatter.value.champs ?? []);
const domain = 'waze-switzerland.ch';

// Badges de fonction officiels Waze, déduits du champ `roles`.
function roleIcons(c) {
  const r = c.roles || '';
  const out = [];
  if (/Partners Coordinator/i.test(r)) out.push({ src: '/img/roles/partner-coordinator.png', label: 'Waze Partners Coordinator' });
  if (/Global[^·]*Champ/i.test(r))     out.push({ src: '/img/roles/global-champ.png', label: 'Global Champ' });
  if (/Local Champ/i.test(r))          out.push({ src: '/img/roles/local-champ.png', label: 'Local Champ' });
  if (/Country Manager/i.test(r))      out.push({ src: '/img/roles/country-manager.png', label: 'Country Manager' });
  const lvl = r.match(/Level\s*([1-6])\s*Map Editor/i);
  if (lvl)                             out.push({ src: `/img/editors/badge-l${lvl[1]}.png`, label: `Level ${lvl[1]} Map Editor` });
  else if (/Map Editor/i.test(r))      out.push({ src: '/img/editors/editors.png', label: 'Map Editor' });
  return out;
}

const revealed = ref(false);
onMounted(() => { revealed.value = true; });
</script>

<template>
  <div class="champs-grid">
    <div v-for="c in champs" :key="c.pseudo" class="champ-card">
      <div class="champ-head">
        <div class="champ-id">
          <span class="champ-pseudo">{{ c.pseudo }}</span>
          <span v-if="c.title" class="champ-title">{{ c.title }}</span>
        </div>
        <div v-if="roleIcons(c).length" class="champ-icons" aria-label="Fonctions">
          <img
            v-for="ic in roleIcons(c)"
            :key="ic.label"
            class="champ-icon"
            :src="ic.src"
            :alt="ic.label"
            :title="ic.label"
            width="30"
            height="30"
            loading="lazy"
          />
        </div>
      </div>
      <p v-if="c.roles" class="champ-roles">{{ c.roles }}</p>
      <p v-if="c.langs" class="champ-langs">
        <span v-for="l in c.langs" :key="l" class="champ-lang">{{ l }}</span>
      </p>
      <template v-if="c.email">
        <a
          v-if="revealed"
          class="champ-mail"
          :href="`mailto:${c.email}@${domain}`"
          title="Écrire un e-mail"
        >{{ c.email }}@{{ domain }}</a>
        <span
          v-else
          class="champ-mail"
          aria-label="Adresse e-mail (activez JavaScript pour l'afficher)"
        >{{ c.email }}@…</span>
      </template>
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
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.6rem;
}

.champ-id {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
}

.champ-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  flex-shrink: 0;
  max-width: 132px;
  justify-content: flex-end;
}

.champ-icon {
  width: 30px;
  height: 30px;
  display: block;
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
