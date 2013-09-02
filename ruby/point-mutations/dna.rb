class DNA
  attr_reader :strand

  def initialize(strand)
    @strand = strand
    @distance = 0
  end

  def hamming_distance(other_strand)
    strand.chars.each_index do |index|
      break unless strand[index] && other_strand[index]

      @distance += 1 if strand[index] != other_strand[index]
    end

    @distance
  end
end