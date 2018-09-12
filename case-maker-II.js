var camelCase = function(phrase) {
  var words = phrase.split(" ");
  var result = "";
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

var pascalCase = function(phrase) {
  var words = phrase.split(" ");
  var result = "";
  //Uppercase for each word
  for (var i = 0; i < words.length; i++) {
    var firstLetter = words[i].charCodeAt(0);
    if (firstLetter >= 97 && firstLetter <= 122) {
      result += String.fromCharCode(firstLetter - 32) + words[i].substring(1);
    } else {
      result += words[i];
    }
  }
return result;
}

var snakeCase = function (phrase) {
  var words = phrase.split(" ");
  var result = "";
  //Lowercase for all words in phrase separated by underscore
  var firstLetter = words[0].charCodeAt(0);
  for (var i = 0; i < words.length; i++) {
    if (firstLetter >= 65 && firstLetter <= 90) {
      result += String.fromCharCode(firstLetter + 32) + words[i].substring(1) + "_";
    } else if (i === words.length - 1) {
      result += words[i];
    } else {
      result += words[i] + "_";
    }
  }
  return result;
}

var kebabCase = function (phrase) {
  var words = phrase.split(" ");
  var result = "";
  //Lowercase for all words in phrase separated by hyphen
  var firstLetter = words[0].charCodeAt(0);
  for (var i = 0; i < words.length; i++) {
    if (firstLetter >= 65 && firstLetter <= 90) {
      result += String.fromCharCode(firstLetter + 32) + words[i].substring(1) + "-";
    } else if (i === words.length - 1) {
      result += words[i];
    } else {
      result += words[i] + "-";
    }
  }
  return result;
}

var titleCase = function(phrase) {
  var words = phrase.split(" ");
  var result = "";
  //Uppercase for all words in phrase separated by space
  for (var i = 0; i < words.length; i++) {
    var firstLetter = words[i].charCodeAt(0);
    if (firstLetter >= 97 && firstLetter <= 122) {
      result += String.fromCharCode(firstLetter - 32) + words[i].substring(1);
    }
    if (i != words.length - 1) {
      result += " ";
    }
  }
return result;
}

var vowelCase = function(phrase) {
  var words = phrase.split(" ");
  var result = "";
  //Uppercase for all vowels in phrase with words separated by a space
  for (var i = 0; i < words.length; i++) {
    for (var j = 0; j < words[i].length; j++) {
      var letter = words[i].charCodeAt(j);
      if (letter === 97) {
        result += String.fromCharCode(letter - 32);
      } else if (letter === 101) {
        result += String.fromCharCode(letter - 32);
      } else if (letter === 105) {
        result += String.fromCharCode(letter - 32);
      } else if (letter === 111) {
        result += String.fromCharCode(letter - 32);
      } else if (letter === 117) {
        result += String.fromCharCode(letter - 32);
      } else {
        result += String.fromCharCode(letter);
      }
    }
    if (i != words.length - 1) {
      result += " ";
    }
  }
  return result;
}

var consonantCase = function(phrase) {
  var words = phrase.split(" ");
  var result = "";
  //Uppercase for all consonants in phrase with words separated by a space
  for (var i = 0; i < words.length; i++) {
    for (var j = 0; j < words[i].length; j++) {
      var letter = words[i].charCodeAt(j);
      if (letter === 97) {
        result += String.fromCharCode(letter);
      } else if (letter === 101) {
        result += String.fromCharCode(letter);
      } else if (words[i].charCodeAt(j) === 105) {
        result += String.fromCharCode(letter);
      } else if (words[i].charCodeAt(j) === 111) {
        result += String.fromCharCode(letter);
      } else if (words[i].charCodeAt(j) === 117) {
        result += String.fromCharCode(letter);
      } else {
        result += String.fromCharCode(letter - 32);
      }
    }
    if (i != words.length - 1) {
      result += " ";
    }
  }
  return result;
}

var upperCase = function(phrase) {
  var words = phrase.split(" ");
  var result = "";
  for (var i = 0; i < words.length; i++) {
    for (var j = 0; j < words[i].length; j++) {
      var letter = words[i].charCodeAt(j);
      if (letter >= 97 && letter <= 122) {
       result += String.fromCharCode(letter - 32);
      }
      else {
        result += String.fromCharCode(letter);
      }
    }
  }
return result;
}

var lowerCase = function(phrase) {
  var words = phrase.split(" ");
  var result = "";
  for (var i = 0; i < words.length; i++) {
    for (var j = 0; j < words[i].length; j++) {
      var letter = words[i].charCodeAt(j);
      if (letter >= 65 && letter <= 90) {
        result += String.fromCharCode(letter + 32);
      }
      else {
        result += String.fromCharCode(letter);
      }
    }
  }
return result;
}

var makeCase = function(phrase, type){
  //If type is an array, run loops to check for which casing styles to apply with precedence
  if (type.constructor === Array) {
    var result = phrase;
    for (var i = 0; i < type.length; i++) {
      if (type[i] === "camel") {
        result = camelCase(result);
      } else if (type[i] === "pascal") {
        result = pascalCase(result);
      } else if (type[i] === "snake") {
        result = snakeCase(result);
      } else if (type[i] === "kebab") {
        result = kebabCase(result);
      } else if (type[i] === "title") {
        result = titleCase(result);
      }
    }
    for (var i = 0; i < type.length; i++) {
      if (type[i] === "vowel") {
        result = vowelCase(result);
      } else if (type[i] === "consonant") {
        result = consonantCase(result);
      }
    }
    for (var i = 0; i < type.length; i++) {
      if (type[i] === "upper") {
        result = upperCase(result);
      } else if (type[i] === "lower") {
        result = lowerCase(result);
      }
    }
    return result;
  }
  //If type is not an array, apply the casing style
  else {
    if (type === "camel") {
      return camelCase(phrase);
    } else if (type === "pascal") {
      return pascalCase(phrase);
    } else if (type === "snake") {
      return snakeCase(phrase);
    } else if (type === "kebab") {
      return kebabCase(phrase);
    } else if (type === "title") {
      return titleCase(phrase);
    } else if (type === "vowel") {
      return vowelCase(phrase);
    } else if (type === "consonant") {
      return consonantCase(phrase);
    } else if (type === "upper") {
      return upperCase(phrase);
    } else if (type === "lower") {
      return lowerCase(phrase);
    }
  }
}

console.log(makeCase("this is a string", "camel") === "thisIsAString");
console.log(makeCase("this is a string", "pascal") === "ThisIsAString");
console.log(makeCase("this is a string", "snake") === "this_is_a_string");
console.log(makeCase("this is a string", "kebab") === "this-is-a-string");
console.log(makeCase("this is a string", "title") === "This Is A String");
console.log(makeCase("this is a string", "vowel") === "thIs Is A strIng");
console.log(makeCase("this is a string", "consonant") === "THiS iS a STRiNG");
console.log(makeCase("this is a string", ["upper", "snake"]) === "THIS_IS_A_STRING");


