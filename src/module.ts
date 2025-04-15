import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'marlonwiss-vue-directives',
    configKey: 'marlonwissVueDirectives',
  },
  defaults: {},
  setup() {
    const resolver = createResolver(import.meta.url)
    addPlugin(resolver.resolve('./runtime/nuxt'))
  },
})