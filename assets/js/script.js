const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber =Math.floor(Math.random()*3);
    return choices[randomNumber];
}
(getComputerChoice());


function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("computer choice=>" + computerChoice);
    console.log("user choice =>" + userChoice);
}


function main() {
    rock_div.addEventListener('click', function() {
        game("r")
});


    paper_div.addEventListener('click', function() {
        game("p")
});

    scissors_div.addEventListener('click', function() {
        game("s")
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



