function calculateChange(total, cashGiven) {
  var change = {

  };
  var difference = cashGiven - total;

  if (cashGiven <= total) {
    return 0;
  } else {
      while (difference > 0) {
        if (difference >= 2000) {
          change.twentyDollar = Math.floor(difference / 2000);
          difference = difference % 2000;
        } else if (difference >= 1000) {
            change.tenDollar = Math.floor(difference / 1000);
            difference = difference % 1000;
        } else if (difference >= 500) {
            change.fiveDollar = Math.floor(difference / 500);
            difference = difference % 500;
        } else if (difference >= 200) {
            change.twoDollar = Math.floor(difference / 200);
            difference = difference % 200;
        } else if (difference >= 100) {
            change.oneDollar = Math.floor(difference / 100);
            difference = difference % 100;
        } else if (difference >= 25) {
            change.quarter = Math.floor(difference / 25);
            difference = difference % 25;
        } else if (difference >= 10) {
            change.dime = Math.floor(difference / 10);
            difference = difference % 10;
        } else if (difference >= 5) {
            change.nickel = Math.floor(difference / 5);
            difference = difference % 5;
        } else if (difference >= 1) {
            change.penny = Math.floor(difference / 1);
            difference = difference % 1;
        }
      }
    }
    return change;
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));