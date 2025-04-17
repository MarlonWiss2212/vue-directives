import type { Directive } from 'vue';
import { nextTick } from "vue";

export const vUnFocus: Directive = {
  mounted: (el: HTMLElement) => nextTick(() => el.blur()),
}