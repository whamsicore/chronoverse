import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/index.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  }, 
  loading: { color: '#3B8070' },

  // buildModules: [
  //   '@nuxt/postcss8',
  //   // ...
  // ],
  // build: {
  //   postcss: {
  //     plugins: {
  //       tailwindcss: {},
  //       autoprefixer: {},
  //     },
  //   },
  // },
  // css: [
  //   '@/index.css',
  // ],
})
