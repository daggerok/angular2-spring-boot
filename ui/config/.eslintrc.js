module.exports = {
  plugins: [
    'eslint-plugin-babel',
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  rules: {
    'no-console': 0,
    strict: 0,
    indent: [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'error',
      'always',
    ]
  }
};
