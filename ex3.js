/* Write a JavaScript program to get the current date.  Go to the editor
Expected Output : 
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy */

const today = new Date(Date.now());

function prepend(num) {
  num = num.toString();

  if (num.length < 2) {
    return `0${num}`;
  }

  return num;
}

console.log(
  `${prepend(today.getMonth() + 1)}/${prepend(
    today.getDate()
  )}/${today.getFullYear()}`
);

/*
REVIEW
- The solution checks if dd or mm is less than 10, which makes sense, 
my solution checks for strict length which is the same but potentially
more flexible
- Overall happy with my solution, initially I thought of using an array for
the months, but all I had to do was add 1 to the value

RESOURCES
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate
https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-3.php
*/
