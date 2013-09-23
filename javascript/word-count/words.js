function getCount(words) {
  return words.reduce(function(count, word) {
    return increment(count, word.toLowerCase());
  }, {});
}

function getWords(unparsedString) {
  return unparsedString.match(/\w+/g);
}

function increment(count, word) {
  count[word] = count[word] + 1 || 1;

  return count;
}

function Words(unparsedString) {
  var words = getWords(unparsedString);

  this.count = getCount(words);
}

module.exports = Words;
