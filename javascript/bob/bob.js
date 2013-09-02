function Bob() {
  this.hey = function hey(statement) {
    if (nothing(statement)) {
      return 'Fine. Be that way!';
    } else if (yelling(statement)) {
      return 'Woah, chill out!';
    } else if (question(statement)) {
      return 'Sure.';
    } else {
      return 'Whatever.';
    }
  };

  function nothing(statement) {
    return !statement.trim();
  }


  function yelling(statement) {
    return statement.toUpperCase() === statement;
  }

  function question(statement) {
    return statement.slice(-1) === '?';
  }
}

module.exports = Bob;
