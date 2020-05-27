import {
  count,
  counterWithForLoop,
  number2,
  numbers,
  findNum,
} from '../recursion';

describe('Testing counters', () => {
  test('countWithForLoop should console.log 0 - 5', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    console.log(counterWithForLoop(5));
    expect(consoleSpy).toHaveBeenCalledWith(5);
  });

  test('count should return correctValues', () => {
    expect(count(0)).toBe(10);
    expect(count(10)).not.toBe(2);
  });

  test('numbers2 and numbers', () => {
    expect(number2).toEqual([
      [1, 2, 3],
      [4, 5, [6]],
    ]);
    expect(numbers).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    expect(numbers).not.toBeUndefined();
    expect(number2).not.toBeUndefined();
  });
});
