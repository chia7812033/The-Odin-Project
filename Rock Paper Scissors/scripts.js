const condition = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    return condition[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(playerSelection);
    const playerIndex = condition.indexOf(playerSelection);
    const computerIndex = condition.indexOf(computerSelection);
    if (playerIndex === 2 && computerIndex === 0) {
        return [0, `You Lose! ${computerSelection} beats ${playerSelection}`];
    }
    else if (playerIndex === 0 && computerIndex === 2) {
        return [1, `You Win! ${playerSelection} beats ${computerSelection}`];
    }
    else if (playerIndex > computerIndex) {
        return [1, `You Win! ${playerSelection} beats ${computerSelection}`];
    }
    else if (playerIndex < computerIndex) {
        return [0, `You Lose! ${computerSelection} beats ${playerSelection}`];
    }
    else {
        return [2, "Tie"];
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt();
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection)
        console.log(result[1]);
        if (result[0] === 0) {
            computerScore++;
        }
        else if (result[0] === 1) {
            playerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log('\nYou win');
    }
    else if (playerScore < computerScore) {
        console.log('\nComputer win');
    }
    else {
        console.log('\nNo winner');
    }
}