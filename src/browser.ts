import { slice } from './helper.js'

const HEX = 16
const CHUNK = 4

export const decode = (val: string) =>
  decodeURIComponent(
    slice(atob(val))
      .map(
        char => '%' + ('00' + char.codePointAt(0)!.toString(HEX)).slice(-1 * 2),
      )
      .join(''),
  )

export const encode = (val: string) =>
  btoa(
    encodeURIComponent(val).replace(/%([\dA-F]{2})/g, (_, $1: string) =>
      // eslint-disable-next-line unicorn/prefer-number-properties -- for smaller size
      String.fromCodePoint(parseInt($1, HEX)),
    ),
  )

export const decodeUrl = (val: string) => {
  let output = val.replace(/-/g, '+').replace(/_/g, '/')
  switch (output.length % CHUNK) {
    case 0: {
      break
    }
    case 2: {
      output += '=='
      break
    }
    case 3: {
      output += '='
      break
    }
    default: {
      break
    }
  }
  return decode(output)
}

export const encodeUrl = (val: string) =>
  encode(val).replace(/\+/g, '-').replace(/=/g, '').replace(/\//g, '_')
