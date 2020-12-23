import en from './languages/en'
import vi from './languages/vi'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'base-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: {
    color: 'blue',
    height: '5px',
  },

  env: {
    apiUrl: process.env.API_URL || 'https://dummyapi.io/data/api/',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/constants.ts', '~/plugins/axios.ts'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'nuxt-i18n',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // Router
  router: {
    // middleware: ['auth'],
  },

  // Auth module configuration
  auth: {
    strategies: {
      facebook: {
        endpoints: {
          userInfo:
            'https://graph.facebook.com/v6.0/me?fields=id,name,picture{url}',
        },
        clientId: '154653769340990',
        scope: ['public_profile', 'email'],
      },
    },
  },

  // Or with global options
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'vi',
    vueI18n: {
      fallbackLocale: 'vi',
      messages: {
        en,
        vi,
      },
    },
  },
}
