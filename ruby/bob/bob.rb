class Bob
  def hey(what_someone_said)
    phrase = Phrase.new(what_someone_said)
    respond_to phrase
  end

  private

  def respond_to(phrase)
    return 'Fine. Be that way!' if phrase.nothing?
    return 'Woah, chill out!'   if phrase.yelling?
    return 'Sure.'              if phrase.asking?
    'Whatever.'
  end
end

class Phrase
  def initialize(phrase_to_analyze)
    @phrase_to_analyze = phrase_to_analyze
  end

  def nothing?
    phrase_to_analyze.strip.empty?
  end

  def yelling?
    phrase_to_analyze.upcase == phrase_to_analyze
  end

  def asking?
    phrase_to_analyze.end_with? '?'
  end

  private

  attr_reader :phrase_to_analyze
end
