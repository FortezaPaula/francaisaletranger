import bodyParser from 'body-parser'

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
  plugins: ['plugins/vuelidate'],
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
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
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
        keys: []
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
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

  serverMiddleware: [
    bodyParser.json(),
    {
      path: '/api/health',
      handler: 'api/health'
    }
  ]
}
