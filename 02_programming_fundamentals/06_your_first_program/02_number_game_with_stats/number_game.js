const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let counterOftry = 0;

const min = 1;
const max = 100;
const theMisteryNumberAtFind = getRandomArbitrary(min, max);
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * max) + min;
}
console.log(theMisteryNumberAtFind);



function findMisteryNumber(number) {
  counterOftry++;
  const n = parseInt(number, 10);
  if (isNaN(n)) {
    reader.question("Is not a number. \nRetape the number: ", findMisteryNumber);
  } else if (n > max || n < min) {
    reader.question("Your number is not in range. \n Retape a number between 1 and 100: ", findMisteryNumber);
  } else if (n < theMisteryNumberAtFind ){
    reader.question("Your n is too low. \n Retape the number: ", findMisteryNumber);
  } else if (n > theMisteryNumberAtFind ){
    reader.question("Your n is too hight. \n Retape the number: ", findMisteryNumber);
  } else if (n === theMisteryNumberAtFind) {
    if (counterOftry === 1) {
      console.log( "GREAT ! You find number with 1 try !");
    } else {
      console.log(`You have find number with ${counterOftry} try`);
    }
    reader.close();
  }
}


reader.question("Find the mistery Number between 1 and 100: ", findMisteryNumber);
