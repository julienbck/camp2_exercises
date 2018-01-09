function go({speed = 4, hyperdrive = false, frobnifier = true}) {
  console.log("speed=", speed, "hyperdrive:", hyperdrive, "frobnifier:", frobnifier);
}


go({ speed : 5 });

function lastIndexOf(arr, elt, start = -1) {
  return start;
}


console.log(lastIndexOf([1, 2, 1, 2], 2));

function replace(array, from, to, elements) {
  array.splice.apply(array, [from, to - from].concat(elements));
}

const testArray = [1, 2, 100, 100, 6];
replace(testArray, 2, 4, [3, 4, 5]);
console.log(testArray);

function copyReplace(array, from, to, elements) {
  return array.slice(0, from).concat(elements).concat(array.slice(to));
}

console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]));


module.exports = {
  go:go,
  lastIndexOf : lastIndexOf,
  replace : replace,
  copyReplace : copyReplace
};
