var numberGuesser = function() {
  var prompt = require("prompt-sync")();
  var secret = Math.floor((Math.random() * 10) + 1);
  var tries = 0;
  var win = false;
  var numbersGuessed = [];

  while (win === false) {
    var answer = prompt("Guess a number: ");
    var value = parseInt(answer);
    var alreadyGuessed = false;

    //Check if input is a number
    if (Number.isInteger(value) === false) {
      console.log("Not a number! Try again!");
    }

    //Check if number has been already guessed
    else {
      for (var i = 0; i < numbersGuessed.length; i++) {
        var check = parseInt(numbersGuessed[i]);
        if (value === check) {
          alreadyGuessed = true;
          console.log("Already Guessed!");
        }
      }

      //Check if number is correct
      if (alreadyGuessed === false) {
        numbersGuessed.push(value);
        if (value === secret) {
          tries += 1;
          console.log("You got it! You took " + tries + " attempts!");
          win = true;
        } else if (value > secret) {
          tries += 1;
          console.log("Too High!");
        } else if (value < secret) {
          tries += 1;
          console.log("Too Low!");
        }
      }
    }
  }
}

numberGuesser();