// Self-contained flat config. To use it without the library, copy it to eslint.config.mjs and run:
// npm i -D eslint prettier typescript typescript-eslint @stylistic/eslint-plugin eslint-config-prettier
//   eslint-plugin-import-x eslint-plugin-jest eslint-plugin-prettier eslint-plugin-regexp eslint-plugin-unicorn
// It needs Node.js 22.13+, a Prettier config (see prettier.js) and ./tsconfig.eslint.json, and applies to **/*.ts only.

import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import importX, { createNodeResolver } from 'eslint-plugin-import-x';
import jest from 'eslint-plugin-jest';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import regexp from 'eslint-plugin-regexp';
import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

const devDependencyFiles = [
  '**/tests/**',
  '**/*.{test,spec}.ts',
  '**/jest.{config,setup}.{js,ts}',
  '**/webpack.config.{js,ts}',
];

export default defineConfig([
  {
    name: 'cimpress-atsquad/setup',
    files: ['**/*.ts'],
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
      globals: jest.environments.globals.globals,
    },
    settings: {
      'import-x/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
      'import-x/resolver-next': [createNodeResolver({ extensions: ['.js', '.mjs', '.ts'] })],
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      '@stylistic': stylistic,
      import: importX,
      jest,
      regexp,
      unicorn,
    },
  },
  {
    ...prettierRecommended,
    name: 'cimpress-atsquad/prettier',
    files: ['**/*.ts'],
  },
  {
    name: 'cimpress-atsquad/rules',
    files: ['**/*.ts'],
    rules: {
      complexity: ['error', 6],
      'no-underscore-dangle': ['error', { allow: ['_links', '_embedded'] }],
      'prefer-exponentiation-operator': 'error',

      '@stylistic/lines-between-class-members': [
        'error',
        'always',
        { exceptAfterSingleLine: false },
      ],

      '@typescript-eslint/default-param-last': 'error',
      '@typescript-eslint/dot-notation': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'variable', format: ['camelCase', 'PascalCase', 'UPPER_CASE'] },
        { selector: 'function', format: ['camelCase', 'PascalCase'] },
        { selector: 'typeLike', format: ['PascalCase'] },
      ],
      '@typescript-eslint/no-array-constructor': 'error',
      '@typescript-eslint/no-dupe-class-members': 'error',
      '@typescript-eslint/no-empty-function': [
        'error',
        { allow: ['arrowFunctions', 'functions', 'methods'] },
      ],
      '@typescript-eslint/no-implied-eval': 'error',
      '@typescript-eslint/no-loop-func': 'error',
      '@typescript-eslint/no-loss-of-precision': 'error',
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { vars: 'all', args: 'after-used', caughtErrors: 'none', ignoreRestSiblings: true },
      ],
      '@typescript-eslint/no-use-before-define': [
        'error',
        { functions: true, classes: true, variables: true },
      ],
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/only-throw-error': 'error',
      '@typescript-eslint/return-await': 'error',

      'import/extensions': [
        'error',
        'ignorePackages',
        { js: 'never', mjs: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
      ],
      'import/no-extraneous-dependencies': [
        'error',
        { devDependencies: devDependencyFiles, optionalDependencies: false },
      ],

      'jest/expect-expect': 'warn',
      'jest/no-commented-out-tests': 'warn',
      'jest/no-conditional-expect': 'error',
      'jest/no-disabled-tests': 'warn',
      'jest/no-done-callback': 'error',
      'jest/no-export': 'error',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/no-jasmine-globals': 'warn',
      'jest/no-mocks-import': 'error',
      'jest/no-standalone-expect': 'error',
      'jest/no-test-prefixes': 'error',
      'jest/valid-describe-callback': 'error',
      'jest/valid-expect': 'error',
      'jest/valid-expect-in-promise': 'error',

      'regexp/no-super-linear-backtracking': 'error',

      'unicorn/filename-case': ['error', { case: 'camelCase', checkDirectories: false }],
      'unicorn/no-for-loop': 'error',
      'unicorn/no-instanceof-builtins': [
        'error',
        { exclude: ['Function', 'String', 'Number', 'Boolean', 'BigInt', 'Symbol'] },
      ],
      'unicorn/no-zero-fractions': 'error',
      'unicorn/prefer-includes': 'error',
      'unicorn/prefer-spread': 'error',
      'unicorn/prefer-string-starts-ends-with': 'error',
      'unicorn/throw-new-error': 'error',
    },
  },
]);
