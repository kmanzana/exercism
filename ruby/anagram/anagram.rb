class Anagram
  def initialize(word)
    @word = word.downcase
    @letters = canonicalize(word)
  end

  def match(list)
    list.select do |word|
      canonicalize(word) == @letters && @word != word.downcase
    end
  end

  def canonicalize(word)
    word.downcase.chars.sort
  end
end
