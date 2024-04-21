// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    // The private keys which are only available server-side
    prodApiSecret: 'ac8624fd',
    // Keys within public are also exposed client-side
    public: {
      apiBase: 'https://www.omdbapi.com/',
      apiSecret: 'ac8624fd',
    }
  }
})
