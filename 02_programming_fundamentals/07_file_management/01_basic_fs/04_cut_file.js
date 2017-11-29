// Cmd-X/Cmd-V as a function
//
// Implement the function cutPaste(sourceFilename, targetFilename)
const fs = require("fs");

function cutPaste (sourceFilename, targetFilename){
  fs.copyFile('source.txt', 'target.txt', (error) => {
    if (error){
      console.warn(error);
      return true;
    } else {
      fs.unlink("./source.txt", (error) => {
        if(error) {
          console.warn(error);
        }
      console.log("You're cut and paste");
      });
    }
  });

}

cutPaste ('source.txt', 'target.txt');


module.exports = cutPaste;
