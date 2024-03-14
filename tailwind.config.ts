import type { Config } from 'tailwindcss'
import FormKitVariants from '@formkit/themes/tailwindcss'
import { join } from 'path'

const resolve = (s: string) => join(__dirname, s)

export default {
  content: [
    './configs/formkit/tailwind-theme.ts',
    './data/registrationSchema.ts',
    './app.vue',
    './components/**/*.{vue,ts,js}',
    './configs/tailwind/*.js',
    './forms/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './utils/**/*.{ts,js}',
  ],

  plugins: [FormKitVariants],
} satisfies Config
