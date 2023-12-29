function getComputerChoice() {
    const MOVES = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);

    console.log(`Computer chose: ${MOVES[index]}`);
    return MOVES[index];
}

function getPlayerChoice() {
    let playerChoice = prompt("Select rock, paper or scissors");
    console.log(`Player chose: ${playerChoice.toLowerCase()}`)
    return playerChoice.toLowerCase();
}

function evaluateChoices(playerSelection, computerSelection) {
    const WINNING_COMBINATIONS = ["rock,scissors", "paper,rock", "scissors,paper"];
    let combination = [playerSelection, computerSelection].join();
    if (playerSelection === computerSelection) {
        console.log("It's a tie, try again!");
        evaluateChoices(getPlayerChoice(), getComputerChoice());
    }
    else if ( WINNING_COMBINATIONS.includes(combination)) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return 0;
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return 1;
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; i++) {
        let won = evaluateChoices(getPlayerChoice(), getComputerChoice());
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
