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


RESOURCES
*/
