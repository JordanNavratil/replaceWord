var replaceWord = function(string, original, replacement){
  var wordList = string.split(" ");

  for(var j = 0; j < wordList.length; ++j){
    if(wordList[j] === original){
      wordList[j] = replacement;
      console.log(wordList);
    }
  }

  return wordList.join(" ");
};

$(document).ready(function(){
  $("form#replaceWord").submit(function(event){
  var inputString = $("input#string").val();
  var inputOriginal = $("input#original").val();
  var inputReplacement = $("input#replacement").val();
  var result = replaceWord(inputString, inputOriginal, inputReplacement);

  $("#final").text(result);
  $("#result").show();
  event.preventDefault();
  });
});
