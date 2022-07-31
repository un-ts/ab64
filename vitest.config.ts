import path from 'node:path'

import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vitest/config'

const isNode = process.env.TEST_ENV === 'node'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^ab64$/,
        replacement: path.resolve(`src/${isNode ? 'index' : 'browser'}`),
      },
      {
        find: /^ab64\/ponyfill$/,
        replacement: path.resolve('src/ponyfill'),
      },
    ],
  },
  plugins: [
    /** @see https://github.com/microsoft/TypeScript/issues/50067 */
    (
      autoImport as unknown as typeof import('unplugin-auto-import/vite')['default']
    )({
      imports: 'vitest',
    }),
  ],
  test: {
    coverage: {
      reporter: ['lcov', 'json', 'text'],
    },
    environment: isNode ? 'node' : 'edge-runtime',
  },
})
