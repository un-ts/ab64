import { encode, encodeUrl } from 'ab64'

test('it should just work', () => {
  expect(encode('Hello World!')).toBe('SGVsbG8gV29ybGQh')

  expect(encode('dankogai')).toBe('ZGFua29nYWk=')
  expect(encodeUrl('dankogai')).toBe('ZGFua29nYWk')

  expect(encode('小飼弾')).toBe('5bCP6aO85by+')
  expect(encodeUrl('小飼弾')).toBe('5bCP6aO85by-')
})
