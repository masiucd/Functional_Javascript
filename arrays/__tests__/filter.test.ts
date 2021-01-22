/* eslint-disable import/no-unresolved */
import { filterLessons, lessons, minViews, searchTerm, Lessons } from "../filter"

describe("testing the lessons list", () => {
  test("should not be a empty array  ", () => {
    expect(lessons.length).toEqual(4)
  })
  test("should return correct value", () => {
    expect(filterLessons).toEqual([
      {
        title: "Javascript Arrays in Depth - concat",
        views: 1050,
        tags: ["array", "concat"],
      },
      {
        title: "Javascript Arrays in Depth - slice",
        views: 2503,
        tags: ["array", "slice"],
      },
    ])
  })
  test("minViews to bee 1000 and searchTerm to be array", () => {
    expect(minViews).toBe(1000)
    expect(searchTerm).toEqual("array")
  })
})
