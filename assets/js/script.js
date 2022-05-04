const buttons = document.getElementsByClassName("game-item");
const playerScore = document.getElementById("score-you");
const computerScore = document.getElementById("score-comp");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];


    for (let button of buttons) {
        button.addEventListener("click", function() {
            let playerChoice = this.getAttribute("data-choice");
            playGame(playerChoice);

        });
 }



function incrementScorePlayer() {

}

function incrementScoreComputer() {
    
}