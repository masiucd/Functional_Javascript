import * as hof from "../beginning/hof";

jest.spyOn(hof, "addByOne");
jest.spyOn(hof, "pow");
describe("addByOne and pow", () => {
  test("should return correct output ", () => {
    expect(hof.addByOne(5)).toBe(6);
    expect(hof.addByOne(4)).toBe(5);
    expect(hof.pow(4)).toBe(16);
    expect(hof.pow(3)).toBe(9);
  });
  test("addByOne should been called", () => {
    expect(hof.addByOne).toHaveBeenCalledTimes(2);
    expect(hof.pow).toHaveBeenCalledTimes(2);
  });
});
