import DefaultTheme from 'vitepress/theme';
import type { EnhanceAppContext } from 'vitepress';
import { h } from 'vue';
import HomeCards from './HomeCards.vue';
import SiteFooter from './SiteFooter.vue';
import CommunityStrip from './CommunityStrip.vue';
import ChampsGrid from './ChampsGrid.vue';
import WazerHome from './wazer/WazerHome.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('ChampsGrid', ChampsGrid);
    app.component('WazerHome', WazerHome);
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(CommunityStrip),
      'home-hero-after': () => h(HomeCards),
      'layout-bottom': () => h(SiteFooter),
    });
  },
};
