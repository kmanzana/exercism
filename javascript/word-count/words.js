function Words(unparsedString) {
  this.count = getCount(getWords());

  function getCount(words) {
    return words.reduce(function(count, word) {
      return increment(count, word.toLowerCase());
    }, {});
  }

  function getWords() {
    return unparsedString.match(/\w+/g);
  }

  function increment(count, word) {
    count[word] = count[word] + 1 || 1;

    return count;
  }
}

module.exports = Words;
