import bodyParser from 'body-parser'
import cookieparser from 'cookie-parser'

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
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Solidarité des Français de l’étranger'
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'siteweb'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://www.solidarite-fde.fr'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://www.solidarite-fde.fr/picto.jpg'
      },
      {
        hid: 'og:local',
        name: 'og:local',
        content: 'fr'
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
    // '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    // '@nuxtjs/stylelint-module'
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
        locales: ['fr'],
        strategy: 'prefix_and_default',
        defaultLocale: 'fr',
        vueI18n: {
          fallbackLocale: 'fr',
          messages: {
            fr: require('./locales/fr.json')
          }
        }
      }
    ],
    [
      'nuxt-env',
      {
        keys: ['VUE_APP_API_URL', 'ALGOLIA_APP_ID', 'ALGOLIA_API_KEY']
      }
    ],
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
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
    cookieparser(),
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
    },
    {
      path: '/api/send-matching',
      handler: 'api/send-matching'
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
  },
  robots: {
    UserAgent: '*',
    Disallow: ['/admin', '/api', '/login'],
    Sitemap: 'https://www.solidarite-fde.fr/sitemap.xml'
  },
  sitemap: {
    exclude: ['/admin', '/admin/*', '/fr/admin/*', '/fr/admin', '/api', '/login', '/fr/login']
  }
}
