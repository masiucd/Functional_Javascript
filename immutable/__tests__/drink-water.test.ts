import { assertEquals } from "../../package.ts"
import { ImmutableGlass } from "../drink-water.ts"

Deno.test({
  name: "ImmutableGlass",
  fn: () => {
    const glass = new ImmutableGlass("pepsi", 100)
    const newGlass = glass.drink(20)
    assertEquals(glass.amount, 100)
    assertEquals(newGlass.amount, 80)
  },
})
