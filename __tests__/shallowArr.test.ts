/* eslint-disable import/no-unresolved */
import {
  Person,
  Filters,
  filters,
  sections,
  inputVal,
  output,
} from '../arrays/shallow_clone/index';

describe('testing shallow arrays', () => {
  test('should return MARCELLCISZEK', () => {
    expect(output).toBe('MARCELLCISZEK');
    expect(output).not.toBe('marcell-ciszek');
  });
});
