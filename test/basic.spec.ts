import { decode, decodeUrl, encode, encodeUrl } from 'ab64'

describe('encoding', () => {
  test('it should just work', () => {
    expect(encode('Hello World!')).toBe('SGVsbG8gV29ybGQh')

    expect(encode('dankogai')).toBe('ZGFua29nYWk=')
    expect(encodeUrl('dankogai')).toBe('ZGFua29nYWk')

    expect(encode('小飼弾')).toBe('5bCP6aO85by+')
    expect(encodeUrl('小飼弾')).toBe('5bCP6aO85by-')
  })
})

describe('decoding', () => {
  test('it should just work', () => {
    expect(decode('SGVsbG8gV29ybGQh')).toBe('Hello World!')

    expect(decode('ZGFua29nYWk=')).toBe('dankogai')
    expect(decodeUrl('ZGFua29nYWk')).toBe('dankogai')

    expect(decode('5bCP6aO85by+')).toBe('小飼弾')
    expect(decodeUrl('5bCP6aO85by-')).toBe('小飼弾')
  })
})
