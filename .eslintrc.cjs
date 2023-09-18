module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: [],
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  root: true,
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: ['.eslintrc.cjs'],
  rules: {},
};
