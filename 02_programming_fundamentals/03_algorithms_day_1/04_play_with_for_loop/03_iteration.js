// ## Iteration on arrays
//
// -  Create an array called `litteralDigits` from `zero` to `nine` where each array entry is a spelled-out number;
// -  Using `length`, write on `stdout` each values of the table.

const litteralDigits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

for(let  stdout = 0; stdout <= litteralDigits.length; stdout++) {
  stdout.write(litteralDigits[stdout]);
}
