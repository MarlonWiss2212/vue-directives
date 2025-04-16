import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index.ts',
  ],
  rollup: {
    emitCJS: true,
  },
  clean: true,
  sourcemap: false,
  declaration: true,
  failOnWarn: false,
})
