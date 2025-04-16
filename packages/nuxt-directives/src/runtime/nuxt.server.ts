import { defineNuxtPlugin } from '#app'
defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('focus', {})
  nuxtApp.vueApp.directive('switch', {})
  nuxtApp.vueApp.directive('case', {})
  nuxtApp.vueApp.directive('default', {})
})