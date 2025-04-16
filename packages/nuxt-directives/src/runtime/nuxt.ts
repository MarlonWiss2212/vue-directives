import { defineNuxtPlugin } from '#app'
import { installVueDirectives } from "@marlonwiss/vue-directives";

defineNuxtPlugin((nuxtApp) => {
  if(import.meta.server) {
    nuxtApp.vueApp.directive('focus', {})
    nuxtApp.vueApp.directive('switch', {})
    nuxtApp.vueApp.directive('case', {})
    nuxtApp.vueApp.directive('default', {})
  } else {
    installVueDirectives(nuxtApp.vueApp)
  }
})