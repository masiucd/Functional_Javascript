import {Box, nextCharWithBox} from "../box.ts"
import {assertEquals} from "../../package.ts"

Deno.test({
  name: "Box",

  fn: () => {
    const result = Box(65)
      .map(x => x + 1)
      .map(x => String.fromCharCode(x))
      .fold(x => x)
    const expected = "B"

    assertEquals(result, expected)
    assertEquals(nextCharWithBox("65"), expected)
  },
})
