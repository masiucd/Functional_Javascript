import { assertEquals } from "../../package.ts"
import { identity, output, gatherArgs, spreadArgs } from "../app.ts"

Deno.test({
  name: "identity",

  fn: () => {
    const input = "input"
    const expected = input
    assertEquals(identity(input), expected)
  },
})

Deno.test({
  name: "output",
  fn: () => {
    const toUpper = (s: string) => s.toUpperCase()
    const input = "input"
    const expected1 = "input"
    const expected2 = "INPUT"

    assertEquals(output(input), expected1)
    assertEquals(output(input, toUpper), expected2)
  },
})

Deno.test({
  name: "gatherArgs",
  fn: () => {
    const math = ([x, y]: Array<number>) => x * 2 + y * 2
    const expected = 18
    assertEquals([1, 2, 3].reduce(gatherArgs(math)), expected)
  },
})

Deno.test({
  name: "spreadArgs",
  fn: () => {
    const product = (a: number, b: number): number => a * b
    const fn = (f: Function) => f([10, 10])
    assertEquals(fn(spreadArgs(product)), 100)
  },
})
