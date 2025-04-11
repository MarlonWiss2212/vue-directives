import type { App } from "vue";
import { vFocus } from "../directives/focus";

export function installDirectives(app: App) {
  app.directive('focus', vFocus)
}