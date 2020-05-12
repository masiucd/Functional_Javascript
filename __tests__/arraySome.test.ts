import { tasks, completedTasks, Completed } from '../arrays/some/index';

describe('testing Array.prototype.some()', () => {
  test('should return a correct boolean', () => {
    expect(tasks).toBeTruthy();
    expect(tasks).not.toBeFalsy();
  });
});
