function getComputerChoice() {
    const MOVES = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);

    return MOVES[index];
}

function getPlayerChoice() {
    let playerChoice = prompt("Select rock, paper or scissors");
    return playerChoice.toLowerCase();
}

function play(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            console.log("You lose! Paper beats Rock");
        } else if (computerSelection === "scissors") {
            console.log("You win! Rock beats scissors");
        } else {
            console.log("It's a tie");
            play(getPlayerChoice(), getComputerChoice());
        }
    }
}


play(getPlayerChoice(), getComputerChoice());