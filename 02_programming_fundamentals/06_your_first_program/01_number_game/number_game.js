const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const theMisteryNumberAtFind = getRandomArbitrary(1, 100);
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * max) + min;
}
console.log(theMisteryNumberAtFind);



function findMisteryNumber(number) {
  const n = parseInt(number, 10);
  if (n === theMisteryNumberAtFind) {
    console.log("You have find the mistery Number");
    reader.close();
  } else if (n < theMisteryNumberAtFind ){
    reader.question("Your n is too low. Retape \n", findMisteryNumber);
  } else if (n > theMisteryNumberAtFind ){
    reader.question("Your n is too hight. Retape \n", findMisteryNumber);

  }
}

reader.question("Find the mistery Number between 1 and 100: ", findMisteryNumber);
