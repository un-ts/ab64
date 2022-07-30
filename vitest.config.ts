import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    // TODO: report the TypeScript issue
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
  },
})
