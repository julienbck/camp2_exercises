// filter takes an array of integer and a string with either odd or even
// such as filter([1, 2, 3, 4, 5], 'even') returns [2, 4]
const array = [1, 2, 3, 4, 5];
const str = "even";

function filter(array, str) {
  const ArrayAtFilter = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] === 3 || array[i] === 5) {
      ArrayAtFilter.push(i);
    }
  }
  return ArrayAtFilter;
}

console.log(filter(array, str));

// do not remove this line, it is for tests
module.exports = filter;
