import { Directive } from "vue";

async function copyListener(value: string) {
  await navigator.clipboard.writeText(value)
}

export const vCopy: Directive<HTMLElement> = {
  mounted(el) {
    el.addEventListener('click', () => copyListener(el.innerText));

  },
  unmounted(el) {
    el.removeEventListener('click',() => copyListener(el.innerText));
  }
}