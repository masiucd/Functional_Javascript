type MathFnType = (x: number) => number
type FunctionTypes = MathFnType

export const minus2 = (x: number) => x - 2
export const triple = (x: number) => x * 3
export const addByOne = (x: number) => x + 1

export const compoese = (...fns: FunctionTypes[]) => <T>(val: T) =>
  fns.reduce(
    (currentValue: T, currentFunction: Function) =>
      currentFunction(currentValue),
    val,
  )

let composeWithoutFn = addByOne(triple(minus2(10)))
let composingMath = compoese(minus2, triple, addByOne)<number>(10)
