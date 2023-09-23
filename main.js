function getComputerChoice() {
  const cPSelection = ['rock', 'paper', 'scissors'];

  const random = Math.floor(Math.random() * cPSelection.length);
  return cPSelection[random];
}

function game() {
  const playerSelection = prompt("Please chose beetween 'rock', 'paper' or 'scissors':");
  const computerSelection = getComputerChoice();
  let playerPoints = 0;
  let computerPoints = 0;

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      console.log(`tie! ${playerSelection} is equal than ${computerSelection}`);
    } else if (
      (playerSelection === 'scissors' && computerSelection === 'paper')
      ||
      (playerSelection === 'paper' && computerSelection === 'rock')
      || 
      (playerSelection === 'rock' && computerSelection === 'scissors')) {
        playerPoints++;
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    } else {
      computerPoints++;
      console.log(`You lose! ${playerSelection} beats ${computerSelection}`);
    }
  }

  playRound(playerSelection.toLocaleLowerCase(), computerSelection);
}

function gameLoop() {
  for(let i = 0; i < 10; i++) {
    if (playerPoints > 4) {
      return `Congratulations, you win, haved ${playerPoints} and computer haved ${computerPoints}`;
    }
    if (computerPoints > 4) {
      return `Game over, you lose, haved ${playerPoints} and computer haved ${computerPoints}`;
    }
    game();
  }
}

gameLoop();
