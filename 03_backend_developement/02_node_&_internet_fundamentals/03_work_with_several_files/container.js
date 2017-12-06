const container = {
  litersOfCoffee : 0
};
function putLitersOfCoffee(numberOfLiters){
  container.litersOfCoffee += numberOfLiters;
}

function consumeLitersOfCoffee(numberOfLiters){
  if (container.litersOfCoffee >= numberOfLiters){
    container.litersOfCoffee -= numberOfLiters;
    return true;
  } else {
    return false;
  }
}



module.exports = {
  putLitersOfCoffee: putLitersOfCoffee,
  consumeLitersOfCoffee: consumeLitersOfCoffee
};
