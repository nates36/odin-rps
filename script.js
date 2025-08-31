let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let result = Math.random();
    if (result <= 0.33) {
        return "rock";
    } else if (result > 0.33 && result <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }        
}

function getHumanChoice() {
    let choice;
    do {
        choice = prompt("Enter rock, paper, or scissors: ");
        if (!choice) continue; // if they hit cancel or enter nothing, ask again
        choice = choice.toLowerCase();
    } while (choice !== "rock" && choice !== "paper" && choice !== "scissors");
    
    return choice;
}

// function playRound(humanChoice, computerChoice) {
//     if (humanChoice.toUpperCase() === computerChoice.toUpperCase()) {
//         console.log("It's a tie!");
//     } else if (humanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "SCISSORS") {
//         humanScore += 1;
//         console.log("Human wins, 1 point!"); 
//     } else if (humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "ROCK") {
//         humanScore += 1;
//         console.log("Human wins, 1 point!");
//     } else if (humanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase() === "PAPER") {
//         humanScore += 1;
//         console.log("Human wins, 1 point!"); 
//     } else {
//         computerScore += 1;
//         console.log("Computer wins, 1 point!");
//     }
// }

function playGame(humanChoice, computerChoice) {
    let rounds = 5;
    for (let i = 0; i < rounds; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        if (humanChoice.toUpperCase() === computerChoice.toUpperCase()) {
            console.log("It's a tie! No points!");
        } else if (humanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "SCISSORS") {
            humanScore += 1;
            console.log("Human wins, 1 point!");
        } else if (humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "ROCK") {
            humanScore += 1;
            console.log("Human wins, 1 point!");
        } else if (humanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase() === "PAPER") {
            humanScore += 1;
            console.log("Human wins, 1 point!");
        } else {
            computerScore += 1;
            console.log("Computer wins, 1 point!");
        }
    }
    console.log("Human: " + humanScore + ", Computer: " + computerScore)
    if (humanScore === computerScore) {
        console.log("It's a tie!");
    } else if (humanScore > computerScore) {
        console.log("HUMAN WINS!");
    } else {
        console.log("COMPUTER WINS!");
    }
}

playGame();