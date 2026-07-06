import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import HomeExtras from './HomeExtras.vue';
import HomeLivemap from './HomeLivemap.vue';
import './custom.css';

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-after': () => h(HomeLivemap),
      'home-features-after': () => h(HomeExtras),
    });
  },
};
