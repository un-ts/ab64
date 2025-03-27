import { atob, btoa } from 'ab64/ponyfill'

const MIN = 16

test.skipIf(+process.versions.node < MIN)(
  'it should work same as the builtin',
  () => {
    expect(atob('SGVsbG8gV29ybGQh')).toBe(globalThis.atob('SGVsbG8gV29ybGQh'))
    expect(btoa('Hello World!')).toBe(globalThis.btoa('Hello World!'))
  },
)
