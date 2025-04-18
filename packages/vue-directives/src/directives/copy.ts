import { Directive } from "vue";

async function copyListener(value: string) {
  const res = await navigator.clipboard.writeText(value)
}

export const vCopy: Directive<HTMLElement, string> = {
  mounted(el) {
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => copyListener(el.innerText));

  },
  unmounted(el) {
    el.removeEventListener('click',() => copyListener(el.innerText));
  }
}