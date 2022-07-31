import { decode, decodeUrl } from 'ab64'

test('it should just work', () => {
  expect(decode('SGVsbG8gV29ybGQh')).toBe('Hello World!')

  expect(decode('ZGFua29nYWk=')).toBe('dankogai')
  expect(decodeUrl('ZGFua29nYWk')).toBe('dankogai')

  expect(decode('5bCP6aO85by+')).toBe('小飼弾')
  expect(decodeUrl('5bCP6aO85by-')).toBe('小飼弾')

  expect(decode('8KCut+mHjuWutg==')).toBe('𠮷野家')
  expect(decodeUrl('8KCut-mHjuWutg')).toBe('𠮷野家')
})
