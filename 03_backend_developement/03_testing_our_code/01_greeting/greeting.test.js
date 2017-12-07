const greet = require ('./greeting');

test('Display Hello World', () => {
  expect(greet()).toBe("Hello WORLD!");
});

test('Display Hello JULIEN !', () => {
  expect(greet("julien")).toBe("Hello JULIEN!");
});

test('Display Hello WORLD ! if name is e.g:null', () => {
  expect(greet(null)).toBe("Hello WORLD!");
});
