// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: { url: 'paidpwa.com' },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-jsonld',
    '@nuxtjs/sitemap',
    '@formkit/auto-animate',
    '@vite-pwa/nuxt',
    '@nuxt/icon',
    '@nuxtjs/google-adsense', 
  ],
  googleAdsense: {
    id: 'ca-pub-#########'
  },
  
})