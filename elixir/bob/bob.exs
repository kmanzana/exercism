defmodule Teenager do
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

  defp ignoring?(speech) do
    String.strip(speech) == ""
  end

  defp yelling?(speech) do
    String.upcase(speech) == speech
  end

  defp questioning?(speech) do
    String.ends_with?(speech, "?")
  end
end
