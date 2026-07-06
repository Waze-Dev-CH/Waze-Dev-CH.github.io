import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import HomeExtras from './HomeExtras.vue';
import HomeCards from './HomeCards.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-after': () => h(HomeCards),
      'home-features-after': () => h(HomeExtras),
    });
  },
};
