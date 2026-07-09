import DefaultTheme from 'vitepress/theme';
import type { EnhanceAppContext } from 'vitepress';
import { h } from 'vue';
import HomeCards from './HomeCards.vue';
import SiteFooter from './SiteFooter.vue';
import ChampsGrid from './ChampsGrid.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('ChampsGrid', ChampsGrid);
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-after': () => h(HomeCards),
      'layout-bottom': () => h(SiteFooter),
    });
  },
};
