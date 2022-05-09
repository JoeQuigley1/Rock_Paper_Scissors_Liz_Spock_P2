const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock' ];
    const randomNumber =Math.floor(Math.random()*choices.length);
    return choices[randomNumber];
}
(getComputerChoice());


function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("computer choice =>" + computerChoice);
    console.log("user choice =>" + userChoice);
}


function main() {
    rock_div.addEventListener('click', function() {
        game("rock")
});


    paper_div.addEventListener('click', function() {
        game("paper")
});

    scissors_div.addEventListener('click', function() {
        game("scissors")
});

    lizard_div.addEventListener('click', function() {
    game("lizard")
});

    spock_div.addEventListener('click', function() {
    game("spock")
});
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



