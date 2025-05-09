# Directives

---

### `v-focus`
Automatically focuses the bound element when it is mounted.

**Example:**
```vue
<template>
  <input v-focus />
</template>
```

### `v-blur`
Removes focus from an element programmatically.

**Example:**
```vue
<template>
  <input v-blur />
</template>
```

### `v-copy`
Copies the innerText of the element when clicking on it after its rendered.

**Example:**
```vue
<template>
  <input v-copy />
</template>
```

### `v-switch`, `v-case`, `v-default`
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
[MIT License](https://github.com/MarlonWiss2212/vue-directives/blob/main/LICENSE)