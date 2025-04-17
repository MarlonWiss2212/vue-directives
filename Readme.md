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
├── node_modules/      # Root dependencies
├── packages/
│   ├── nuxt-directives/
│   │   ├── src/
│   │   │   └── runtime/
│   │   │       │── types/
|   |   |       │   └── ...
│   │   │       ├── ...
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

### [`@marlonwiss/vue-directives`](packages/vue-directives/README.md)

This package provides a collection of Vue 3 custom directives

**Changelog**: [View CHANGELOG.md](packages/vue-directives/CHANGELOG.md)

**Directives**: [View Directives.md](./Directives.md)

---

### [`@marlonwiss/nuxt-directives`](packages/nuxt-directives/README.md)

This package wraps the `vue-directives` into a Nuxt 3 module:

- Registers the Vue directives automatically in your Nuxt application.
- Offers type definitions and runtime auto-imports for better developer experience.

**Changelog**: [View CHANGELOG.md](packages/nuxt-directives/CHANGELOG.md)

**Directives**: [View Directives.md](./Directives.md)
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

---

## 📚 Usage / Directives Documentation

See the full list of available directives [here](Directives.md).

---

## License

MIT License.

