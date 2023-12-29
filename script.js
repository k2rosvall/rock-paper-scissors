function getComputerChoice() {
    const MOVES = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);

    console.log(MOVES[index]);

    return MOVES[index];
}

console.log(getComputerChoice());