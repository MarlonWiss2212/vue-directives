import { App } from "vue";
import { vFocus } from "./directives/focus";

export default {
  install(app: App) {
    app.directive('focus', vFocus)
  }
}