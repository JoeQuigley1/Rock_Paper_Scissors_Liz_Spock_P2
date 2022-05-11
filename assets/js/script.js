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
const resetButton = document.getElementById("reset-button");


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber =Math.floor(Math.random()*choices.length);
    return choices[randomNumber];
}
(getComputerChoice());

function capitaliseWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${capitaliseWord(playerChoice)}  beats ${capitaliseWord(computerChoice)}. You win!`;
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
        gameOver()
        playerScore = 0;
        computerScore = 0;
        resetScore(); 
    }
   
    if (computerScore === 10){
        gameOver()
        playerScore = 0;
        computerScore = 0;
        resetScore();
    }
    
}

function gameOver() {
    document.getElementById('gameOver').style.display="block";
}

function playAgain() {
    document.getElementById('gameOver').style.display="none"
    resetScore()
}






// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  console.log();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Makes scores automatically reset
resetScore = function() {
    playerScore = 0;
    computerScore = 0;

    document.getElementById("computer-score").innerHTML = computerScore
    document.getElementById("player-score").innerHTML = playerScore
}

// When user clicks on reset button scores will reset
const reset = function() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("computer-score").innerHTML = computerScore
    document.getElementById("player-score").innerHTML = playerScore
}