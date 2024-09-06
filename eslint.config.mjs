import importPlugin from "eslint-plugin-import";

export default [
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: { import: importPlugin },
    settings: {
      "import/parsers": {
        espree: [".js", ".cjs"],
      },
    },
    rules: {
      ...importPlugin.configs["recommended"].rules,
    },
  },
]