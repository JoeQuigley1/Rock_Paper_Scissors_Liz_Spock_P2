const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const result_div = document.querySelector("#result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber =Math.floor(Math.random()*choices.length);
    return choices[randomNumber];
}
(getComputerChoice());

function capitaliseWord(word) {
    if (word === "rock" ) return "Rock";
    if (word === "paper") return "Paper";
    if (word === "scissors") return "Scissors";
    if (word === "lizard") return "Lizard";
    return "Spock"
}


function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${capitaliseWord(playerChoice)}  beats ${capitaliseWord(computerChoice)} . You win!`;
}

function lose(playerChoice, computerChoice) {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${capitaliseWord(playerChoice)}  loses to ${capitaliseWord(computerChoice)}. You lost!`;
}

function draw(playerChoice, computerChoice) {
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${capitaliseWord(playerChoice)} is the same as ${capitaliseWord(computerChoice)}. It's a draw!!`;
}

function game(playerChoice) {
    const computerChoice = getComputerChoice();
    switch(playerChoice + computerChoice) {
        case "rockscissors":
        case "rocklizard":
        case "paperspock":
        case "paperrock":
        case "scissorslizard":
        case "scissorspaper":
        case "spockrock":
        case "spockscissors":
        case "lizardpaper":
        case "lizardspock":
            win(playerChoice, computerChoice);
            break;
        case "rockpaper":
        case "rockspock":
        case "paperscissors":
        case "paperlizard":
        case "scissorsrock":
        case "scissorsspock":
        case "spockpaper":
        case "spocklizard":
        case "lizardscissors":
        case "lizardrock":
            lose(playerChoice, computerChoice);
            break;
        case "paperpaper":
        case "scissorsscissors":
        case "rockrock":
        case "spockspock":
        case "lizardlizard":
            draw(playerChoice, computerChoice);
            break;
    }
}


function main() {
    rock_div.addEventListener('click', () => game("rock"));

    paper_div.addEventListener('click', () => game("paper"));

    scissors_div.addEventListener('click', () => game("scissors"));

    lizard_div.addEventListener('click', () => game("lizard"));

    spock_div.addEventListener('click', () => game("spock"));
}

main();


/*const buttons = document.getElementsByClassName("game-item");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const result = document.getElementById("result");*/




/*for (let button of buttons) {
    button.addEventListener("click", function() {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}*/

f/*unction playGame(playerChoice) {

    playerImage.src =`assets/images/${choices[playerChoice]}.png`;
    computerImage.alt = choices[computerChoice];    

    let computerChoice = Math.floor(Math.random() * choices.length);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    
    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(result);
} */

/*const checkWinner= () => {
    switch (playerChoice + computerChoice) {
        case 'scissorspaper':
        case 'scissorslizard':
        case 'rockscissors':
        case 'rocklizard':
        case 'paperrock':
        case 'paperspock':
        case 'spockrock':
        case 'spockscissors':
            resultDisplay.innerHTML = "You win"
            break
    }
}

function incrementScorePlayer() {

} 

function incrementScoreComputer() {
    
}*/



