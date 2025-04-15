import { defineNuxtPlugin } from '#app'
import { vFocus } from "./directives/focus";
import { vCase, vDefault, vSwitch } from "./directives/switch";

defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('focus', vFocus)
  nuxtApp.vueApp.directive('switch', vSwitch)
  nuxtApp.vueApp.directive('case', vCase)
  nuxtApp.vueApp.directive('default', vDefault)
})