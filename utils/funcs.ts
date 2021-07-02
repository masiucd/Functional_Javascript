export const pipe =
  (...fns: any[]) =>
  <T>(x: T) =>
    fns.reduce((val, f) => f(val), x)

export const compose =
  (...fns: any[]) =>
  <T>(x: T) =>
    fns.reduceRight((value, fn) => fn(value), x)
