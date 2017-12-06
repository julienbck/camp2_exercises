const container = require ("./container");

function fillWithLitersOfCoffee(litersOfCoffee){
  container.putLitersOfCoffee(litersOfCoffee);
}
function expresso(){
  return container.consumeLitersOfCoffee(8/100);
}
function longCoffee(){
  return container.consumeLitersOfCoffee(15/100); //return TRUE ou FALSE dans le container.js
}

module.exports = {
  fillWithLitersOfCoffee : fillWithLitersOfCoffee,
  longCoffee : longCoffee,
  expresso : expresso
};
