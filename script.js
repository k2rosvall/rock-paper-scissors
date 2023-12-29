const MOVES = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);

    console.log(`Computer chose: ${MOVES[index]}`);
    return MOVES[index];
}

function getPlayerChoice() {
    let playerChoice;
    do {
        playerChoice = prompt("Please select rock, paper or scissors").toLowerCase();
      } while (!MOVES.includes(playerChoice));

    console.log(`Player chose: ${playerChoice}`)
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    const WINNING_COMBINATIONS = ["rock,scissors", "paper,rock", "scissors,paper"];
    let combination = [playerSelection, computerSelection].join();
    if (playerSelection === computerSelection) {
        console.log("It's a tie, try again!");
        playRound(getPlayerChoice(), getComputerChoice());
    }
    else if ( WINNING_COMBINATIONS.includes(combination)) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return "player";
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return "computer";
    }
}

function game() {
    let playerWins, computerWins = 0;
    for(let i = 0; i < 5; i++) {
        let winner = playRound(getPlayerChoice(), getComputerChoice());
        if (winner === "player") {
            playerWins++;
            console.log(`Round ${i + 1}: Player wins`);
        } else {
            computerWins++
            console.log(`Round ${i + 1}: Computer wins`);
        }

        if (playerWins === 3) {
            console.log("Player wins the game!");
            i = 5;
        } else if (computerWins === 3) {
            console.log("Computer wins the game!");
            i = 5;
        }
    }
}

game()
