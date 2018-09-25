var squareCode = function(message) {
  var letters = message.split("");
  var square = "";

  //Determine size of square/rectangle from letters
  var rows = Math.round(Math.sqrt(letters.length));
  var columns = rows;
  if (rows * rows < letters.length) {
    columns += 1;
  }

  var counter = 0;
  var rowCounter = 0;
  while (rowCounter < rows && counter !== letters.length) {
    var columnCounter = 0;
    while (columnCounter < columns && counter !== letters.length) {
      square += letters[counter];
      counter++;
      columnCounter++;
    }
    if (counter < letters.length - 1) {
      square += '\n';
    }
    rowCounter++;
  }

  var result = square.split("\n");
  var output = "";
  for (var i = 0; i < result[0].length; i++) {
    for (var j = 0; j < result.length; j++)
      if (result[j].charAt(i)) {
        output += result[j].charAt(i);
      }
    output += " "
  }

  return output;
}

console.log(squareCode("haveaniceday"));
console.log(squareCode("feedthedog"));
console.log(squareCode("chillout"));