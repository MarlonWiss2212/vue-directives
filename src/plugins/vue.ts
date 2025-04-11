import type { App } from "vue";
import { installDirectives } from "../directives/main";

/**
 * Only use the installation function for Vue. For Nuxt please use the module
 * @param app - Vue App
 */
export const installMarlonWissVueDirectives = (app: App) => {
  installDirectives(app)
}