import type { Directive, DirectiveBinding } from 'vue';

const switchContext = new WeakMap<ParentNode, DirectiveBinding & { found: boolean }>()

function getParentAndSwitchValue(el: HTMLElement) {
  const parent = el.parentNode
  if(!parent) {
    el.style.display = 'none'
    return
  }
  const switchValue = switchContext.get(parent)

  return {
    parent,
    switchValue
  }
}

export const vSwitch: Directive<HTMLElement> = {
  created(el, binding) {
    switchContext.set(el, { ...binding.value, found: false })
  },
  updated(el, binding) {
    const switchValue = switchContext.get(el)
    switchContext.set(el, { ...switchValue, ...binding.value})
  }
}

export const vCase: Directive<HTMLElement> = {
  beforeMount(el, binding) {
    const data = getParentAndSwitchValue(el)
    if(!data) return

    if (binding.value !== data.switchValue) {
      el.style.display = 'none'
    }

    if (data.switchValue && binding.value === data.switchValue && el.parentNode) {
      el.style.display = ''
      switchContext.set(el.parentNode, { ...data.switchValue, found: true })
    }
  },
  updated(el, binding) {
    const data = getParentAndSwitchValue(el)
    if(!data) return

    if (data.switchValue && binding.value === data.switchValue && el.parentNode) {
      el.style.display = ''
      switchContext.set(el.parentNode, { ...data.switchValue, found: true })
    } else {
      el.style.display = 'none'
    }
  }
}

export const vDefault: Directive<HTMLElement> = {
  beforeMount(el) {
    const data = getParentAndSwitchValue(el)
    if(!data) return

    if (data.switchValue) {
      el.style.display = data.switchValue.found ? 'none' : ''
    }
  },
  updated(el) {
    const data = getParentAndSwitchValue(el)
    if(!data) return

    if (data.switchValue) {
      el.style.display = data.switchValue.found ? 'none' : ''
    }
  }
}