import { TestScheduler } from 'jest';
import Sudoku from '../src/sudoku.js';

describe('Sudoku', () => {
  test('should correctly create a sudoku object with two arrays', () => {
    const sudoku = new Sudoku([2,5,7],[1,2,3])
    expect(sudoku.column).toEqual([2,5,7]);
    expect(sudoku.row).toEqual([1,2,3]);
  });
  test('should determine that the entry is an integer between 1-9', () => {
    const notANumber = new Sudoku([2,5,22],[1,2,3]);
    expect(notANumber.checkInteger()).toEqual("one number is outside 1-9");
  });
});