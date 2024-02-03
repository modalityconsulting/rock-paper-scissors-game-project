// ROCK PAPER SCISSORS GAME

function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
}   else { 
    console.log('Please choose rock, paper, or scissors');
}
  
    
}

const userChoice = getUserChoice('Rock'); 
// console.log(userChoice);

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}
// console.log(getComputerChoice());


function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        return 'You won the secret cheat code!';
    }
    
    
    if (userChoice === computerChoice) {
        return('The game was a tie');
    } 

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'You won!'};
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
}
// console.log(determineWinner('rock', 'scissors'));
// console.log(determineWinner('paper', 'scissors'));
// console.log(determineWinner('rock', 'rock'));

function playGame() {
    
    const userChoice = getUserChoice('paper');
    
    const computerChoice = getComputerChoice();
    
    console.log(`Your choice is: ${userChoice}`);
    
    console.log(`The computers choice is: ${computerChoice}`);
    
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
