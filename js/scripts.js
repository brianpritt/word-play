//THis function takes a sentence string, splits it into an array, and returns an array that only has words that are equal to or over 3 characters.
var overThreeChar = function(longString) {
  //(arrayOfStrings) --> (array)
  var wordList = longString.split(' ');
  var returnArray = [];

  wordList.forEach(function(word){
    if (word.length >= 3) {
      returnArray.push(word);
    };
  });
  return returnArray;
};

var reverseWordOrder = function(arrayOfStrings){
  //(array) --> (array)
  var returnArray = arrayOfStrings.slice().reverse();
  return returnArray;
}



$(document).ready(function(){

    $("#sent-submit").click(function(){
      var sentenceArray = $("#userSentence").val();

      var largeWords = overThreeChar(sentenceArray);
      var reverseWords = reverseWordOrder(largeWords);
      var finalString = reverseWords.join(' ');
      $("#results").text(finalString);
    });
});
