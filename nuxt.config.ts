import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  tailwindcss: {
    cssPath: '@/assets/css/tailwind.scss',
    viewer: false,
  },
  /**
   * Nuxt Headless UI config
   * @see https://nuxt.com/modules/headlessui
   */
  headlessui: {
    prefix: 'Headless',
  },
  css: ['@/assets/css/tailwind.scss'],

  modules: ['@formkit/nuxt', '@nuxtjs/tailwindcss', 'nuxt-headlessui'],
  typescript: {
    typeCheck: true,
  },
})
