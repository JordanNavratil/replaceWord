var findAndReplace = function(string, original, replacement){

  var wordList = string.split(" ");

  for(var j = 0; j < wordList.length; ++j){
    if(wordList[j] === original){
      wordList[j] = replacement;
    }
  }

  return wordList.join(" ");
};

$(document).ready(function(){
  $("form#inputForm").submit(function(event){
  var inputString = $("input#string").val();
  var inputOriginal = $("input#original").val();
  var inputReplacement = $("input#replacement").val();
  var result = findAndReplace(inputString, inputOriginal, inputReplacement);

  $("#final").text(result);
  $("#result").show();
  event.preventDefault();
  });
});
