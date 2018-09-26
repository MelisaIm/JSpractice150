/*
Write a JavaScript program to determine whether a given 
year is a leap year in the Gregorian calendar.
*/

function isLeapYear(year) {
  if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
    return true;
  }
  return false;
}

console.log(isLeapYear(2020));

/*
REVIEW
- I like how the solution file has the user input a year using window.prompt()
- I also like the use of a ternary operation checking for divisibility by 100 first,
then by 400 or by 4 and using the outcome to define true or false
- Coding solution 1, Melisa 0.5

RESOURCES
- Googled Leap Year Rules, they are as follows:
	1. Year can be evenly divided by 4
	2. If the year can be divided by 100, it is NOT a leap year...
	3. Unless it is also divisible by 400
*/
