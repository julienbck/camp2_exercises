const tree = require('./03_orange_tree');

test('Tree are plant', () => {
  tree.seed();
  expect(tree.alive).toBeTruthy();
});
test('Produce 0 oranges beetween birth and 5 years ', () => {
  tree.seed();
  while (tree.alive && tree.age <= 0 ) {
    tree.ageOneYear();
    if (tree.age === 5){
      break;
    }
  }
  expect(tree.oranges).toEqual(0);
});
test('Produce 10 oranges beetween 5 and 10 years ', () => {
  tree.seed();
  while (tree.alive && tree.age <= 5 ) {
    tree.ageOneYear();
    if (tree.age === 10){
      break;
    }
  }
  expect(tree.oranges).toEqual(10);
});
test('Produce 20 oranges beetween 10 and 20 years ', () => {
  tree.seed();
  while (tree.alive && tree.age <= 10 ) {
    tree.ageOneYear();
    if (tree.age === 20){
      break;
    }
  }
  expect(tree.oranges).toEqual(20);
});
test('Produce 5 oranges beetween 20 and 40 years ', () => {
  tree.seed();
  while (tree.age <= 20 ) {
    tree.ageOneYear();
    if (tree.age === 40){
      break;
    }
  }
  expect(tree.oranges).toEqual(5);
});
test('No produce oranges between 40 and 100 years ', () => {
  tree.seed();

  while (tree.alive && tree.age > 40) {
    tree.ageOneYear();
  }
  expect(tree.oranges).toEqual(0);
});



test('Died after 50 years', () => {
  tree.seed();
  while (tree.alive && tree.age < 100) {
    tree.ageOneYear();
  }
  expect(tree.alive).toEqual(false);
  expect(tree.age).toBeLessThanOrEqual(100);
  expect(tree.age).toBeGreaterThanOrEqual(50);
});

test('Died obligatory if age sup at 100', () => {
  tree.seed();
  tree.age = 101;
  tree.ageOneYear();
  expect(tree.alive).toBe(false);
});

test(`Take 25 cm every year between birth and 10 years old`, () => {
  tree.seed();
  while (tree.age <= 0) {
    tree.ageOneYear();
    if (tree.age === 10){
      break;
    }
  }
  expect(tree.height).toEqual(tree.age * 25);
});

test(`Take 10 cm every year between 10 and 20 years old`, () => {
  tree.seed();
  while (tree.age > 10) {
    tree.ageOneYear();
    if (tree.age === 20){
      break;
    }
  }
  expect(tree.height).toEqual(tree.age * 10);
});

test(`Full size after 40 year`, () => {
  const fullSize = 9 * 25 + 10 * 10;
  tree.seed();
  while (tree.alive && tree.age < 40) {
    tree.ageOneYear();
  }
  expect(tree.height).toEqual(fullSize);
});

test ('We can take orange if tree produce orange',() => {
  tree.seed();
  tree.oranges = 10;
  expect(tree.pickAnOrange()).toEqual(true);
  expect(tree.oranges).toEqual(9);
});
test ("We can't take oranges if no production",() => {
  tree.seed();
  tree.oranges = 0;
  expect(tree.pickAnOrange()).toEqual(false);
  expect(tree.oranges).toEqual(0);
});
