//Randomly retrn either rock paper or scissors
function getComputerChoice(){
    let computerChoice = ["rock", "paper", "scissocrs"];
    return computerChoice[Math.floor(Math.random(computerChoice) * 3)]; 
}

function singleRound(playerSelection, computerSelection){

}

const playerSelection = prompt("Whats ur choice?");
const computerSelection = getComputerChoice();
// console.log(computerSelection)
console.log(playRound(playerSelection, computerSelection));

function game(){
    //call the playround funcction inside of this one to play a 5
    // round game that keeps score and reports a winner or loser at the end
    for (let i = 0; i < 5; i ++){
        
    }

}