export const floor = (n: number) => Math.floor(n)
const sqrt = (n: number) => Math.sqrt(n)
const length = <T>(list: Array<T>): number => list.length
const head = <T>(list: Array<T>): T => list[0]
const tail = <T>(list: Array<T>): Array<T> => list.slice(1)
const squash = <T>(list1: Array<T>, list2: Array<T>): Array<T> => list1.concat(list2)
const double = (x: number) => x * 2
const overFive = (x: number) => x > 5
const isEven = (x: number) => x % 2 === 0
const isOdd = (x: number) => !isEven(x)
const half = (n: number) => floor(n / 2)
export const push = <T>(list: Array<T>, value: T) => [...list, value]
export const pop = <T>(list: Array<T>) => [...list].slice(0, -1)

const add = (a: number, b: number) => a + b

const makeList = ({ amount = 5, hasZero = false } = {}) =>
  hasZero ? [...Array(amount).keys()] : map((x: number) => x + 1, [...Array(amount).keys()])

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

/**
 *
 * @param fn
 * @param list
 * @desc own implementation on map higher order function
 */
const map = <T>(fn: Function, list: Array<T>): Array<T> =>
  length(list) === 0 ? [] : squash([fn(head(list))], map(fn, tail(list)))

const filter = <T>(fn: Function, list: Array<T>): Array<T> => {
  if (length(list) === 0) return []
  const firstItem = head(list)
  const filterHead = fn(firstItem) ? [firstItem] : []
  return squash(filterHead, filter(fn, tail(list)))
}

// if (length(array) === 0) return initialValue;
// const newInitialValue = reducerFn(initialValue, head(array));
// return reduce(reducerFn, newInitialValue, tail(array));
const reduce = <T>(fn: Function, initialValue: T, list: Array<T>): T | T[] => {
  if (length(list) === 0) return initialValue
  const newInitialValue = fn(initialValue, head(list))
  return reduce(fn, newInitialValue, tail(list))
}

const isPrime = (n: number, div = 3): boolean => {
  if (n === 2) return true
  if (n < 2 || isEven(n)) return false
  if (div * div > n) return true
  if (n % n === 0) return false
  return isPrime(n, div + 2)
}

const fizzBuzz = map((n: number) => {
  const fizzed = n % 3 === 0 ? "fizz" : ""
  const buzzed = n % 5 === 0 ? "buzz" : ""
  return fizzed || buzzed ? fizzed + buzzed : n
}, numbers)

const doubleNumbers = map(double, numbers)
const listOverFive = filter(overFive, numbers)
const evenNumbers = filter(isEven, numbers)
const halfNums = map(half, numbers)
const total = reduce(add, 0, [1, 2, 3])
