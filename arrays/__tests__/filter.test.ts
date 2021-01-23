import { assertEquals, assertArrayIncludes } from "../../package.ts"
import { filterLessons } from "../filter/filter.ts"

Deno.test({
  name: "filterLessons",
  fn: () => {
    const lesson = {
      title: "Javascript Arrays in Depth - concat",
      views: 1050,
      tags: ["array", "concat"],
    }
    assertEquals(filterLessons.length, 2)
    assertArrayIncludes(filterLessons, [lesson], "expect lesson to includes in filterLessons")
  },
})
