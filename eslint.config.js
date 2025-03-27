import recommended from '@1stg/eslint-config'

export default [
  ...recommended,
  {
    ignores: ['src/mini-app.ts'],
  },
  {
    files: ['**/src/*.ts'],
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      'sonarjs/deprecation': 'off',
      'sonarjs/no-nested-assignment': 'off',
      'sonarjs/no-nested-conditional': 'off',
      'sonarjs/regex-complexity': 'off',
      'unicorn/prefer-string-replace-all': 'off',
    },
  },
]
