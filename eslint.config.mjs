import importPlugin from 'eslint-plugin-import';

export default [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: { import: importPlugin},
    settings: {
      'import/parsers': {
        espree: ['.js', '.cjs'],
      },
    },
    rules: {
      ...importPlugin.configs['recommended'].rules,
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'space-before-function-paren': ['error', 'always'],
      'arrow-spacing': ['error', { 'before': false, 'after': true }],
      'keyword-spacing': ['error', { 'before': true, 'after': true, 'overrides': { 'return': { 'after': true } } }]
    }
  }
];