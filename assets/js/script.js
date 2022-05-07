const buttons = document.querySelectorAll(".game-item");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];


for (let button of buttons) {
    button.addEventListener("click", function() {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

function playGame(playerChoice) {

    playerImage.src =`assets/images/${choices[playerChoice]}.png`;
    computerImage.alt = choices[computerChoice];    

    let computerChoice = Math.floor(Math.random() * choices.length);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    
    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(result);
}

function incrementScorePlayer() {

} 

function incrementScoreComputer() {
    
}