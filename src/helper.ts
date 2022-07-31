// eslint-disable-next-line @typescript-eslint/unbound-method
const _slice = (Array.prototype as unknown[]).slice // type-coverage:ignore-line

export const slice = <T>(items: { [index: number]: T; length: number }) =>
  _slice.call(items) as T[]
