let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");
const playerResult = document.createElement("div");
const computerResult = document.createElement("div");

buttons.forEach((button) => button.addEventListener("click", ()=>{
    let playerSelection = button.id;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}))

function getComputerChoice(){
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

    playerResult.textContent = "Player Score: " + playerScore;
    result.appendChild(playerResult)
    computerResult.textContent = "Computer Score: " + computerScore;
    result.appendChild(computerResult)

    if(computerScore === 5){
        result.textContent = 'You Win! Computer Wins, Reload to restart the game';
    } else if (playerScore === 5){
        result.textContent = 'You lose! Computer Wins, Reload to restart the game';
    }
}
