const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const battleGrid = {
   "  1" : Array(10).fill(null),
   "  2" : Array(10).fill(null),
   "  3" : Array(10).fill(null),
   "  4" : Array(10).fill(null),
   "  5" : Array(10).fill(null),
   "  6" : Array(10).fill(null),
   "  7" : Array(10).fill(null),
   "  8" : Array(10).fill(null),
   "  9" : Array(10).fill(null),
  " 10" : Array(10).fill(null)
};
function renderCell(cell) {
  if (cell === null) {
    return "~";
  } else {
    return cell;
  }
}

function renderRow(number) {
  const cells = battleGrid[number];
  const row = cells.map(renderCell).join("  ");
  return ` ${number}  ${row}`;
}

function renderGrid() {
  const number = Object.keys(battleGrid);

  const rows = number.map(renderRow).join("\n");

  const header = "    a  b  c  d  e  f  g  h  i  j ";

  return `${header}\n${rows}`;
}

console.log(renderGrid());
