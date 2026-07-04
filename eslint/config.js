import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginPackageJson from "eslint-plugin-package-json";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    name: "@tasshi/configs/ignores",
    ignores: ["**/dist/", "**/lib/", "**/coverage/"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    name: "@tasshi/configs/globals",
    languageOptions: {
      globals: globals.nodeBuiltin,
    },
  },
  {
    name: "@tasshi/configs/globals-commonjs",
    files: ["**/*.cjs", "**/*.cts"],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    name: "@tasshi/configs/rules",
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    rules: {
      curly: ["error", "all"],
      eqeqeq: ["error", "always"],
    },
  },
  {
    name: "@tasshi/configs/rules-typescript",
    files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts"],
    rules: {
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
    },
  },
  eslintPluginPackageJson.configs.recommended,
  eslintConfigPrettier,
];
