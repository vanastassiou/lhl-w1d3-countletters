function countLetters(input) {
  var result = { };
  for (var letter of input) {
    if (letter !== " ") {
      if (!(letter in result)) {
        result[letter] = 0;
      }
      result[letter]++ ;
    }
  }
  return result;
}

console.log(countLetters("lighthouse in the house"));
