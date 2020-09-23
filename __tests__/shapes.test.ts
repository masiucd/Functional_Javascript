import * as shapes from "../shapes";

jest.spyOn(shapes, "not");
jest.spyOn(shapes, "isEven");
jest.spyOn(shapes, "isOdd");

describe("shapes", () => {
  test("not fn works as expected", () => {
    let notIsEven = shapes.not(shapes.isEven);
    expect(notIsEven(6)).toBe(false);
    expect(shapes.not).toHaveBeenCalled();
  });
});
