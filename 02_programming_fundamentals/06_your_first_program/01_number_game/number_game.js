const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const min = 1;
const max = 100;
const theMisteryNumberAtFind = getRandomArbitrary(min, max);
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * max) + min;
}
console.log(theMisteryNumberAtFind);



function findMisteryNumber(number) {
  const n = parseInt(number, 10);
  if (isNaN(n)) {
    reader.question("Is not a number. Retape \n", findMisteryNumber);
  } else if (n > max || n < min) {
    reader.question("Your number is not in range. Retape a number between 1 and 100 \n", findMisteryNumber);
  } else if (n < theMisteryNumberAtFind ){
    reader.question("Your n is too low. Retape \n", findMisteryNumber);
  } else if (n > theMisteryNumberAtFind ){
    reader.question("Your n is too hight. Retape \n", findMisteryNumber);
  } else if (n === theMisteryNumberAtFind) {
    console.log("You have find the mistery Number");
    reader.close();
  }
}

reader.question("Find the mistery Number between 1 and 100: ", findMisteryNumber);
