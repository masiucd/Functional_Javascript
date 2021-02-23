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

const curry = (fn: Function, arity = fn.length, nextCurried: Function) =>
  (nextCurried = (prevArgs: any) => (nextArg: any) => {
    const args = [...prevArgs, nextArg]
    if (args.length >= arity) {
      return fn(...args)
    } else {
      return nextCurried(args)
    }
  })([])
