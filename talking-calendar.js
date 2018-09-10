var talkingCalendar = function(date) {
  // Date = "YYYY/MM/DD"
var numbers = date.split("/");
var year = numbers[0];
var month = numbers[1];
var day = numbers[2];

return monthConverter(month) + " " + dayConverter(day) + ", " + year;
}

function monthConverter(month) {
  if (month === 01) {
    return "January";
  } else if (month === 02) {
    return "February";
  } else if (month === 03) {
    return "March";
  } else if (month === 04) {
    return "April";
  } else if (month === 05) {
    return "May";
  } else if (month === 06) {
    return "June";
  } else if (month === 07) {
    return "July";
  } else if (month === 08) {
    return "August";
  } else if (month === 09) {
    return "September";
  } else if (month === 10) {
    return "October";
  } else if (month === 11) {
    return "November"
  } else {
    return "December";
  }
}

function dayConverter(day) {
  var value = Number(day)
  if (value % 10 === 1) {
    return value + "st";
  } else if (value % 10 === 2) {
    return value + "nd";
  } else if (value % 10 === 3) {
    return value + "rd";
  } else {
    return value + "th";
  }
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
