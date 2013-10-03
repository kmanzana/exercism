defmodule SpeechAnalyzer do
  def ignoring?(speech) do
    String.strip(speech) == ""
  end

  def yelling?(speech) do
    String.upcase(speech) == speech
  end

  def questioning?(speech) do
    String.ends_with?(speech, "?")
  end
end

defmodule Teenager do
  import SpeechAnalyzer, only:
    [ignoring?: 1, yelling?: 1, questioning?: 1]

  def hey(speech) do
    cond do
      ignoring?(speech) ->
        "Fine. Be that way!"
      yelling?(speech) ->
        "Woah, chill out!"
      questioning?(speech) ->
        "Sure."
      true ->
        "Whatever."
    end
  end
end
