function getComputerChoice() {
    const MOVES = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);


    return MOVES[index];
}

function getPlayerChoice() {
    let playerChoice = prompt("Select rock, paper or scissors");
    return playerChoice.toLowerCase();
}

console.log(getComputerChoice());
console.log(getPlayerChoice());