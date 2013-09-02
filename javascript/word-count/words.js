function Words(unparsedString) {
  this.count = getCount(getWords());

  function getCount(words) {
    var count = {};

    for(var i = words.length - 1; i >= 0; i--) {
      increment(count, words[i].toLowerCase());
    }

    return count;
  }

  function getWords() {
    return unparsedString.split(/[^a-zA-Z\d]/);
  }

  function increment(count, word) {
    if(word) {
      if(typeof count[word] === 'undefined') {
        count[word] = 1;
      } else {
        count[word]++;
      }
    }
  }
}

module.exports = Words;
