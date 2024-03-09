import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { fileURLToPath } from 'url'
import { join } from 'path'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://ar-3d-viewer.cloudinary.com/main.js',
        },
      ],
    },
  },
  devtools: { enabled: true },
  vue: {
    compilerOptions: {
      isCustomElement: tag => ['ar-3d-viewer'].includes(tag),
    },
  },
  /**
   * Formkit config
   * @see https://formkit.com/getting-started/installation
   */
  formkit: {
    // Experimental support for auto loading (see note):
    configFile: fileURLToPath(
      new URL('./configs/formkit/formkit.config.ts', import.meta.url)
    ),
  },
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
  runtimeConfig: {
    app: {
      name: 'Nuxt',
      version: '1.0.0',
      baseURL: '/',
      host: 'localhost',
      port: 3000,
    },
  },
  imports: {
    dirs: ['./stores'],
  },
  vite: {
    plugins: [
      Components({
        resolvers: [
          IconsResolver({
            prefix: false,
            customCollections: ['icons'],
          }),
        ],
        dts: true,
      }),
      Icons({
        customCollections: {
          icons: FileSystemIconLoader(
            fileURLToPath(new URL('./icons/', import.meta.url)),
            svg => {
              const viewBox = /viewBox="\d+ \d+ (\d+) (\d+)"/gi.exec(svg)
              if (!viewBox) return svg
              const w = viewBox?.[1]
              const h = viewBox?.[2]
              svg = svg.replace(/width=".*?"/, `width="${w}" `)
              svg = svg.replace(/height=".*?"/, `height="${h}" `)
              return svg
            }
          ),
        },
      }),
    ],
  },
  modules: [
    '@formkit/nuxt',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
  ],
  image: {
    baseURL: '/',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/ga-dev/image/upload/',
      maxAge: 8380800,
    },
  },
  typescript: {
    typeCheck: true,
  },
  experimental: {
    componentIslands: true,
    typedPages: true,
  },
})
