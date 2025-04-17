# Monorepo – Vue & Nuxt Directives

This monorepo contains custom Vue 3 directives and a Nuxt 3 module that integrates them.  
It is managed using [Turborepo](https://turbo.build/repo) for efficient workflows, and [Changesets](https://github.com/changesets/changesets) for versioning and changelog management.

<details>
<summary><strong>Project Structure</strong></summary>

```
/
├── .changeset/        # Changesets configuration
├── .turbo/            # Turborepo cache
├── node_modules/      # Root dependencies
├── packages/
│   ├── nuxt-directives/
│   │   ├── src/
│   │   │   └── runtime/
│   │   │       │── types/
|   |   |       │   └── ...
│   │   │       ├── ...
│   │   ├── dist/     # Built files
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
│       ├── dist/     # Built files
│       ├── CHANGELOG.md
│       ├── package.json
│       └── tsconfig.json
└── package.json       # Root package
```

</details>

<details>
<summary><strong>Packages</strong></summary>

### [`vue-directives`](packages/vue-directives/CHANGELOG.md)

This package provides a collection of Vue 3 custom directives:

- **`vFocus`** – Automatically focus an element when mounted.
- **`vUnFocus`** – Automatically remove focus from an element.
- **`vSwitch`**, **`vCase`**, and **`vDefault`** – Implement switch-case-like template logic in Vue.

**Changelog**: [View CHANGELOG.md](packages/vue-directives/CHANGELOG.md)

---

### [`nuxt-directives`](packages/nuxt-directives/CHANGELOG.md)

This package wraps the `vue-directives` into a Nuxt 3 module, making the directives available automatically across your Nuxt app.

- Registers the Vue directives as a Nuxt module.
- Provides TypeScript definitions for better DX.

**Changelog**: [View CHANGELOG.md](packages/nuxt-directives/CHANGELOG.md)

</details>

<details>
<summary><strong>Development</strong></summary>

This project uses **Turborepo** to orchestrate tasks across packages.

Common commands:

```bash
pnpm install         # Install dependencies
pnpm dev:prepare     # Prepare Nuxt
pnpm build           # Build all packages
pnpm changeset       # Create a new changeset for versioning
```

</details>

MIT License.