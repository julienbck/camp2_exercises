class Fish {
  constructor(name, sex, number ) {
    this.name = name;
    this.sex = sex;
    this.number = number;
  }
}

class Aquarium {
  constructor(newFish, newAlgae, newCarnFish, newVeganFish) {
    this.fishes = newFish;
    this.aquarium = [newCarnFish, newVeganFish];
    this.algaes = newAlgae;
  }
  addFish (fish) {
    this.fishes.push(fish);
  }
  addAlgae (algae) {
    this.algaes.push(algae);
  }
  endTurn(){

}

class Algae {
  constructor(number) {
    this.number = number;
  }
}





module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};
