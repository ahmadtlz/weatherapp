module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',

    ecmaFeature: {
      jsx: true
    }
  },

  extends: [
    'react-app',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint'
  ],
  plugins: ['react', 'react-hooks', 'import', 'jsx-a11y'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {}
    }
  },
  rules: {
    'no-use-before-define': 'off',
    'linebreak-style': 0,
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx']
      }
    ],
    'no-case-declarations': 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-else-return': 'warn',
    'no-param-reassign': 'warn',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-var': 'warn',
    'object-shorthand': 'warn',
    'comma-dangle': ['error', 'never'],
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: '*',
        next: 'class'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'for'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'function'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'if'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'switch'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'try'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'while'
      },
      {
        blankLine: 'always',
        prev: 'block-like',
        next: ['let', 'const']
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    camelcase: ['off'],
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off'
  }

};
