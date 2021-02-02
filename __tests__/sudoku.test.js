import { TestScheduler } from 'jest';
import Sudoku from '../src/sudoku.js';

describe('Sudoku', () => {
  test('should correctly create a sudoku object with two arrays', () => {
    const sudoku = new Sudoku([2,5,7],[1,2,3])
    expect(sudoku.column).toEqual([2,5,7]);
    expect(sudoku.row).toEqual([1,2,3]);
  });
});