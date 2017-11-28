/* Implement a fizzBuzz function as such: `fizzBuzz(element)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:
   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.

   YOU MUST USE array.map
*/

function fizzBuzz(element) {
  if ( element % 3 === 0 && element % 5 === 0 ) {
    return ("FizzBuzz");
  }
  else if ( element % 3 === 0 ) {
    return ("Fizz");
  }
  else if ( element % 5 === 0 ) {
    return ("Buzz");
  }
  else {
    return (element);
  }
}


const fizzBuzzNumberNotMapped = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const fizzBussNumbersMapped = fizzBuzzNumberNotMapped.map(fizzBuzz);

module.exports = fizzBuzz;
