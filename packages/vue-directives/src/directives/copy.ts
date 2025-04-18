import { Directive } from "vue";

async function copyListener(value: string) {
  await navigator.clipboard.writeText(value)
}

export const vCopy: Directive<HTMLElement> = {
  mounted(el, binding) {
    el.addEventListener('click', () => copyListener(el.innerText));

  },
  unmounted(el, binding) {
    el.removeEventListener('click',() => copyListener(el.innerText));
  }
}