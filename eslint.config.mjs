import js from "@eslint/js";
import jest from "eslint-plugin-jest";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["tests/**/*.test.js"], plugins: { jest }, rules: { ...jest.configs.recommended.rules }, languageOptions: { globals: globals.jest } },
]);