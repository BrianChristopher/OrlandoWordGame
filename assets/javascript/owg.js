//GLOBAL VARIABLES
var roadList = ["Alafaya Trail", "Anderson Street", "Bumby Avenue", "Chickasaw Trail", "Church Street", "Colonial Drive", "Conroy Road", "Corrine Drive", "Curry Ford Road", "Econlockhatchee Trail", "Goldenrod Road", "Hiawassee Road", "International Drive", "John Young Parkway", "Kirkman Road", "Lake Underhill Road", "Michigan Street", "Mills Avenue", "Narcoossee Road", "Orange Avenue", "Orange Blossom Train", "Pine Hills Road", "Princeton Street", "Robinson Street", "Sand Lake Road", "Semoran Boulevard", "Silver Star Road", "Universal Boulevard", "University Boulevard"];
var splitWord = [];
var testWord = "Orange Blossom Trail";
//The length of this array before any letters are pushed is 39
var lettersGuessedArray = [" ", "!", "@", "#", "$", "%", "^", "&", "*", "~", "`", "[", "]", "{", "}", "-", "_", "+", "=", "/", ",", ".", "/", "<", ">", "?", ";", ":", '"', "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var wordView = "";
var currentBuildRow = 0;



var randomRoad = roadList[Math.floor(Math.random() * roadList.length)];
console.log(randomRoad);

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
            var wholeOrange = $("<div>").attr({ class: "orangeCard", id: ("oc" + i) }).append(frontOrange, backOrange);
            $("#buildWordHere" + currentBuildRow).append(wholeOrange);
        }
    }
}

// var displayWord = function () {
//     buildOranges(testWord);
// }

buildOranges(randomRoad);

// console.log(lettersGuessedArray.length)






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
        flipLetter(checkLetter(lowerGuess));
        flipLetter(checkLetter(upperGuess));

    }





});


var checkLetter = function (guess) {
    var matchIndex = 0;
    var matchIndexArray = [];
    var lastChecked = 0;

    while (matchIndex != -1) {
        matchIndex = splitWord.indexOf(guess, lastChecked)

        if (matchIndex >= 0) {
            matchIndexArray.push(matchIndex);
            lastChecked = matchIndex + 1;
        }
    }

    //console.log(matchIndexArray);
    return matchIndexArray;
}

console.log(checkLetter("s"));

// var flipLetter = function () {
//     $("#oc3").addClass("flipped")
// }
// flipLetter();   

var flipLetter = function (matchIndexArray) {
    for (i = 0; i < matchIndexArray.length; i++) {
        document.getElementById("oc" + matchIndexArray[i]).className = "orangeCard flipped";
    }
}

// flipLetter(checkLetter("s"));
