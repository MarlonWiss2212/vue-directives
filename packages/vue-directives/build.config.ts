import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index.ts',
  ],
  rollup: {
    emitCJS: true,
  },
  outDir: 'dist',
  clean: true,
  sourcemap: false,
  declaration: true,
})
