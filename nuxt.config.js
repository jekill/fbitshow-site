module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'The First Bit IT Show - Podcast - IT, Software development, Frontend, Backend, Fullstack',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Podcast - The First Bit IT Show'}
    ],
    link: [
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: "The First Bit IT Show - Feed",
        href: "http://fbitshow.ru/feed.xml"
      },
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'},
      // {
      //   rel: 'stylesheet',
      //   href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
      //   integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
      //   crossorigin: "anonymous"
      // },
      {
        rel: 'stylesheet',
        href: "/blaze/blaze.min.css"
      },
      {
        rel: 'stylesheet',
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        integrity: 'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN',
        crossorigin: "anonymous"
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
