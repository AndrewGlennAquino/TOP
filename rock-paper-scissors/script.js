let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomValue = Math.floor(3 * Math.random());
    switch(randomValue) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice() {
    const choice = window.prompt('Enter your choice: rock, paper, or scissors');
    return choice;
}

function humanWin(humanChoice, computerChoice) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
    console.log(`Score:\nHuman: ${humanScore}\nComputer: ${computerScore}`);
}

function computerWin(humanChoice, computerChoice) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
    console.log(`Human: ${humanScore}\nComputer: ${computerScore}`);
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    if(humanChoice == 'rock') {
        if(computerChoice == 'rock') {
            console.log(`Tie! You both chose ${humanChoice}`);
        } else if(computerChoice == 'paper') {
            computerWin(humanChoice, computerChoice);
        } else {
            humanWin(humanChoice, computerChoice)
        }
    } else if(humanChoice == 'paper') {
        if(computerChoice == 'rock') {
            humanWin(humanChoice, computerChoice)
        } else if(computerChoice == 'paper') {
            console.log(`Tie! You both chose ${humanChoice}`);
        } else {
            computerWin(humanChoice, computerChoice)
        }
     } else {
        if(computerChoice == 'rock') {
            computerWin(humanChoice, computerChoice)
        } else if(computerChoice == 'paper') {
            humanWin(humanChoice, computerChoice)
        } else {
            console.log(`Tie! You both chose ${humanChoice}`);
        }
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}

playGame();