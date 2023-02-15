let playerScore = 0;
let computerScore = 0;

//Randomly return either rock paper or scissors
function getComputerChoice(){
    
    let computerChoice = ["rock", "paper", "scissors"];
    // computer random pick from 0 - rock 1 - paper 2 - scissors
    return computerChoice[Math.floor(Math.random(computerChoice) * 3)]; 
}

function playRound(playerSelection, computerSelection){
    // Lowercase all playerSelection to make it case insensitive
    playerSelection = playerSelection.toLowerCase();

    // console playerSelection
    console.log(`players pick ${playerSelection}`)
    // Rock Paper Scissors comparing who will win
    if (playerSelection === computerSelection){
        console.log("It's a tie");
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("You Lose! Paper beats Rock");
        computerScore += 1;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You Win! Rock beats Scissors")
        playerScore += 1;
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log("You Win! Paper beats Rock")
        playerScore += 1;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        console.log("You Lose! Scissors beats Paper")
        computerScore += 1;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You Win! Scissors beats Paper")
        playerScore += 1;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        console.log("You Lose! Rock beats Scissors")
        computerScore += 1;
    }

}

// Declare playerSelection
const playerSelection = prompt("Whats ur choice? Rock/Paper/Scissors");
// Declare computerSelection
const computerSelection = getComputerChoice();
// console computerSelection
console.log(`computer picks ${computerSelection}`)

// Function Invocation
// playRound(playerSelection, computerSelection)
// // console.log(computerSelection)
// console.log(playRound(playerSelection, computerSelection));

function game(){
    playRound(playerSelection, computerSelection)
    for (let i = 0; i < 5; i ++){
        playRound(playerSelection, computerSelection)
    }

    if (computerScore > playerScore){
        console.log("Computer won the game")
    }
    else if (playerScore > computerScore){
        console.log("Player won the game");
    } else {
        console.log("It's a tie")
    }

}