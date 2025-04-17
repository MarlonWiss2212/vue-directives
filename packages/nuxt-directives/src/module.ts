import { defineNuxtModule, addPlugin, createResolver, addTypeTemplate } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'marlonwiss-nuxt-directives',
    configKey: 'marlonwissNuxtDirectives',
  },
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)
    addPlugin(resolver.resolve('./runtime/nuxt'))
    addTypeTemplate({
      filename: 'types/directives.d.ts',
      src: resolver.resolve('./runtime/types/directives.d.ts'),
    })
    nuxt.options.typescript.tsConfig ||= {}
    nuxt.options.typescript.tsConfig.include ||= []
    nuxt.options.typescript.tsConfig.include.push('./types/**/*.d.ts')
  },
})