const numberedMonths = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  "10": "October",
  "11": "November",
  "12": "December"
}

const talkingCalendar = function(date) {
  let dateStringArr = date.split("/");
  let day = dateStringArr[2];
  let month = numberedMonths[dateStringArr[1]];
  let year = dateStringArr[0];
  let suffix = "";

  if (day[0] === "0") {
    day = day[1]
  }

  if (day === "1" || day === "21" || day === "31") {
    suffix = "st";
  } else if (day === "2" || day === "22") {
    suffix = "nd";
  } else if (day === "3" || day === "23") {
    suffix = "rd";
  } else {
    suffix = "th";
  }
  return month + " " + day + suffix + ", " + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// EXPECTED OUTPUT:
// December 2nd, 2017
// November 11th, 2007
// August 24th, 1987

