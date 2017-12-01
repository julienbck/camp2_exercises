const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const state = {
  a: Array(3).fill(null),
  b: Array(3).fill(null),
  c: Array(3).fill(null)
};

let currentPlayer;

// function hasWinner(){
// }
//
// function gameIsFinished(){
//
// }

function handleInput(inputUser) {
  const coordinate = getCoordinate(inputUser);
  if (coordinate && state[coordinate.letter][coordinate.digit] === null){
    updateState(coordinate);
    
    nextPlayer();
  }else {
    console.log("This is not a valid move or is not empty");
  }
  playTurn();

}
function getCoordinate (inputUser){
  const letter = inputUser[0];
  const digit = inputUser[1] - 1;
  if (state[letter] && state[letter][digit] !== undefined){
    return {letter : letter, digit : digit}
  } else {
    return null;
  }
}



function updateState(coordinate){
  state[coordinate.letter][coordinate.digit] = currentPlayer;

}


function nextPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function playTurn() {
  console.log(renderBoard());
  reader.question(`${currentPlayer}: What is your move? e.g: a1\n`, handleInput);
}

function start() {
  currentPlayer = ["X", "O"][Math.round(Math.random())];

  playTurn();
}

function renderCell(cell) {
  if (cell === null) {
    return "_";
  } else {
    return cell;
  }
}

function renderRow(letter) {
  const cells = state[letter];

  const row = cells.map(renderCell).join(" | ");

  return `${letter} ${row}`;
}

function renderBoard() {
  const letters = Object.keys(state);

  const rows = letters.map(renderRow).join("\n");

  const header = "  1   2   3";

  return `${header}\n${rows}`;
}

start();
