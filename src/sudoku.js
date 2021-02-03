export default function Sudoku(column,row) {
  this.column = column;
  this.row = row;
}

Sudoku.prototype.checkInteger = function() {
  let arrColumn = this.column;
  let arrRow = this.row;
  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const notANumber = [...arrColumn,...arrRow];
  for (let i = 0; i < notANumber.length; i++) {
    if (!notANumber.includes(input[i])) {
      return "one number is outside 1-9";
    }
  }
}

Sudoku.prototype.checkDuplicate = function() {
  
}