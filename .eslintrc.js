module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true
  },
  extends: ['plugin:react/recommended', 'standard', 'eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'jest', 'prettier'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
    "react/prop-types": "off"
  }
}
