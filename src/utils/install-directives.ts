import type { App } from "vue";
import { vFocus } from "../directives/focus";
import { vCase, vDefault, vSwitch } from "../directives/switch";

export function installDirectives(app: App) {
  app.directive('focus', vFocus)
  app.directive('switch', vSwitch)
  app.directive('case', vCase)
  app.directive('default', vDefault)
}