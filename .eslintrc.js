module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
    'cypress/globals': true
  },
  extends: ['plugin:react/recommended', 'standard', 'eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'jest', 'prettier', 'cypress'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'space-before-function-paren': ['error', 'never']
  }
}
