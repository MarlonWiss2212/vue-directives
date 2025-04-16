import type { App, Plugin } from "vue";
import { installDirectives } from "../utils/install-directives";

/**
 * Only use the installation function for Vue. For Nuxt please use the module of @marlon-wiss/nuxt-directives
 * @param app - Vue App
 */
export const marlonWissVueDirectivesPlugin: Plugin =  {
  install: (app) => {
    installDirectives(app)
  }
}