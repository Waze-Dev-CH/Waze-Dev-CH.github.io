import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import HomeCards from './HomeCards.vue';
import SiteFooter from './SiteFooter.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-after': () => h(HomeCards),
      'layout-bottom': () => h(SiteFooter),
    });
  },
};
