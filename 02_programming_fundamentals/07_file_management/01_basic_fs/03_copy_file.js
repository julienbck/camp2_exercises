// Add a function `copyPaste` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder). We don't want to override a file if
// it already exists.
//
// The function returns a boolean indicating if it successfully removed the file.
const fs = require('fs');




function copyPaste(){
  fs.access('destination.txt', (err) => {
  if (!err) {
    console.error('Destination.txt already exists');
    return false;
  }
    fs.copyFile('source.txt', 'destination.txt', (error) => {
      if (error){
        console.warn(error);
        return true;
      } else {
        console.log('source.txt was copied to destination.txt');
        return true;
      }
    });
  });
}
copyPaste();

module.exports = copyPaste;
