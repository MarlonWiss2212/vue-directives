import { defineNuxtPlugin } from '#app'
import { installVueDirectives } from "@marlonwiss/vue-directives";

defineNuxtPlugin((nuxtApp) => {
  installVueDirectives(nuxtApp.vueApp)
})