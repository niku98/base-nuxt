import { Context } from '@nuxt/types'
import { Inject } from '@nuxt/types/app'
import { routes, localization } from '~/constants'

declare module 'vue/types/vue' {
  // this.$myInjectedFunction inside Vue components
  interface Vue {
    $routes: typeof routes
    $localization: typeof localization
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $routes: typeof routes
    $localization: typeof localization
  }
  // nuxtContext.$myInjectedFunction
  interface Context {
    $routes: typeof routes
    $localization: typeof localization
  }
}

declare module 'vuex/types/index' {
  // this.$myInjectedFunction inside Vuex stores
  interface Store<S> {
    $routes: typeof routes
    $localization: typeof localization
  }
}

export default function ({ app }: Context, inject: Inject) {
  inject('routes', routes)
  inject('localization', localization)
}
