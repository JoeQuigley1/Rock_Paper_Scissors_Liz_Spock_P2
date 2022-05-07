const buttons = document.getElementsByClassName("game-item");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

/**
 * Add event listener to all buttons
 */
for(let button of buttons){
    button.addEventListener("click", function(){
        let playerChoice = this.getAttribute("data-choice")
    });
    console.log("clicked")
}

function playGame(){

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoice= Math.floor(Math.random() * 5);

    computerImage = `assets/images${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

}


let rulesExplanation = document.getElementById("rules");


function incrementScorePlayer() {

} 

function incrementScoreComputer() {
    
}