
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
function getHumanChoice() {
    let answer = prompt("Enter your attack!");
    return answer.toLowerCase();
}

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
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("You lost! Scissors beat paper!");
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("You lost! Paper beats rock!");
        computerScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("You lost! Rock beats scissors!");
        computerScore++;        
    } else {
        console.log("Invalid input please try again!")
    }

}
const computerSelection = getComputerChoice();
console.log(computerSelection);
const humanSelection = getHumanChoice();


playRound(humanSelection, computerSelection);
console.log(humanScore);




