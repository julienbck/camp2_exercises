// My finder in terminal
let fs = require('fs');
let path = require('path');
let listingDirectory = listFileInTheDirectory();

const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("Welcome in your Finder");

function listFileInTheDirectory (){
  let files = fs.readdirSync('../');
  return files;
}

for (let i in listingDirectory)
{
      console.log(" " + listingDirectory[i]);
}

let directoryWhoAreSelect = selectDirectory();
function selectDirectory (NumberOfDirectory){
reader.question("select number of NumberOfDirectory :", (NumberOfDirectory) => {
  console.log(`you have choose  ${NumberOfDirectory}!`);
  reader.close();
});
}
function listFileInTheDirectorySelected (){
  let files = fs.readdirSync('./');
  return files;
}
for (let i in listFileInTheDirectorySelected)
{
      console.log(" " + listFileInTheDirectorySelected[i]);
}
