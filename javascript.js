//Randomly retrn either rock paper or scissors
function getComputerChoice(){
    let computerChoice = ["rock", "paper", "scissors"];
    return computerChoice[Math.floor(Math.random(computerChoice) * 3)]; 
}

function playRound(playerSelection, computerSelection){
    // Lowercase all playerSelection to make it case insensitive
    playerSelection = playerSelection.toLowerCase();

    console.log(`players pick ${playerSelection}`)
    
    if (playerSelection === computerSelection){
        console.log("It's a tie");
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("You Lose! Paper beats Rock");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You Win! Rock beats Scissors")
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log("You Win! Paper beats Rock")
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        console.log("You Lose! Scissors beats Paper")
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You Win! Scissors beats Paper")
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        console.log("You Lose! Rock beats Scissors")
    }

}

const playerSelection = prompt("Whats ur choice? Rock/Paper/Scissors");
const computerSelection = getComputerChoice();
// console computerSelection
console.log(`computer picks ${computerSelection}`)
playRound(playerSelection, computerSelection)

// // console.log(computerSelection)
// console.log(playRound(playerSelection, computerSelection));

function game(){
    //call the playround funcction inside of this one to play a 5
    // round game that keeps score and reports a winner or loser at the end
    for (let i = 0; i < 5; i ++){

    }

}