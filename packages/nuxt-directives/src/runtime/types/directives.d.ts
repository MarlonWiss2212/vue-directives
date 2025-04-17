declare module "#build/directives" {
  import { vCase, vDefault, vFocus, vSwitch } from "@marlonwiss/vue-directives";
  export const directives: {
    vFocus: typeof vFocus;
    vSwitch: typeof vSwitch;
    vCase: typeof vCase;
    vDefault: typeof vDefault;
  }
}

declare module 'vue' {
  import { vCase, vDefault, vFocus, vSwitch } from "@marlonwiss/vue-directives";
  export interface GlobalDirectives {
    vFocus: typeof vFocus;
    vSwitch: typeof vSwitch
    vCase: typeof vCase
    vDefault: typeof vDefault
  }
}

declare module '@vue/runtime-core' {
  import { vCase, vDefault, vFocus, vSwitch } from "@marlonwiss/vue-directives";
  export interface GlobalDirectives {
    vFocus: typeof vFocus;
    vSwitch: typeof vSwitch
    vCase: typeof vCase
    vDefault: typeof vDefault
  }
}


export { }