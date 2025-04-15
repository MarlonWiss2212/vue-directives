import { vFocus } from "./focus";
import { vCase, vDefault, vSwitch } from "./switch";

declare module '@vue/runtime-core' {
  interface GlobalDirectives {
    vFocus: typeof vFocus;
    vSwitch: typeof vSwitch
    vCase: typeof vCase
    vDefault: typeof vDefault
  }
}

export { }