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

    <!-- Live map CTA -->
    <a
      class="he-livemap"
      href="https://www.waze.com/live-map/directions?rp_subscription=vignette-switzerland"
      target="_blank"
      rel="noopener"
    >
      <span class="he-livemap-icon" aria-hidden="true">🗺️</span>
      <span class="he-livemap-body">
        <strong class="he-livemap-title">Live Map — vignette activée</strong>
        <span class="he-livemap-sub">Testez un itinéraire avec la vignette suisse prise en compte.</span>
      </span>
      <span class="he-livemap-arrow" aria-hidden="true">→</span>
    </a>

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

/* ── Live map CTA ──────────────────────────────────────────────────── */
.he-livemap {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 560px;
  padding: 1rem 1.25rem;
  border-radius: 0.875rem;
  border: 1.5px solid #05C8F0;
  background: rgba(5, 200, 240, 0.06);
  text-decoration: none;
  color: inherit;
  transition: background-color 0.18s, box-shadow 0.18s;
}

.he-livemap:hover {
  background: rgba(5, 200, 240, 0.12);
  box-shadow: 0 0 0 3px rgba(5, 200, 240, 0.18);
}

.he-livemap-icon {
  font-size: 1.75rem;
  flex-shrink: 0;
  line-height: 1;
}

.he-livemap-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.2em;
}

.he-livemap-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #05C8F0;
}

.he-livemap-sub {
  font-size: 0.825rem;
  color: var(--vp-c-text-2);
}

.he-livemap-arrow {
  font-size: 1.1rem;
  color: #05C8F0;
  flex-shrink: 0;
  opacity: 0.75;
  transition: opacity 0.18s, transform 0.18s;
}

.he-livemap:hover .he-livemap-arrow {
  opacity: 1;
  transform: translateX(3px);
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
