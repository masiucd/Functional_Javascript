import * as unary from "../clojure/closure";

jest.spyOn(unary, "addTwo");
jest.spyOn(unary, "unary");
describe("unary", () => {
  test("should return correct output", () => {
    let foo = unary.unary(unary.addTwo)(10);
    expect(foo).toBe(12);
  });
  test("functions to have been called", () => {
    expect(unary.addTwo).toHaveBeenCalled();
    expect(unary.unary).toHaveBeenCalled();
  });
});
