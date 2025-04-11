import type { Directive, DirectiveBinding } from 'vue';

function switchLogic(parent: HTMLElement, binding: DirectiveBinding) {
  const children: HTMLElement[] = Array.from(parent.children) as HTMLElement[]
  let foundMatching = false

  for (const child of children) {
    if (foundMatching) {
      return
    }

    const attribute = child.getAttribute('v-case')
    if (!attribute) {
      child.style.display = 'none'
    } else if (attribute === String(binding.value)) {
      child.style.display = '';
      foundMatching = true
      return
    } else {
      child.style.display = 'none'
      return
    }

    const defaultElement = child.getAttribute('v-default');

    if (defaultElement) {
      child.style.display = '';
    }
  }
}

export const vSwitch: Directive<HTMLElement> = {
  beforeMount(el, binding) {
    switchLogic(el, binding)
  },
  updated(el, binding) {
    switchLogic(el, binding)
  }
}

export const vCase: Directive<HTMLElement> = {}

export const vDefault: Directive<HTMLElement> = {}