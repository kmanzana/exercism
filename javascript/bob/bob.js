Bob = function() {
  this.hey = function(statement) {
    this.statement = statement;

    if (this.nothing()) {
      return 'Fine. Be that way!';
    } else if (this.yelling()) {
      return 'Woah, chill out!';
    } else if (this.question()) {
      return 'Sure.';
    } else {
      return 'Whatever.';
    }
  };

  this.nothing = function() {
    return !this.statement.replace(/\s/g, "");
  };

  this.yelling = function() {
    return this.statement.toUpperCase() == this.statement;
  };

  this.question = function() {
    return this.statement.slice(-1) == '?';
  };

};

module.exports = Bob;
