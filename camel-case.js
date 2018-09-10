var camelCase = function(phrase) {
  var words = phrase.split(" ");
  var result = "";
  // A-Z = 65-90;
  //a-z = 97-122;
  //Lowercase for first word in phrase
  var firstLetter = words[0].charCodeAt(0);
  if (firstLetter >= 65 && firstLetter <= 90) {
    result += String.fromCharCode(firstLetter + 32) + words[0].substring(1);
  } else {
    result += words[0];
  }

  //Uppercase for rest of words in phrase
  for (var i = 1; i < words.length; i++) {
    var firstLetter = words[i].charCodeAt(0);
    if (firstLetter >= 97 && firstLetter <= 122) {
      result += String.fromCharCode(firstLetter - 32) + words[i].substring(1);
    } else {
      result += words[i];
    }
  }
return result;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
