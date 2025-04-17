import { defineNuxtModule, addPlugin, createResolver, addTypeTemplate } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'marlonwiss-nuxt-directives',
    configKey: 'marlonwissNuxtDirectives',
  },
  defaults: {},
  setup() {
    const resolver = createResolver(import.meta.url)
    addPlugin(resolver.resolve('./runtime/nuxt'))
    addTypeTemplate({
      filename: 'types/directives.d.ts',
      src: resolver.resolve('./runtime/types/nuxt.d.ts'),
    })
  },
})