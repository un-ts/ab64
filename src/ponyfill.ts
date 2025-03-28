/**
 * via @see https://github.com/dankogai/js-base64/blob/main/base64.ts
 */

import { slice } from './helpers.js'

const b64CharList =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const b64Chars = slice(b64CharList)

const b64Table = b64Chars.reduce<Record<string, number>>((acc, char, index) => {
  acc[char] = index
  return acc
}, {})

const b64Regexp = /^(?:[\d+/a-z]{4})*?(?:[\d+/a-z]{2}(?:==)?|[\d+/a-z]{3}=?)?$/i

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
        ? String.fromCodePoint((u24 >> 16) & 255)
        : r2 === 64
          ? String.fromCodePoint((u24 >> 16) & 255, (u24 >> 8) & 255)
          : String.fromCodePoint((u24 >> 16) & 255, (u24 >> 8) & 255, u24 & 255)
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
      (c0 = binary.codePointAt(i++)!) > 255 ||
      (c1 = binary.codePointAt(i++)!) > 255 ||
      (c2 = binary.codePointAt(i++)!) > 255
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
