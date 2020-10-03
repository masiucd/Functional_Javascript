import * as im from "../immutable/ex";

jest.spyOn(im, "lotteryNum");
jest.spyOn(im, "recordNumber");

let luckyLotteryNumbers: number[] = [];
describe("immutable data structures", () => {
  test("should generate random number", () => {
    const num = im.lotteryNum();
    expect(typeof num).toBe("number");
  });
  test("main", () => {
    const NUM_COUNT = 5;

    while (luckyLotteryNumbers.length < NUM_COUNT) {
      luckyLotteryNumbers = im.recordNumber(
        im.lotteryNum(),
        luckyLotteryNumbers,
      );
    }
    expect(luckyLotteryNumbers.length).toBe(NUM_COUNT + 1);
  });
  test("functions should been called", () => {
    expect(im.lotteryNum).toHaveBeenCalled();
    expect(im.lotteryNum).toHaveBeenCalledTimes(4);
    expect(im.recordNumber).toHaveBeenCalled();
  });
});
