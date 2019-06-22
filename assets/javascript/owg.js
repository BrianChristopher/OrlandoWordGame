//This function builds the word into orange slices.

var splitWord = [];
var testWord = "Orange Blossom Trail";
var lettersGuessed = [" ", "!", "@", "#", "$", "%", "^", "&", "*", "a"]
var wordView = "";
var currentBuildRow = 0;



//This function turns the phrase into a string of characters and then displays the characters within the Orange Card slices.
var buildOranges = function (wordToGuess) {
    splitWord = wordToGuess.split("");
    console.log(testWord);
    console.log(splitWord);
    currentBuildRow = 1;

    for (i = 0; i < splitWord.length; i++) {
        var nextCharacter = splitWord[i];

        if (nextCharacter == " ") {
            currentBuildRow++;
        }
        else {
            var frontOrange = $("<div>").addClass("orangeCardFront");
            var backOrange = $("<div>").addClass("orangeCardBack").text(nextCharacter);
            var wholeOrange = frontOrange.append(backOrange);
            var orangeSlice = $("<div>").attr({ class: "orangeCard", id: ("oc" + i) }).html(wholeOrange)
            $("#buildWordHere" + currentBuildRow).append(orangeSlice);
        }
    }
}

var displayWord = function () {
    buildOranges(testWord);
}

buildOranges(testWord);








//This gets the guess from the user
$("#submitUserGuess").on("click", function(event){
    event.preventDefault();
    var letterGuessed = $("#userGuess").val().trim();
    $("#userGuess").val("");
    console.log(letterGuessed);
    //topics.push(newTopic);
    
});
