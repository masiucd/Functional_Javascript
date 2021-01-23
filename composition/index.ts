type UnaryFunc<A, B> = (x: A) => B

export function compose2<A, B, C>(f: UnaryFunc<B, C>, g: UnaryFunc<A, B>) {
  return (x: A) => f(g(x))
}

function compose<A, B>(fn: UnaryFunc<A, B>): UnaryFunc<A, B>
function compose<A, B, C>(fn1: UnaryFunc<B, C>, fn2: UnaryFunc<A, B>): UnaryFunc<A, B>
function compose<A, B, C, D>(
  fn1: UnaryFunc<C, D>,
  fn2: UnaryFunc<B, C>,
  fn3: UnaryFunc<A, B>,
): UnaryFunc<A, B>
function compose(...fns: UnaryFunc<any, any>[]): UnaryFunc<any, any> {
  return fns.reduce(compose2)
}

const add1 = (x: number): number => x + 1
const toNumber = (x: string): number => parseInt(x)

const xform = compose(add1, toNumber)

// console.log(xform(42)); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
