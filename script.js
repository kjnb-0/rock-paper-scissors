var wins = 0;
var ties = 0;
var losses = 0;

var options = ["R", "P", "S"];

//THIS IS WHERE A POPUP ASKS THE USER TO INPUT THEIR GUESS
var startGame = function () {
    var userInput = prompt("Enter R, P or S:");

    //IF USER WANTS TO CANCEL, EXIT THE FUNCTION
    if (!userInput) {
        return;
    }

    //ONLY UPPERCASE LETTERS WORK!
    userInput = userInput.toUpperCase();


    //THIS IS WHERE WE GET THE COMPUTERS RANDOM INPUT
    var index = Math.floor(Math.random() * options.length);
    var computerSelection = options[index];

    alert("The computer chose " + computerSelection);

    //THIS IS WHERE WE COMPARE USER ANSWERS TO COMPUTER ANSWERS
    if (userInput === computerSelection) {
        ties++;
        alert("You tied the computer!");
    } else if (
        (userInput === "R" && computerSelection === "P") ||
        (userInput === "P" && computerSelection === "S") ||
        (userInput === "S" && computerSelection === "R")) {
        losses++;
        alert("The computer beat you!");
    } else {
        wins++;
        alert("You won!");
    }

    //SCORES
    alert(
        "Scores: \nWINS: " + wins + "\nLOSSES: " + losses + "\nTIES: " + ties
    );

    //START GAME OVER AGAIN
    var playAgain = confirm("Play again?");

    if (playAgain) {
        startGame();
    }
}

startGame();




