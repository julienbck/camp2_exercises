// See Sparta courses for the exercise summary


const orangeTree = {
  height : 0,
  age : 0,
  oranges : 0,
  alive : false,
  seed: function(){
      this.height = 0;
      this.age = 0;
      this.oranges = 0;
      this.alive = true;
  },
  ageOneYear: function(){
    if (this.age >= 0 && this.age < 100){
      this.age = this.age +1;
    } else if (this.age === 100 ){
      this.alive = false;
    }

    if (this.age < 10) {
      this.height = this.height + 25;
    } else if (this.age >= 10 && this.age < 20) {
      this.height = this.height + 10;
    }

    if (this.age >= 5 && this.age < 10){
      this.oranges = 10;
    } else if (this.age >= 10 && this.age < 20) {
      this.oranges = 20;
    } else if (this.age >= 20 && this.age < 40) {
      this.oranges = 5;
    } else if (this.age >= 40 && this.age <= 100) {
      this.oranges = 0;
    }
    if (this.age < 100 && this.age > 50 ){
      this.alive = false;
    }
  },
  pickAnOrange: function() {
    if (this.oranges > 0){ // si par exemple on avait mis !== sauf que si on avait -5 par
      // et bien on pourra quand même retirer des oranges alors qu'il n'y en a plus !!
      this.oranges = this.oranges - 1;
      return true;
    } else if (this.age < 5){
      return false;
    }
  }
}


module.exports = orangeTree;
