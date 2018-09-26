// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const today = new Date(Date.now());
const day = dayOfWeek(today.getDay());

console.log(`Today is ${day}`);
console.log(
  `Current time is: ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
);

function dayOfWeek(num) {
  switch (num) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wedneday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "ERROR";
  }
}

/*
REVIEW:
https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php
- Could use array index instead of switch case
- There is a .getSeconds() method
- The logic in the solution goes a step further to show "Noon" or "Midnight" in standard 12hr clock
whereas my solution just uses the military standard time 24hr clock
- My critique of the solution is that the time formatting is ugly 10PM : 30 : 38 should be 10:30:38 PM

RESOURCES USED:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours
*/
