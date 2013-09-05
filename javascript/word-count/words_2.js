function Words(unparsedString) {
  this.count = getCount(getWords());

  function getCount(words) {
    return words.reduce(function(count, word, index) {
      if (index === 1) {
        count = increment({}, count.toLowerCase());
      }
      return increment(count, word.toLowerCase());
    });
  }

  function getWords() {
    return unparsedString.match(/[a-z\d]*/gi);
  }

  function increment(count, word) {
    if(word) {
      count[word] = (count[word] || 0) + 1;
    }

    return count;
  }
}

module.exports = Words;
