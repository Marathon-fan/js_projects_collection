
//   https://www.hackerrank.com/challenges/js10-date/problem

// tuturial :https://www.hackerrank.com/challenges/js10-date/topics/javascript-dates

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    let names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date(dateString);
    dayName = names[date.getDay()];    
    return dayName;
}

console.log (getDayName("10/11/2009"))
// Return the name of the weekday (not just a number):

// var d = new Date();
// var weekday = new Array(7);
// weekday[0] =  "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";

// var n = weekday[d.getDay()];