# Directives

---

### `vFocus`
Automatically focuses the bound element when it is mounted.

**Example:**
```vue
<template>
  <input v-focus />
</template>
```

### `vUnFocus`
Removes focus from an element programmatically.

**Example:**
```vue
<template>
  <input v-un-focus />
</template>
```

### `vCopy`
Copies the innerText of the element when clicking on it after its rendered.

**Example:**
```vue
<template>
  <input v-copy />
</template>
```

### `vSwitch`, `vCase`, `vDefault`
Implements a clean, declarative switch-case-default control flow inside templates.

**Example:**
```vue
<template>
  <div v-switch="status">
    <div v-case="'loading'">Loading...</div>
    <div v-case="'success'">Success!</div>
    <div v-default>Unknown status</div>
  </div>
</template>

<script setup>
const status = 'loading'
</script>
```

---

## License

MIT License.

