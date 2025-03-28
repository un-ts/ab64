const slice_ = Array.prototype.slice // type-coverage:ignore-line

export const slice = <T>(items: ArrayLike<T>) =>
  slice_.call<ArrayLike<T>, [], T[]>(items)
