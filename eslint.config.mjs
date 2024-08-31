import eslintPluginImport from 'eslint-plugin-import';

const config = [
  {
    parser: 'espree', 
    parserOptions: {
      ecmaVersion: 2020, 
      sourceType: 'module',
    },
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/default': 'error',
      'import/namespace': 'error',
      'import/no-absolute-path': 'error',
      'import/export': 'error',
      'import/no-deprecated': 'warn',
      'import/no-extraneous-dependencies': 'warn',
      'import/no-mutable-exports': 'warn',
    },
  },
];

export default config;