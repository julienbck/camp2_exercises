function toWords(sentence) {
  const allWords = sentence.split(/[.?!,;/aA :]+/).filter(word => word !== "");
  if (sentence === ""){
    return undefined;
  } else {
    return allWords;
  }
}

console.log(toWords("Allllooohefbjkfe / / alllood "));
module.exports = toWords;
