const toWords = require ('./to_words');



test('Display array with all word in sentence', () => {
  const sentenceToTest = "lorem ipsum camp2 test";
  const allWords = sentenceToTest.split(/[.?!, :]+/);
  expect(toWords("lorem ipsum camp2 test")).toEqual(allWords);
});

test('Display array with all word in sentence', () => {
  const sentenceToTest = "lorem ipsum camp2 test";
  const allWords = sentenceToTest.split(/[.?!, :]+/);
  expect(toWords("lorem ipsum camp2 ; / ; / test")).toEqual(allWords);
});

test('Display array with all word in sentence', () => {
  expect(toWords("")).toEqual(undefined);
});
