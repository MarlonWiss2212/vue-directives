import { vCase, vDefault, vFocus, vSwitch } from "@marlonwiss/vue-directives";

declare module 'vue' {
  interface GlobalDirectives {
    vFocus: typeof vFocus;
    vSwitch: typeof vSwitch
    vCase: typeof vCase
    vDefault: typeof vDefault
  }
}

export { }