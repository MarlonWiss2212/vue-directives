import { installDirectives } from "../utils/install-directives";
import { App } from "vue";

interface NuxtApp {
  vueApp: App
}
declare function defineNuxtPlugin(cb: (nuxtApp: NuxtApp) => void): any

/**
 * Nuxt Plugin
 */
export const vueDirectiveNuxtPlugin = defineNuxtPlugin((nuxtApp: NuxtApp) => {
  installDirectives(nuxtApp.vueApp);
});