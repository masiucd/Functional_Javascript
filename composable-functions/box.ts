import {Fn} from "../utils/types.ts"
// composition with map and without the Box
export const nextChar = (str: string) =>
  [str]
    .map(s => s.trim())
    .map(s => parseInt(s, 10))
    .map(n => n + 1)
    .map(n => String.fromCharCode(n))

export const Box = <T>(x: T) => ({
  map: (fn: Fn) => Box(fn(x)),
  fold: (fn: Fn) => fn(x), // unwrap
  inspect: () => `Box(${x})`,
})

export const nextCharWithBox = (str: string) =>
  Box<string>(str)
    .map((s: string) => s.trim())
    .map((s: string) => parseInt(s, 10))
    .map((n: number) => n + 1)
    .map((n: number) => String.fromCharCode(n))
    .fold((c: string) => c)
