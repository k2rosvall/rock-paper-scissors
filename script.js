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
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            console.log("You lose! Scissors beats Paper");
        } else if (computerSelection === "rock") {
            console.log("You win! Paper beats Rock");
        } else {
            console.log("It's a tie");
            play(getPlayerChoice(), getComputerChoice());
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log("You lose! Rock beats Scissors");
        } else if (computerSelection === "Paper") {
            console.log("You win! Scissors beats Paper");
        } else {
            console.log("It's a tie");
            play(getPlayerChoice(), getComputerChoice());
        }
    } else {
        console.log("wrong choice, try again");
        play(getPlayerChoice(), getComputerChoice());
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; i++) {
        let won = play(getPlayerChoice(), getComputerChoice());
        if (won === 0) {
            playerWins++;
            console.log(`Round ${i + 1}: Player wins`);
        } else {
            computerWins++
            console.log(`Round ${i + 1}: Computer wins`);
        }
    }

    if (playerWins > computerWins) {
        console.log("Player wins");
    } else if (computerWins > playerWins){
        console.log("Computer wins")
    } else {
        console.log("it's a tie!")
    }
}
