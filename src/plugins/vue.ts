import { App } from "vue";
import { installDirectives } from "../directives/main";

export default {
  /**
   * Only use the installation function for Vue. For Nuxt please use the module
   * @param app - Vue App
   */
  install(app: App) {
    installDirectives(app)
  }
}