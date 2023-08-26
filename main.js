const playerSelection = prompt("Enter pick? Rock, Paper, Scissor", '');
const computerSelection = getComputerChoice();

function getComputerChoice(){
    const computerPick = Math.floor(Math.random() * 3) + 1;
    if(computerPick === 1){
        return 'Rock';
    } else if (computerPick === 2){
        return 'Paper';
    } else if (computerPick === 3){
        return 'Scissor';
    }
}

