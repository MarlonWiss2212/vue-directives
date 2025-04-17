import { defineNuxtPlugin } from '#app'
import { installDirectives } from "@marlonwiss/vue-directives";

export default defineNuxtPlugin((nuxtApp) => {
  installDirectives(nuxtApp.vueApp)
})