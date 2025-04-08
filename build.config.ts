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

  // Generates .d.ts declaration file
  declaration: true,
})
