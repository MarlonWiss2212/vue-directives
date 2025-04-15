import type { Directive, DirectiveBinding } from 'vue';

type SwitchState = {
  value: any
  found: boolean
}

const switchContext = new WeakMap<Element, SwitchState>()

function getParentAndSwitchValue(el: HTMLElement) {
  const parent = el.parentElement
  if (!parent) {
    el.style.display = 'none'
    return
  }
  const switchValue = switchContext.get(parent)
  return { parent, switchValue }
}

export const vSwitch: Directive<HTMLElement> = {
  created(el, binding) {
    switchContext.set(el, { value: binding.value, found: false })
  },
  updated(el, binding) {
    const prev = switchContext.get(el) ?? { found: false }
    switchContext.set(el, { value: binding.value, found: prev.found })
  }
}

export const vCase: Directive<HTMLElement> = {
  beforeMount(el, binding) {
    const data = getParentAndSwitchValue(el)
    if (!data || !data.switchValue) return

    if (binding.value === data.switchValue.value) {
      el.style.display = ''
      data.switchValue.found = true
    } else {
      el.style.display = 'none'
    }
  },
  updated(el, binding) {
    const data = getParentAndSwitchValue(el)
    if (!data || !data.switchValue) return

    if (binding.value === data.switchValue.value) {
      el.style.display = ''
      data.switchValue.found = true
    } else {
      el.style.display = 'none'
    }
  }
}

export const vDefault: Directive<HTMLElement> = {
  beforeMount(el) {
    const data = getParentAndSwitchValue(el)
    if (!data || !data.switchValue) return

    el.style.display = data.switchValue.found ? 'none' : ''
  },
  updated(el) {
    const data = getParentAndSwitchValue(el)
    if (!data || !data.switchValue) return

    el.style.display = data.switchValue.found ? 'none' : ''
  }
}
