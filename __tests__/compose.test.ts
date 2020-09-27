import * as c from "../composition/math";

jest.spyOn(c, "minus2");
jest.spyOn(c, "triple");
jest.spyOn(c, "addByOne");
jest.spyOn(c, "compoese");

describe("Match composition", () => {
  test("composition right to left", () => {
    let composingMath = c.compoese(c.minus2, c.triple, c.addByOne)<number>(10);
    expect(composingMath).toBe(25);
  });
  test("functions has been called", () => {
    expect(c.addByOne).toHaveBeenCalled();
    expect(c.triple).toHaveBeenCalled();
    expect(c.compoese).toHaveBeenCalled();
    expect(c.minus2).toHaveBeenCalled();
  });
});
