// Global variables
let playerPoints = 0;
let computerPoints = 0;
let winnerDetermined = false;
const rslt = document.querySelector('.result');

// Return a random number from 1 to the given parameter number
// including the numbers on edge
function random(num) {
  return Math.floor(Math.random() * num);
}

// If the winnder has been determined, the game ends.
function checkWinner() {
  let winner = '';
  if (playerPoints >= 5) {
    winnerDetermined = true;
    winner = 'Player';
  } else if (computerPoints >= 5) {
    winnerDetermined = true;
    winner = 'Computer';
  }
  if (winnerDetermined) {
    rslt.textContent = `${winner} wins the game! End Result: Player ${playerPoints} - ${computerPoints} Computer.`;
  }
}

function loseResults(playerSelection, computerSelection) {
  computerPoints += 1;
  rslt.textContent = `You lose the round! Computer used ${computerSelection} to beat your ${playerSelection}.
  Current Points: Player ${playerPoints} - ${computerPoints} Computer.`;
  checkWinner();
}

function winResults(playerSelection, computerSelection) {
  playerPoints += 1;
  rslt.textContent = `You win the round! Your ${playerSelection} beats the computer's ${computerSelection}.
  Current Points: Player ${playerPoints} - ${computerPoints} Computer.`;
  checkWinner();
}

function drawResults(playerSelection, computerSelection) {
  rslt.textContent = `Draw! Your ${playerSelection} draw against the computer's ${computerSelection}.
  Current Points: Player ${playerPoints} - ${computerPoints} Computer.`;
}

// compare the hand of the players and the computers
function compareSelections(playerSelection, computerSelection) {
  const playerHand = playerSelection.toLowerCase();
  const computerHand = computerSelection;
  if (playerHand === computerHand) {
    drawResults(playerHand, computerHand);
  } else if (playerHand === 'paper') {
    if (computerHand === 'scissors') {
      loseResults(playerHand, computerHand);
    } else if (computerHand === 'rock') {
      winResults(playerHand, computerHand);
    }
  } else if (playerHand === 'rock') {
    if (computerHand === 'paper') {
      loseResults(playerHand, computerHand);
    } else if (computerHand === 'scissors') {
      winResults(playerHand, computerHand);
    }
  } else if (computerHand === 'rock') {
    loseResults(playerHand, computerHand);
  } else if (computerHand === 'paper') {
    winResults(playerHand, computerHand);
  }
}

// computer randomly chooses a hand to play
function computerPlay() {
  let result;
  const randomNumber = random(3);
  if (randomNumber === 1) {
    result = 'paper';
  } else if (randomNumber === 2) {
    result = 'rock';
  } else {
    result = 'scissors';
  }
  return result;
}

let playerSelection = '';
const btn = document.querySelectorAll('.button');
btn.forEach((button) => {
  button.addEventListener('click', () => {
    if (!winnerDetermined) {
      playerSelection = button.textContent;
      compareSelections(playerSelection, computerPlay());
    }
  });
});
