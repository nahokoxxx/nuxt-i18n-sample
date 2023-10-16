// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    strategy: 'prefix',
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
  }
})
