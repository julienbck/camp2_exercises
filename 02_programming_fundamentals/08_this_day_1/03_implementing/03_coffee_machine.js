// See Sparta courses for the exercise summary


const machine = {
  litersOfCoffee : 0,

  fillWithLitersOfCoffee : function (coffeeLiters){
    return this.litersOfCoffee = this.litersOfCoffee + coffeeLiters;
  },
  expresso : function () {
    if (this.litersOfCoffee <= (2/100)){
        return false;
      }else {
        this.litersOfCoffee = this.litersOfCoffee - (8/100);
        return true;
      }
    },
  longCoffee : function(){
    if (this.litersOfCoffee <= (15/100)){
        return false;
      } else {
      this.litersOfCoffee = this.litersOfCoffee - (15/100);
      return true;
    }
  }
}
// Coffee Machine usage. Insert your code above this comment

machine.fillWithLitersOfCoffee(10);
console.log(machine.expresso()) // => true
console.log(machine.litersOfCoffee) // => 9.92
console.log(machine.longCoffee()) // => true
console.log(machine.litersOfCoffee) // => 9.77
// some more people ordering coffee here
console.log(machine.litersOfCoffee) // => 0.02
console.log(machine.expresso()) // => false

module.exports = machine;
