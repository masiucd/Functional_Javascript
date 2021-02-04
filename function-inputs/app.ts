export const unary = (fn: Function) => <T>(arg: T) => fn(arg)

export const identity = <T>(value: T): T => value

// const xs = ["1", "2", "3", "4", "5", "6", "7", "8"].map(parseInt)
// [
//   1, NaN, NaN, NaN,
// NaN, NaN, NaN, NaN
// ]

const xs = ["1", "2", "3", "4", "5", "6", "7", "8"].map(unary(parseInt))
/**
 *  [
  1, 2, 3, 4,
  5, 6, 7, 8
]
 */

const words = " hello world...".split(/\s|\b/)
console.log(words)
