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
<summary><strong>Development / Contribute</strong></summary>

### Contribute to this project by creating a Fork of this Repository
First of you will create a fork of this Repo. After that you might either want to implement a new **feature**, **bugfix** or a new **hotfix**
- for new features please create a feature/** branch.
  - After implementation create a PR into dev branch for your new feature
- for new bugfixes please create a fix/** branch. 
  - After implementation create a PR into dev branch for your bugfix 
- for hotfixes please use the hotfix branch. 
  - After implementation create a PR into main branch for your new hotfix


### Git Flow:
<img src="./public/gitflow.svg">

### Common commands:
```bash
pnpm install             # Install dependencies
pnpm run dev:prepare     # Prepare Nuxt
pnpm run build           # Build all packages
pnpm run dev             # Start Playground (Run install, dev:prepare and build before)

pnpm run taze:minor      # See minor available package updates
pnpm run taze:major      # See major available package updates

# When making changes add it to changeset using following command for the changelog and versioning
pnpm run add-changes     # Create a new changeset

# for a new release run this command locally. Never in a feature, fix or the dev branch
pnpm run version-changes # Versioning of the changesets
```
</details>

---

## 📚 Usage / Directives Documentation

See the full list of available directives [here](https://github.com/MarlonWiss2212/vue-directives/blob/main/Directives.md).

---

## License
[MIT License](https://github.com/MarlonWiss2212/vue-directives/blob/main/LICENSE)
