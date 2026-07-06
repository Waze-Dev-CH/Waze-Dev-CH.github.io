<template>
  <div class="home-extras">
    <!-- Download row -->
    <div class="he-download-row">
      <span class="he-download-label">Télécharger Waze</span>
      <a
        class="he-pill"
        href="https://play.google.com/store/apps/details?id=com.waze"
        target="_blank"
        rel="noopener"
      >Android</a>
      <a
        class="he-pill"
        href="https://apps.apple.com/app/id323229106"
        target="_blank"
        rel="noopener"
      >iOS</a>
    </div>

    <!-- Multilingual tagline strip -->
    <p class="he-tagline">
      Déjouons le trafic, ensemble
      &nbsp;·&nbsp; Gemeinsam dem Verkehr entfliehen
      &nbsp;·&nbsp; Superiamo il traffico, tutti assieme
      &nbsp;·&nbsp; Outsmarting traffic, together
    </p>
  </div>
</template>

<style scoped>
.home-extras {
  max-width: 848px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

/* ── Download row ──────────────────────────────────────────────────── */
.he-download-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.he-download-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  letter-spacing: 0.01em;
}

.he-pill {
  display: inline-block;
  padding: 0.4em 1.1em;
  border-radius: 999px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand-1);
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.18s, border-color 0.18s, color 0.18s;
}

.he-pill:hover {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

/* ── Multilingual tagline ──────────────────────────────────────────── */
.he-tagline {
  margin: 0;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
  text-align: center;
  line-height: 1.7;
}
</style>
