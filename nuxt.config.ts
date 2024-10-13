// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "nuxt-lucide-icons",
    "@nuxt/content",
    "@nuxt/image",
    "nuxt-svgo",
    "@nuxt/ui",
  ],

  lucide: {
    namePrefix: "Icon",
  },
  colorMode: {
    preference: "dark",
    fallback: "dark",
  },
  ui: {
    icons: ["heroicons", "lucide"],
  },

  css: ["./assets/style/main.css",
    "vue3-carousel/dist/carousel.css"
  ],

  svgo: {
    autoImportPath: "./assets/logo",
  },
});
