//This function builds the word into orange slices.

var splitWord = [];
var testWord = "Orange Blossom Trail";
//The length of this array before any letters are pushed is 39
var lettersGuessedArray = [" ", "!", "@", "#", "$", "%", "^", "&", "*", "~", "`", "[", "]", "{", "}", "-", "_", "+", "=", "/", ",", ".", "/", "<", ">", "?", ";", ":", '"', "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
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

console.log(lettersGuessedArray.length)






//This gets the guess from the user
$("#submitUserGuess").on("click", function (event) {
    event.preventDefault();
    var letterGuessed = $("#userGuess").val().trim();
    $("#userGuess").val("");
    console.log(letterGuessed);

    //if letter was already guessed, alert that a new guess is needed
    if (lettersGuessedArray.includes(letterGuessed)) {
        alert("You chose poorly. Guess again");
    }

    else {
        var lowerGuess = letterGuessed.toLowerCase();
        lettersGuessedArray.push(lowerGuess);
        var upperGuess = letterGuessed.toUpperCase();
        lettersGuessedArray.push(upperGuess);
        console.log(lettersGuessedArray);
    }

    

});
