module.exports = {
  root: true,
  extends: [
    '@nuxt/eslint-config',
    'plugin:storybook/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  overrides: [
    {
      files: ['*.graphql.ts'],
      processor: '@graphql-eslint/graphql',
    },
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: {
        '@graphql-eslint/known-type-names': 'error',
      },
    },
  ],
  rules: {
    'vue/no-deprecated-slot-attribute': 'off',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 3,
        },
      },
    ],
    'prettier/prettier': [
      'warn',
      {
        plugins: ['prettier-plugin-tailwindcss'],
      },
    ],
  },
}
