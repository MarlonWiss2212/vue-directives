import type { App } from "vue";
import { installDirectives } from "../utils/install-directives";

/**
 * Only use the installation function for Vue. For Nuxt please use the module
 * @param app - Vue App
 */
export const installVueDirectives = (app: App) => {
  installDirectives(app)
}