import { defineNuxtPlugin } from '#app'
import { installDirectives } from "./utils/install-directives";

defineNuxtPlugin((nuxtApp) => {
  installDirectives(nuxtApp.vueApp);
})