import { defineNuxtPlugin } from '#app'
import { installDirectives } from "~/src/utils/install-directives";

defineNuxtPlugin((nuxtApp) => {
  installDirectives(nuxtApp.vueApp);
})