// Create a function `double` which take an array of integer as parameter and return a new array with all values doubled.
// WARNING: You're not allowed to use `Array.map`!

const arrayAtDouble = [1, 2, 3];
function double (arrayAtDouble){
  const doubleArray = [];
  for (let i = 0; i < arrayAtDouble.length ; i++) {
    doubleArray.push(i * 2);
  }
  return doubleArray;
}

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = double;
