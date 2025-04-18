import type { App } from "vue";
import { vFocus, vCase, vDefault, vSwitch, vCopy } from "./../directives/main";

export function installDirectives(app: App) {
  app.directive('focus', vFocus)
  app.directive('copy', vCopy)
  app.directive('switch', vSwitch)
  app.directive('case', vCase)
  app.directive('default', vDefault)
}