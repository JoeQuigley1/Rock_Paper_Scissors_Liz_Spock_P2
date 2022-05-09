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
    endGame();
}


function main() {
    rock_div.addEventListener('click', () => game("rock"));

    paper_div.addEventListener('click', () => game("paper"));

    scissors_div.addEventListener('click', () => game("scissors"));

    lizard_div.addEventListener('click', () => game("lizard"));

    spock_div.addEventListener('click', () => game("spock"));
    
}

main();


function endGame() {
    if (playerScore === 10){
        alert("You got 10 points! Nice one! Click ok and choose again to continue playing.");
        playerScore = 0;
        computerScore = 0;
    }
   
    if (computerScore === 10){
        alert("The computer won! Better luck next time. Click ok and choose again to continue playing.");
        playerScore = 0;
        computerScore = 0;
    }
    
}
