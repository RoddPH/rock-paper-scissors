
// Makes a computer random choice
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;

    if (random == 1) {
        return "rock";
    } else if (random == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Gets the human's choice of attack
function getHumanChoice(input) {
   let answer = input.toLowerCase();
    if (input === "rock" || "paper" || "scissors") {
        return answer;
    }
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");


const playerTurn = document.getElementById("playerTurn");
const computerTurn = document.getElementById("computerTurn");

const playerScore = document.getElementById("player");
const computerScore = document.getElementById("computer");

rock.addEventListener("click", e => {
    playGame(1, "rock");
    playerTurn.textContent = symbols.rock;
});

paper.addEventListener("click", e => {
    playGame(1, "paper");
    playerTurn.textContent = symbols.paper;
});

scissors.addEventListener("click", e => {
    playGame(1, "scissors");
    playerTurn.textContent = symbols.scissors;
});

const symbols = {
    rock: "🪨",
    paper: "📄",
    scissors: "✂️"
};

function playGame(round, input) {

    let humanScore = 0, computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log("Its a draw!");
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats rock!")
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats scissors");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beat paper!")
            humanScore++;
        } else {
            console.log(`You lost! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}!`)
            computerScore++;
        }
    }

    for (let i = 0; i < round; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice(input);
        computerTurn.textContent = symbols[computerSelection];

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`YOU WIN! You scored ${humanScore} The opponent scored ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`YOU LOST! You scored ${humanScore} The opponent scored ${computerScore}`);
    } else {
        console.log("The match was a draw!");
    }
}



