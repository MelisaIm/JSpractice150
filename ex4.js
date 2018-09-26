/*Write a JavaScript program to find the area of a triangle where lengths 
of the three of its sides are 5, 6, 7
 */

// Use Heron's formula A= sq rt (p(p-a)(p-b)(p-c)), p = a+b+c/2

function triangleArea(s1, s2, s3) {
  const halfP = (s1 + s2 + s3) / 2;

  return Math.sqrt(halfP * (halfP - s1) * (halfP - s2) * (halfP - s3));
}

console.log(triangleArea(5, 6, 7));

/*
REVIEW
- Solutions checks out, this took understanding the necessary calculation
- Criticism on the solution given they define (s1+s2+s3)/2 as the perimeter
If we're going to properly label our variables it's half the perimeter. 
Or as I labeled it "halfP" short for halfPerimeter

RESOURCES
https://www.mathopenref.com/heronsformula.html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
*/
