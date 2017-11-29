// Using the file creation commands, create a touch function that mimics the behavior of the Unix command.
const fs = require('fs');

function touch(){
  fs.access('destination.txt', (err) => {
    if (!err) {
      fs.appendFile("destination.txt", " This is my text.", (error) => {
        if(error) {
          console.warn(error);
          return;
        }
        console.log("Updated!");
      });
    } else {
      fs.writeFile("destination.txt", "Hey there!", (error) => {
      if(error) {
        console.warn(error);
        return;
      }
      console.log("The file was created!");
    });
  }
});
}

touch();

module.exports = touch;
