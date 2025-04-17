import { vCase, vDefault, vFocus, vSwitch } from "@marlonwiss/vue-directives";

declare module 'vue' {
  export interface GlobalDirectives {
    vFocus: typeof vFocus;
    vSwitch: typeof vSwitch
    vCase: typeof vCase
    vDefault: typeof vDefault
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalDirectives {
    vFocus: typeof vFocus;
    vSwitch: typeof vSwitch
    vCase: typeof vCase
    vDefault: typeof vDefault
  }
}


export { }