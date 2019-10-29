// var sentenceSplitter = function(sentence){
//   return sentence.split("")
// // }
// var vowelRemover = function(vowel) {
//   if (vowel[i] === "a" || vowel[i] === "e", "i", "o", "u"])
// }
$(document).ready(function(){
  $('#wordForm').submit(function(event){
    event.preventDefault();
    var sentence = $('input#sentence').val();
    console.log(sentence);
    const vowels = ["a", "e", "i", "o", "u"];
    var splitSentence = sentence.split("")
    console.log(splitSentence);
    // var finalSentence = splitSentence.forEach(function(letter, i){
    for(var i = 0; i<splitSentence.length; i++){
      if (splitSentence[i] === "a" || splitSentence[i] === "e" || splitSentence[i] === "i" || splitSentence[i] === "o" || splitSentence[i] === "u"){
      console.log(splitSentence[i]);
      return splitSentence[i].replace('-')
    } else {
      console.log("else test");
    }
    }
  });
});
