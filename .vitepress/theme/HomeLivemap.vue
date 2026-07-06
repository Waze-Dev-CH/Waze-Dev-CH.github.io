<template>
  <div class="home-livemap">
    <a
      class="hl-card"
      href="https://www.waze.com/live-map/directions?rp_subscription=vignette-switzerland"
      target="_blank"
      rel="noopener"
    >
      <span class="hl-icon" aria-hidden="true">🗺️</span>
      <span class="hl-body">
        <strong class="hl-title">Live Map — vignette activée</strong>
        <span class="hl-sub">Testez un itinéraire avec la vignette suisse prise en compte.</span>
      </span>
      <span class="hl-arrow" aria-hidden="true">→</span>
    </a>
  </div>
</template>

<style scoped>
.home-livemap {
  max-width: 848px;
  margin: 2.5rem auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: center;
}

.hl-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 560px;
  padding: 1rem 1.25rem;
  border-radius: 0.875rem;
  border: 1.5px solid var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  text-decoration: none;
  color: inherit;
  transition: background-color 0.18s, box-shadow 0.18s;
}

.hl-card:hover {
  box-shadow: 0 0 0 3px var(--vp-c-brand-soft);
}

.hl-icon {
  font-size: 1.75rem;
  flex-shrink: 0;
  line-height: 1;
}

.hl-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.2em;
}

.hl-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
}

.hl-sub {
  font-size: 0.825rem;
  color: var(--vp-c-text-2);
}

.hl-arrow {
  font-size: 1.1rem;
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
  opacity: 0.75;
  transition: opacity 0.18s, transform 0.18s;
}

.hl-card:hover .hl-arrow {
  opacity: 1;
  transform: translateX(3px);
}
</style>
