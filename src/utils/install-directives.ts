import type { App } from "vue";
import { vFocus, vCase, vDefault, vSwitch } from "~/src";

export function installDirectives(app: App) {
  app.directive('focus', vFocus)
  app.directive('switch', vSwitch)
  app.directive('case', vCase)
  app.directive('default', vDefault)
}