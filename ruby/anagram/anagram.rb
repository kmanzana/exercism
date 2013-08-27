class Anagram
  def initialize(word)
    @word = word
    @letters = word.downcase.split('').sort
  end

  def match(list)
    list.keep_if do |word|
      word.downcase.split('').sort == @letters && @word != word
    end
  end
end