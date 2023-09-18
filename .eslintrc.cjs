module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended'],
  root: true,
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: ['.eslintrc.cjs'],
  rules: {
    // '@typescript-eslint/interface-name-prefix': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
  },
};
