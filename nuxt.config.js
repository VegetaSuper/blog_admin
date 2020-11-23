export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'blog-admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/blog_admin/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/styles/global.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/api/api.js',
    '@/plugins/element-ui'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  router: {
    base: '/blog_admin'
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios'
  ],

  env: {
    baseUrl: process.env.BASE_URL
  },

  axios: {
    baseURL: process.env.BASE_URL,
    proxy: true, //开启代理转发
    prefix: '/tmsapi' // 请求接口添加前缀 /tmsapi
  },

  proxy: {
    '/api': {
      target: process.env.BASE_URL,
      pathRewrite: {'^/api': ''} // 将/api替换为空
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
    vendor: ['element-ui'],
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ],
      comments: true
    }
  }
}
