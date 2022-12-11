const condition = ['rock', 'paper', 'scissors']

let playScore = 0;
let pcScore = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.dataset.type;
        playRound(playerSelection, getComputerChoice())
    })
})

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    return condition[choice];
}

function playRound(playerSelection, computerSelection) {
    const playerIndex = condition.indexOf(playerSelection);
    const computerIndex = condition.indexOf(computerSelection);
    if (playerIndex === 2 && computerIndex === 0) {
        changeResult(0, playerSelection, computerSelection);
    }
    else if (playerIndex === 0 && computerIndex === 2) {
        changeResult(1, playerSelection, computerSelection);
    }
    else if (playerIndex > computerIndex) {
        changeResult(1, playerSelection, computerSelection);
    }
    else if (playerIndex < computerIndex) {
        changeResult(0, playerSelection, computerSelection);
    }
    else {
        changeResult(2, playerSelection, computerSelection);
    }
}

function changeResult(win, playerSelection, computerSelection) {
    const result = document.querySelector(".result")
    if (win === 1) {
        result.innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;
        playScore++;
        playerScoreDiv = document.querySelector(".player-score").innerHTML = "Your score: " + parseInt(playScore);
    }
    else if (win === 0) {
        result.innerHTML = `You Lose! ${computerSelection} beats ${playerSelection}`;
        pcScore++;
        pcScoreDiv = document.querySelector(".pc-score").innerHTML = "Computer score: " + parseInt(pcScore);
    }
    else {
        result.innerHTML = `Tie!, ${computerSelection} and ${playerSelection}`;
    }
    findWinner();
}

function findWinner() {
    if (playScore >= 5) {
        document.querySelector(".final-result").innerHTML = "You are final winner!!!"
    }
    else if (pcScore >= 5) {
        document.querySelector(".final-result").innerHTML = "Computer is final winner!!!"
    }
}
