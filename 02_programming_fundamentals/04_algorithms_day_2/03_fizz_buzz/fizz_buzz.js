/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:

   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.
*/

function fizzBuzz(numbers) {
  const fizzbuzzedNumbers = [];
  for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 5 === 0 && numbers[i] % 3 === 0) {
      fizzbuzzedNumbers.push("FizzBuzz");
    }else if (numbers[i] % 5 === 0) {
      fizzbuzzedNumbers.push("Buzz");
    }else if (numbers[i] % 3 === 0){
      fizzbuzzedNumbers.push("Fizz");
    }
    else {
      fizzbuzzedNumbers.push(numbers[i]);

    }
  }



  return fizzbuzzedNumbers;
}


module.exports = fizzBuzz;
