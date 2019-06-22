//This function builds the word into orange slices.

var splitWord = [];
var testWord = "Orange Blossom Trail";
var lettersGuessed = [" ", "!", "@", "#", "$", "%", "^", "&", "*", "a"]
var wordView = "";


var buildOranges = function (wordToGuess) {

    splitWord = testWord.split("");
    console.log(testWord);
    console.log(splitWord);
    for (i = 0; i < splitWord.length; i++) {
        var nextCharacter = splitWord[i];

        var frontOrange = $("<div>").addClass("orangeCardFront");
        var backOrange = $("<div>").addClass("orangeCardBack").text(nextCharacter);
        var wholeOrange=frontOrange.append(backOrange);
        var orangeSlice= $("<div>").attr({class: "orangeCard", id: ("oc" + i)}).html(wholeOrange)
        $("#buildWordHere").append(orangeSlice);
    }

}

buildOranges(testWord);