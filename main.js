let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");

buttons.forEach((button) => button.addEventListener("click", ()=>{
    let playerSelection = button.id.toLowerCase();
    let computerSelection = getComputerChoice().toLowerCase();
    // console.log(button.id);
    playRound(playerSelection, computerSelection);
}))
function getComputerChoice(){
    // const computerPick = Math.floor(Math.random() * 3) + 1;
    // console.log(computerPick)
    // if(computerPick === 1){
    //     return 'Rock';
    // } else if (computerPick === 2){
    //     return 'Paper';
    // } else if (computerPick === 3){
    //     return 'Scissor';
    // }
    const computerPick = ['rock', 'paper', 'scissor'];
    return computerPick[Math.floor(Math.random() * 3) + 1];
}

function playRound(playerSelection, computerSelection){
    

    if(playerSelection === computerSelection){
        result.textContent = `both are ${playerSelection}: TIE`;
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper'){
        playerScore += 1;
        result.textContent =  'You win! Rock beats Paper';
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissor'){
        computerScore += 1;
        result.textContent =  'You lose! Rock lose to Scissor';
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore += 1;
        result.textContent =  'You win! Paper beats Rock';
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissor'){
        computerScore += 1;
        result.textContent =  'You lose! Paper lose to Scissor';
    }
    else if (playerSelection === 'scissor' && computerSelection === 'paper'){
        playerScore += 1;
        result.textContent =  'You win! Scissor beats Paper';
    }
    else if (playerSelection === 'scissor' && computerSelection === 'rock'){
        computerScore += 1;
        result.textContent =  'You lose! Scissor lose to Rock';

    }

    if(computerScore === 5){
        result.textContent = 'You Win! Computer Wins, Reload to restart the game';
    } else if (playerScore === 5){
        result.textContent = 'You lose! Computer Wins, Reload to restart the game';
    }
}

// function game(){
//     for(let i = 0; i < 5; i++){
//         const playerSelection = prompt("Enter pick? Rock, Paper, Scissor", '');
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//     }
//     console.log((playerScore > computerScore) ? `Player Win ${playerScore}` : `Computer Win ${computerScore}`);
// }

// game();