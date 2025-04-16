import { defineNuxtPlugin } from '#app'
import { installDirectives } from "@marlonwiss/vue-directives";

defineNuxtPlugin((nuxtApp) => {
  installDirectives(nuxtApp.vueApp)
})