var repeatNumbers = function(data) {
  var result = "";
  /*Read through array and save value and number of repeats*/
  for (var i = 0; i < data.length; i++) {
    var value = data[i][0];
    var repeats = data[i][1];
    /*Repeat value for given number of repetitions*/
    for (var j = 0; j < repeats; j++) {
      result += value;
    }

/*Add comma unless it's the last number*/
    if (i < data.length && i != data.length - 1){
      result += ", ";
    }
  }
  return result;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

