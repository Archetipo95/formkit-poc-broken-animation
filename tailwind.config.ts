import type { Config } from 'tailwindcss'
// @ts-ignore
import FormKitVariants from '@formkit/themes/tailwindcss'
import { join } from 'path'

const resolve = (s: string) => join(__dirname, s)

export default {
  content: [
    resolve('./configs/formkit/tailwind-theme.ts'),
    resolve('./data/registrationSchema.ts'),
    resolve('./app.vue'),
    resolve('./components/**/*.{vue,ts,js}'),
    resolve('./configs/tailwind/*.js'),
    resolve('./forms/**/*.{vue,js}'),
    resolve('./layouts/**/*.vue'),
    resolve(
      './node_modules/@atoms-studio/nuxt-components/**/*.{vue,js,ts,jsx,tsx}'
    ),
    resolve('./pages/**/*.vue'),
    resolve('./plugins/**/*.{js,ts}'),
    resolve('./utils/**/*.{ts,js}'),
  ],

  plugins: [FormKitVariants],
} satisfies Config
