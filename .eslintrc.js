module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }]
  }
};
