import type { Directive } from 'vue';
import { nextTick } from "vue";

export const vBlur: Directive = {
  mounted: (el: HTMLElement) => nextTick(() => el.blur()),
}