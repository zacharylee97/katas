var multiplicationTable = function(maxValue) {
 var numbers = allNumbers(maxValue);
 var outline = border(maxValue);
 var table = "";
 var counter = 0;
 while (counter < numbers.length) {
  for (var i = 0; i < maxValue; i++) {
    table += outline + "\n|";
      for (var j = 0; j < maxValue; j++) {
        table += " " + numbers[counter] + spacing(maxValue, numbers, counter);
        counter++;
      }
    table += "\n";
    }
   }
  table += outline;
  return table;
}

function allNumbers(maxValue) {
  var result = [];
  for (var i = 1; i <= maxValue; i++) {
    for (var j = 1; j <= maxValue; j++) {
      result.push(i * j);
    }
  }
  return result;
}

var border = function(maxValue) {
  var result = "+";
  var cell = "";
  if (maxValue * maxValue < 10) {
    cell = "---+";
  } else if (maxValue * maxValue < 100) {
    cell = "----+";
  } else {
    cell = "-----+";
  }
  for (var i = 0; i < maxValue; i++) {
    result += cell;
  }
  return result;
}

var spacing = function (maxValue, array, counter) {
  var result = "";
  if (maxValue * maxValue < 10) {
    result = " |"
  }
  else if (maxValue * maxValue < 100) {
    if (array[counter] < 10) {
      result = "  |";
    } else if (array[counter] < 100) {
      result = " |";
    } else {
      result = "|";
    }
  } else {
    if (array[counter] < 10) {
      result = "   |";
    } else if (array[counter] < 100) {
      result = "  |";
    } else {
      result = " |";
    }
  }
  return result;
}


console.log(multiplicationTable(10));

