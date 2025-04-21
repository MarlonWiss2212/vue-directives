# Monorepo – MarlonWiss Vue & Nuxt Directives

This monorepo contains two related but different packages:

- **`@marlonwiss/vue-directives`**: A standalone set of Vue 3 custom directives you can use in any Vue application.
- **`@marlonwiss/nuxt-directives`**: A Nuxt 3 module that automatically installs and configures `@marlonwiss/vue-directives` for you.

It is managed using [Turborepo](https://turbo.build/repo) for efficient workflows, and [Changesets](https://github.com/changesets/changesets) for versioning and changelog management.

<details>
<summary><strong>Project Structure</strong></summary>

```
/
├── .changeset/        # Changesets configuration
├── .turbo/            # Turborepo cache
├─ packages/
│  └── playground/     # Nuxt Playground
│      ├── .nuxt/
│      │   └── ...
│      ├── .node_modules/
|      |   └── ...
│      ├── app.vue
│      ├── nuxt.config.ts      
│      ├── CHANGELOG.md
│      ├── package.json
│      └── tsconfig.json
├── node_modules/      # Root dependencies
├── packages/
│   ├── nuxt-directives/
│   │   ├── src/
│   │   │   └── runtime/
│   │   │       │── types/
|   |   |       │   └── ...
│   │   │       └── ...
│   │   ├── dist/      # Built files
│   │   ├── CHANGELOG.md
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── vue-directives/
│       ├── src/
│       │   ├── directives/
│       │   │   └── ...
│       │   ├── plugins/
│       │   │   └── ...
│       │   └── utils/
│       │       └── ...
│       ├── dist/      # Built files
│       ├── CHANGELOG.md
│       ├── package.json
│       └── tsconfig.json
└── package.json       # Root package
```

</details>

<details>
<summary><strong>Packages</strong></summary>

### [`@marlonwiss/vue-directives`](https://github.com/MarlonWiss2212/vue-directives/blob/main/packages/vue-directives/Readme.md)

This package provides a collection of Vue 3 custom directives

**Changelog**: [View CHANGELOG.md](https://github.com/MarlonWiss2212/vue-directives/blob/main/packages/vue-directives/CHANGELOG.md)

**Directives**: [View Directives.md](https://github.com/MarlonWiss2212/vue-directives/blob/main/Directives.md)

---

### [`@marlonwiss/nuxt-directives`](https://github.com/MarlonWiss2212/vue-directives/blob/main/packages/nuxt-directives/Readme.md)

This package wraps the `vue-directives` into a Nuxt 3 module:

- Registers the Vue directives automatically in your Nuxt application.
- Offers type definitions and runtime auto-imports for better developer experience.

**Changelog**: [View CHANGELOG.md](https://github.com/MarlonWiss2212/vue-directives/blob/main/packages/nuxt-directives/CHANGELOG.md)

**Directives**: [View Directives.md](https://github.com/MarlonWiss2212/vue-directives/blob/main/Directives.md)
</details>

<details>
<summary><strong>Development</strong></summary>

This project uses **Turborepo** to orchestrate tasks across packages.

When creating new **feature** create a new feature/* branch. When ready to merge create a pull request to **stage** for that feature.

Common commands:
```bash
pnpm install             # Install dependencies
pnpm run dev:prepare     # Prepare Nuxt
pnpm run build           # Build all packages
pnpm run dev             # Start Playground (Run install, dev:prepare and build before)

# When creating pull request for stage into main run
pnpm run add-release     # Create a new changeset
pnpm run version-release # Versioning of the changesets
```
</details>

---

## 📚 Usage / Directives Documentation

See the full list of available directives [here](https://github.com/MarlonWiss2212/vue-directives/blob/main/Directives.md).

---

## License
[MIT License](https://github.com/MarlonWiss2212/vue-directives/blob/main/LICENSE)
