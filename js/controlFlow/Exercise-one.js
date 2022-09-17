// Write a function that takes two numbers
// and returns the max of the two.
let number = max(13, 9);
console.log(number);

// function max(num1, num2) {
//   if (num1 > num2) return num1 + " is greater";
//   else if(num1 < num2) return num2 + " is greater" ;
//   else return 'equal';
// }

function max(a, b) {
//   if (a > b) return a;
//   return b;

//contional operator
  return (a > b) ? a : b;
}
