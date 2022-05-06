const buttons = document.getElementsByClassName("game-item");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];


    for (let button of buttons) {
        button.addEventListener("click", function() {
            let playerChoice = this.getAttribute("data-choice");
            playGame(playerChoice);

        });
 }

let computerChoice= Math.floor(Math.random() * 5);
let rulesExplanation = document.getElementById("rules");


function incrementScorePlayer() {

} 

function incrementScoreComputer() {
    
}