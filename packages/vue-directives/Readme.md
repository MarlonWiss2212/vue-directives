# @marlonwiss/vue-directives

A lightweight Vue 3 plugin providing a collection of custom directives to enhance your development experience.

Designed to work seamlessly in standard Vue 3 applications.

---

## Installation

Install the package using your favorite package manager:

### Using **pnpm**
```bash
pnpm add @marlonwiss/vue-directives
```

### Using **yarn**
```bash
yarn add @marlonwiss/vue-directives
```

### Using **npm**
```bash
npm install @marlonwiss/vue-directives
```

---

## Setup

Import and install the plugin in your Vue app:

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { marlonWissVueDirectivesPlugin } from '@marlonwiss/vue-directives'

const app = createApp(App)

app.use(marlonWissVueDirectivesPlugin)

app.mount('#app')
```

> **Note:** Only use this method for **Vue** projects. For **Nuxt 3**, use [`@marlonwiss/nuxt-directives`](https://github.com/your-repo/nuxt-directives) instead.

---

## 📚 Usage / Directives Documentation

See the full list of available directives [here](./../../Directives.md).

---

## 📚 Changelog

See the full changelog [here](./Changelog.md).

---

## 📚 Monorepo Documentation

See the documentation of the monorepo [here](./../../Readme.md).

---

## License

MIT License.

