import js from '@eslint/js';
import jest from 'eslint-plugin-jest';
import globals from 'globals';
// import { defineConfig } from "eslint/config";

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
    },
  },

  {
    files: ['tests/**/*.test.js'],
    plugins: { jest },
    rules: {
      ...jest.configs.recommended.rules,
    },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];
