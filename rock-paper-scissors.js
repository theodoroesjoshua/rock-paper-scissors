let playerPoints = 0;
let computerPoints = 0;

// Return a random number from 1 to the given parameter number
// including the numbers on edge
function random(num) {
  return Math.floor(Math.random() * num);
}

function loseResults(playerSelection, computerSelection) {
  const result = `You Lose! Computer used ${computerSelection} to beat your ${playerSelection}`;
  computerPoints += 1;
  return result;
}

function winResults(playerSelection, computerSelection) {
  const result = `You Win! Your ${playerSelection} beats the computer's ${computerSelection}`;
  playerPoints += 1;
  return result;
}

function drawResults(playerSelection, computerSelection) {
  const result = `Draw! Your ${playerSelection} draw against the computer's ${computerSelection}`;
  return result;
}

// compare the hand of the players and the computers
function compareSelections(playerSelection, computerSelection) {
  let result;
  const playerHand = playerSelection.toLowerCase();
  const computerHand = computerSelection;
  if (playerHand === computerHand) {
    result = drawResults(playerHand, computerHand);
  } else if (playerHand === 'paper') {
    if (computerHand === 'scissors') {
      result = loseResults(playerHand, computerHand);
    } else if (computerHand === 'rock') {
      result = winResults(playerHand, computerHand);
    }
  } else if (playerHand === 'rock') {
    if (computerHand === 'paper') {
      result = loseResults(playerHand, computerHand);
    } else if (computerHand === 'scissors') {
      result = winResults(playerHand, computerHand);
    }
  } else if (computerHand === 'rock') {
    result = loseResults(playerHand, computerHand);
  } else if (computerHand === 'paper') {
    result = winResults(playerHand, computerHand);
  }
  return result;
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

// plays 5 rounds of rock paper scissors
function game() {
  let gameResult;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Please choose a hand to play!', 'Your hand');
    gameResult = compareSelections(playerSelection, computerPlay());
    console.log(gameResult);
  }
  if (playerPoints > computerPoints) {
    console.log(`Congratulations! You win ${playerPoints} to ${computerPoints}!`);
  } else if (playerPoints < computerPoints) {
    console.log(`Sorry! You lose ${computerPoints} to ${playerPoints}!`);
  } else {
    console.log(`Match Draw! Score is ${computerPoints} to ${playerPoints}`);
  }
}

game();
