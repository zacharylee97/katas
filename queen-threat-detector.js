function generateBoard(whiteQueen, blackQueen) {
  var board = [];
  for (var i = 0; i < 8; i++) { //Makes row
    board[i] = [];
    for (var j = 0; j < 8; j++) { //Makes column
      if (whiteQueen[0] === j && whiteQueen[1] === i) {
        board[i][j] = 1;
      } else if (blackQueen [0] === j && blackQueen[1] === i) {
        board[i][j] = 1;
      } else {
        board[i][j] = 0;
      }
    }
  }
  return board;
}

function queenThreat(board) {
  var rows = [];
  var columns = [];
  for (var i = 0; i < board.length; i++) { //Row number
    for (var j = 0; j < board[i].length; j++) { //Column number
      if (board[i][j] === 1){
        rows.push(i);
        columns.push(j);
      }
    }
  }
function checkDiagonal() {
    function upAndRight() {
      var columnCounter = diagonal[0][0];
      var rowCounter = diagonal[0][1];
      while (columnCounter !== 0 && columnCounter !== 7 && rowCounter !== 0 && rowCounter !== 7) {
        columnCounter++;
        rowCounter--;
        diagonal.push([columnCounter, rowCounter]);
      }
    }
    function upAndLeft() {
      var columnCounter = diagonal[0][0];
      var rowCounter = diagonal[0][1];
      while (columnCounter !== 0 && columnCounter !== 7 && rowCounter !== 0 && rowCounter !== 7) {
        columnCounter--;
        rowCounter--;
        diagonal.push([columnCounter, rowCounter]);
      }
    }
    function downAndRight() {
      var columnCounter = diagonal[0][0];
      var rowCounter = diagonal[0][1];
      while (columnCounter !== 0 && columnCounter !== 7 && rowCounter !== 0 && rowCounter !== 7) {
        columnCounter++;
        rowCounter++;
        diagonal.push([columnCounter, rowCounter]);
      }
    }
    function downAndLeft() {
      var columnCounter = diagonal[0][0];
      var rowCounter = diagonal[0][1];
      while (columnCounter !== 0 && columnCounter !== 7 && rowCounter !== 0 && rowCounter !== 7) {
        columnCounter--;
        rowCounter++;
        diagonal.push([columnCounter, rowCounter]);
      }
    }
    var diagonal = [];
    diagonal.push([columns[0], rows[0]]);
    upAndRight();
    upAndLeft();
    downAndRight();
    downAndLeft();
    var check = [columns[1], rows[1]];
    for (var i = 0; i < diagonal.length; i++) {
      if (check === diagonal[i]) {
        return true;
      } else {
        return false;
      }
    }
  }

  if (rows[0] === rows[1]) { //Same row
    return true;
    } else if (columns[0] === rows[1]) { //Same column
      return true;
    } else if (checkDiagonal()) { //Same diagonal
      return true;
    } else {
      return false;
    }
  }

var whiteQueen = [0, 5];
var blackQueen = [5, 0];
var generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

