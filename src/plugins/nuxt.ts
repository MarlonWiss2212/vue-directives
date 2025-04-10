import { defineNuxtModule } from '@nuxt/kit';
import { installDirectives } from '../directives/main';

// TODO: fix that
declare global {
  interface NuxtApp {
    vueApp: any
  }
  function defineNuxtPlugin(callback: (nuxtApp: NuxtApp) => void): void
}

export default defineNuxtModule({
  meta: {
    name: 'vue-directives',
    configKey: 'vueDirectives',
  },
  setup() {
    defineNuxtPlugin((nuxtApp: NuxtApp) => {
      installDirectives(nuxtApp.vueApp); // This adds your directives to the app
    });
  }
});
