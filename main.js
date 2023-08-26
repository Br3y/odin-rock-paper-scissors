const playerSelection = prompt("Enter pick? Rock, Paper, Scissor", '');
const computerSelection = getComputerChoice();

function getComputerChoice(){
    const computerPick = Math.floor(Math.random() * 3) + 1;
    console.log(computerPick)
    if(computerPick === 1){
        return 'Rock';
    } else if (computerPick === 2){
        return 'Paper';
    } else if (computerPick === 3){
        return 'Scissor';
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return `both are ${playerSelection}: TIE`;
    }
}

console.log(playRound(playerSelection, computerSelection));