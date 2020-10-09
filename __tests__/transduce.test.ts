import * as fn from "../transduce"

jest.spyOn(fn, "listCombination")
jest.spyOn(fn, "mapWithReduce2")
describe("transduce", () => {
  test("listCombination", () => {
    const xs = [1, 2, 3, 4, 5, 7, 8]
    const val = 10
    expect(fn.listCombination(xs, val).length).toBe(8)
    expect(
      fn.listCombination(xs, val)[fn.listCombination(xs, val).length - 1],
    ).toBe(val)
    expect(fn.listCombination).toHaveBeenCalledTimes(3)
  })

  test("mapWithReduce2", () => {
    const xs = [1, 2, 3, 4, 5, 7, 8]
    let newList = fn.mapWithReduce2(xs)(fn.addOne)
    expect(newList).toEqual([2, 3, 4, 5, 6, 8, 9])
    expect(fn.mapWithReduce2).toHaveBeenCalled()
  })
})
