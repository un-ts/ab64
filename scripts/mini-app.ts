import fs from 'node:fs/promises'

await fs.writeFile(
  'src/mini-app.ts',
  `import { atob, btoa } from './ponyfill.js'
${await fs.readFile('src/browser.ts', 'utf8')}`,
)
