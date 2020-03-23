import bodyParser from 'body-parser'

require('dotenv').config()

export default {
  mode: 'universal',

  modern: true,

  /*
   ** Headers of the page
   */
  head: {
    title: 'Solidarité des Français de l’étranger',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/styles/reboot.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['plugins/vuelidate', {
    src: 'plugins/vue-bootstrap4-table',
    ssr: false
  }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    [
      'nuxt-i18n',
      {
        locales: ['fr', 'en'],
        strategy: 'prefix_and_default',
        defaultLocale: 'fr',
        vueI18n: {
          fallbackLocale: 'fr',
          messages: {
            fr: require('./locales/fr.json'),
            en: require('./locales/en.json')
          }
        }
      }
    ],
    [
      'nuxt-env',
      {
        keys: ['VUE_APP_API_URL']
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    loaders: {
      scss: {
        prependData: `
          @import "styles/variables.scss";
        `
      }
    },
    extend (config, ctx) {
    }
  },
  router: {
    linkExactActiveClass: 'active'
  },
  serverMiddleware: [
    bodyParser.json(),
    {
      path: '/api/health',
      handler: 'api/health'
    },
    {
      path: '/api/need-help',
      handler: 'api/need-help'
    },
    {
      path: '/api/can-help',
      handler: 'api/can-help'
    },
    {
      path: '/api/need-help',
      handler: 'api/need-help'
    },
    {
      path: '/api/login',
      handler: 'api/login'
    },
    {
      path: '/api/matching',
      handler: 'api/matching'
    }
  ],
  /* PWA Config */
  pwa: {
    meta: {
      name: 'Solidarité des Français de l’étranger',
      theme_color: '#88cedb',
      lang: 'fr'
    },
    manifest: {
      name: 'Solidarité des Français de l’étranger',
      short_name: 'Solidarité FDE',
      lang: 'fr',
      start_url: '/',
      display: 'fullscreen',
      orientation: 'portrait',
      background_color: '#FFF',
      theme_color: '#88cedb'
    }
  }
}
