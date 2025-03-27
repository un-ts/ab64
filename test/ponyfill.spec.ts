import { atob, btoa } from 'ab64/ponyfill'

test.runIf(
  typeof globalThis.atob === 'function' &&
    typeof globalThis.btoa === 'function',
)('it should work same as the builtin', () => {
  expect(atob('SGVsbG8gV29ybGQh')).toBe(globalThis.atob('SGVsbG8gV29ybGQh'))
  expect(btoa('Hello World!')).toBe(globalThis.btoa('Hello World!'))
})
