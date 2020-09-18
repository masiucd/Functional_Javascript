type Fn1 = (x: number) => number;

type FunctionsType = Fn1;

export const addByOne = (x: number) => x + 1;
export const pow = (x: number) => x * x;

const doSomeMathPlease = (x: number, fn: FunctionsType) => fn(x);

let giveMeSix = doSomeMathPlease(5, addByOne);
let giveMe25 = doSomeMathPlease(5, pow);
