export const unary = (fn: Function) => <T>(arg: T) => fn(arg)

export const identity = <T>(value: T): T => value

export const output = <T>(input: T, formatFn: Function = identity): T => {
  return formatFn(input)
}
export const spreadArgs = (fn: Function) => <T>(argsList: T[]) => fn(...argsList)
export const gatherArgs = (fn: Function) => <T>(...args: T[]) => fn(args)

export const partial = <T>(fn: Function, ...presetArgs: T[]) => <T>(...laterArgs: T[]) => {
  console.log(presetArgs)
  return fn(...presetArgs, ...laterArgs)
}

const add = (a: number, b: number) => a + b

let xs = [1, 2, 3].map(partial(add, 10))
console.log(xs)
