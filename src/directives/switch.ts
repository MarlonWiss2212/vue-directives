import type { Directive } from 'vue';

const switchContext = new WeakMap()

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
  beforeMount(el, binding) {
    switchContext.set(el, binding.value)
  },
  updated(el, binding) {
    switchContext.set(el, binding.value)
  }
}

export const vCase: Directive<HTMLElement> = {
  beforeMount(el, binding) {
    const data = getParentAndSwitchValue(el)
    if(!data) return

    if (binding.value !== data.switchValue) {
      el.style.display = 'none'
    }
  },
  updated(el, binding) {
    const data = getParentAndSwitchValue(el)
    if(!data) return

    if (binding.value === data.switchValue) {
      el.style.display = ''
    } else {
      el.style.display = 'none'
    }
  }
}

export const vDefault: Directive<HTMLElement> = {
  beforeMount(el) {
    const data = getParentAndSwitchValue(el)
    if(!data) return

    // Check if any sibling case matched
    const hasMatch = Array.from(data.parent.children).some(child => {
      const caseValue = child.getAttribute('v-case');
      return caseValue === String(data.switchValue); // Ensure it's comparing the values correctly
    });

    if (hasMatch) {
      el.style.display = 'none';
    }
  },
  updated(el) {
    const data = getParentAndSwitchValue(el)
    if(!data) return

    const hasMatch = Array.from(data.parent.children).some(child => {
      const caseValue = child.getAttribute('v-case');
      return caseValue === String(data.switchValue); // Ensure it's comparing the values correctly
    });

    if (!hasMatch) {
      el.style.display = ''
    } else {
      el.style.display = 'none'
    }
  }
}