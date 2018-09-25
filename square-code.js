var squareCode = function(message) {
  var letters = message.split("");
  var square = "";
  //Maximum square of 9x9 (81 characters)

  //Determine size of square/rectangle from letters
  var rows = Math.round(Math.sqrt(letters.length));
  var columns = rows;
  if (rows * rows < letters.length) {
    columns += 1;
  }

var result = "";
var counter = 0;
var rowCounter = 0;
  while (rowCounter < rows && counter !== letters.length) {
    var columnCounter = 0;
    while (columnCounter < columns && counter !== letters.length) {
      result += letters[counter];
      counter++;
      columnCounter++;
    }
    if (counter != letters.length - 1) {
      result += '\n';
    }
    rowCounter++;
  }
  return result;
}

console.log(squareCode("haveaniceday"));
console.log(squareCode("feedthedog"));
console.log(squareCode("chillout"));