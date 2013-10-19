function toSortedString(word) {
  return word.toLowerCase().split('').sort().toString();
}

function Anagram(actual_word) {
  var actual_sorted = toSortedString(actual_word);

  this.match = function match(test_words) {
    return test_words.filter(function(test_word) {
      test_sorted = toSortedString(test_word);

      return actual_sorted == test_sorted && actual_word != test_word;
    });
  };
}

module.exports = Anagram;
