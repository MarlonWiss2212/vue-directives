import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'marlonwiss-nuxt-directives',
    configKey: 'marlonwissNuxtDirectives',
  },
  defaults: {},
  setup() {
    const resolver = createResolver(import.meta.url)
    addPlugin(resolver.resolve('./runtime/nuxt'))
  },
})