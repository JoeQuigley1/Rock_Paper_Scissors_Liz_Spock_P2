// Declare constants for DOM elements
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

/**
 * Lists the choices
 * and generates the computer choice by using a random number from the array of choices
 */  
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber =Math.floor(Math.random()*choices.length);
    return choices[randomNumber];
}
// Gets computer choice
(getComputerChoice());

// Capitalises each word in the result section
function capitaliseWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Finds the player score and increments it
 * inserts the result string into the result section
 * adds CSS styling to the icons once cliced
 * removes the styling
 */
function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${capitaliseWord(playerChoice)}  beats ${capitaliseWord(computerChoice)}. You win!`;
    document.getElementById(playerChoice).classList.add('winner');
    setTimeout(function() {document.getElementById(playerChoice).classList.remove('winner'); }, 200);
}

/**
 * Finds the computer score and increments it
 * inserts the result string into the result section
 * adds CSS styling to the icons once cliced
 * removes the styling
 */
function lose(playerChoice, computerChoice) {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${capitaliseWord(playerChoice)}  loses to ${capitaliseWord(computerChoice)}. You lost!`;
    document.getElementById(playerChoice).classList.add('loser');
    setTimeout(function() {document.getElementById(playerChoice).classList.remove('loser'); }, 200);
}
// Maintains the score and displays a string in the result
function draw(playerChoice, computerChoice) {
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${capitaliseWord(playerChoice)} is the same as ${capitaliseWord(computerChoice)}. It's a draw!!`;
    document.getElementById(playerChoice).classList.add('draw');
    setTimeout(function() {document.getElementById(playerChoice).classList.remove('draw'); }, 200);
}

// Compares the all of the possible combinations and gives back either win lose or draw
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

// Add event listeners to all icons
function main() {
    rock_div.addEventListener('click', () => game("rock"));

    paper_div.addEventListener('click', () => game("paper"));

    scissors_div.addEventListener('click', () => game("scissors"));

    lizard_div.addEventListener('click', () => game("lizard"));

    spock_div.addEventListener('click', () => game("spock"));
    
}
main();

// Gives the game and end when either the user or computer gets to 10 points
function endGame() {
    if (playerScore === 10){
        playerWin();
        playerScore = 0;
        computerScore = 0; 
    }
    if (computerScore === 10){
        compWin();
        playerScore = 0;
        computerScore = 0;
        
    }
}

// Styles the pop up message if the computer wins 
function compWin() {
    document.getElementById('gameOver').style.display="block";
    document.getElementById('player-win').style.display ="none";
    document.getElementById('player-lose').style.display ="block";
}
// Styles the pop up message when the player wins
function playerWin(){
    document.getElementById('gameOver').style.display ="block";
    document.getElementById('player-lose').style.display ="none";
    document.getElementById('player-win').style.display ="block";
}
// Rmoves the pop up messages and resets the score 
function playAgain() {
    document.getElementById('gameOver').style.display="none";
    document.getElementById('player-win').style.display ="none";
    document.getElementById('player-lose').style.display ="none";
    resetScore();
}
// Gives the user the option to X out of the pop up without resetting score
function giveUp() {
    document.getElementById('gameOver').style.display="block";
    document.getElementById('gameOver').style.display="none";
}
// Gets the modal
const modal = document.getElementById("myModal");

// Gets the button that opens the modal
const btn = document.getElementById("myBtn");

// Gets the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, opens the modal
btn.onclick = function() {
  modal.style.display = "block";
  console.log();
};

// When the user clicks on <span> (x), closes the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, closes it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Makes scores automatically reset
resetScore = function() {
    playerScore = 0;
    computerScore = 0;

    document.getElementById("computer-score").innerHTML = computerScore;
    document.getElementById("player-score").innerHTML = playerScore;
};

// When user clicks on reset button scores will reset
let reset = function() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("computer-score").innerHTML = computerScore;
    document.getElementById("player-score").innerHTML = playerScore;
};