// Add a function `deleteFile` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder).
//
// The function returns a boolean indicating if it successfully removed the file.
const fs = require("fs");


function deleteFile(){
  fs.unlink("./destination.txt", (error) => {
    if(error) {
      console.warn(error);
    }
  console.log("You're file are deleted");
  });

}

deleteFile();

module.exports = deleteFile
