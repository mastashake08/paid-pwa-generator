// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-jsonld',
    // '@nuxtjs/sitemap',
    // '@vite-pwa/nuxt',
    '@nuxt/icon',
    '@nuxtjs/google-adsense', 
  ],
  googleAdsense: {
    id: process.env.GOOGLE_ADSENSE_ID,
    test: process.env.GOOGLE_ADSENSE_TEST_MODE === 'true',
  }, 
})