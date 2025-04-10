import { App } from 'vue'
import { vFocus } from './focus'

export function installDirectives(app: App) {
  app.directive('focus', vFocus)
}
export * from './focus'
