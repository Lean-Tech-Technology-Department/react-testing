module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
    'cypress/globals': true
  },
  extends: ['plugin:react/recommended', 'standard', 'eslint:recommended', 'plugin:sonarjs/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'jest', 'cypress', 'sonarjs'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
    quotes: ['error', 'single']
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
