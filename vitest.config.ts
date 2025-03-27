import path from 'node:path'

import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^ab64\/ponyfill$/,
        replacement: path.resolve('src/ponyfill.ts'),
      },
    ],
  },
  plugins: [
    autoImport({
      imports: 'vitest',
    }),
  ],
  test: {
    coverage: {
      provider: 'istanbul',
      reporter: ['lcov', 'json'],
    },
    workspace: [
      {
        extends: true,
        resolve: {
          alias: [
            {
              find: /^ab64$/,
              replacement: path.resolve('src/index.ts'),
            },
          ],
        },
        test: {
          name: 'node',
          environment: 'node',
        },
      },
      {
        extends: true,
        resolve: {
          alias: [
            {
              find: /^ab64$/,
              replacement: path.resolve('src/browser.ts'),
            },
          ],
        },
        test: {
          name: 'browser',
          environment: 'edge-runtime',
        },
      },
    ],
  },
})
