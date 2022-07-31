/**
 * via @see https://github.com/dankogai/js-base64/blob/main/base64.ts
 */

/* eslint-disable @typescript-eslint/no-magic-numbers, unicorn/prefer-code-point -- for smaller bundler and compatibility */

const b64CharList =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const b64Chars = // type-coverage:ignore-next-line
  (Array.prototype as string[]).slice.call(b64CharList)

const b64Table = b64Chars.reduce<Record<string, number>>((acc, char, index) => {
  acc[char] = index
  return acc
}, {})

const b64Regexp =
  /^(?:[\d+/A-Za-z]{4})*?(?:[\d+/A-Za-z]{2}(?:==)?|[\d+/A-Za-z]{3}=?)?$/

const fromCharCode = String.fromCharCode.bind(String)

export const atob = (asc: string) => {
  asc = asc.replace(/\s+/g, '')

  if (!b64Regexp.test(asc)) {
    throw new TypeError('malformed base64.')
  }

  asc += '=='.slice(2 - (asc.length & 3))

  let u24: number
  let binary = ''
  let r1: number
  let r2: number

  for (let i = 0; i < asc.length; ) {
    u24 =
      (b64Table[asc.charAt(i++)] << 18) |
      (b64Table[asc.charAt(i++)] << 12) |
      ((r1 = b64Table[asc.charAt(i++)]) << 6) |
      (r2 = b64Table[asc.charAt(i++)])
    binary +=
      r1 === 64
        ? fromCharCode((u24 >> 16) & 255)
        : r2 === 64
        ? fromCharCode((u24 >> 16) & 255, (u24 >> 8) & 255)
        : fromCharCode((u24 >> 16) & 255, (u24 >> 8) & 255, u24 & 255)
  }

  return binary
}

export const btoa = (binary: string) => {
  let u32: number
  let c0: number
  let c1: number
  let c2: number

  let asc = ''

  const pad = binary.length % 3

  for (let i = 0; i < binary.length; ) {
    if (
      (c0 = binary.charCodeAt(i++)) > 255 ||
      (c1 = binary.charCodeAt(i++)) > 255 ||
      (c2 = binary.charCodeAt(i++)) > 255
    ) {
      throw new TypeError('invalid character found')
    }

    u32 = (c0 << 16) | (c1 << 8) | c2
    asc +=
      b64Chars[(u32 >> 18) & 63] +
      b64Chars[(u32 >> 12) & 63] +
      b64Chars[(u32 >> 6) & 63] +
      b64Chars[u32 & 63]
  }

  return pad ? asc.slice(0, pad - 3) + '==='.slice(pad) : asc
}
