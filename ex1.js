// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const today = new Date(Date.now());
const day = dayOfWeek(today.getDay());

console.log(`Today is ${day}`);
console.log(`Current time is: ${today.getHours()}:${today.getMinutes()}`);

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
