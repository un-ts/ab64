export const decode = (val: string) => Buffer.from(val, 'base64').toString()

export const encode = (val: string) => Buffer.from(val).toString('base64')

export const decodeUrl = (val: string) =>
  Buffer.from(val, 'base64url').toString()

export const encodeUrl = (val: string) => Buffer.from(val).toString('base64url')
