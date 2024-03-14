import Components from 'unplugin-vue-components/vite'
import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  tailwindcss: {
    cssPath: '@design-system/assets/css/tailwind.scss',
    viewer: false,
  },
  /**
   * Nuxt Headless UI config
   * @see https://nuxt.com/modules/headlessui
   */
  headlessui: {
    prefix: 'Headless',
  },
  css: ['@design-system/assets/css/tailwind.scss'],
  alias: {
    '@design-system': fileURLToPath(new URL('./', import.meta.url)),
  },

  modules: ['@formkit/nuxt', '@nuxtjs/tailwindcss', 'nuxt-headlessui'],
  typescript: {
    typeCheck: true,
  },
})
