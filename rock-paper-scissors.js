// Return a random number from 1 to the given parameter number
// including the numbers on edge
function random(num) {
  return Math.floor(Math.random() * num);
}

function loseResults(playerSelection, computerSelection) {
  const result = `You Lose! ${computerSelection} beats ${playerSelection}`;
  return result;
}

function winResults(playerSelection, computerSelection) {
  const result = `You Win! ${playerSelection} beats ${computerSelection}`;
  return result;
}

function drawResults(playerSelection, computerSelection) {
  const result = `Draw! ${playerSelection} against ${computerSelection}`;
  return result;
}

function compareSelections(playerSelection, computerSelection) {
  let result;
  const playerHand = playerSelection.toLowerCase();
  const computerHand = computerSelection.toLowerCase();
  if (playerHand === computerHand) {
    result = drawResults(playerHand, computerHand);
  } else if (playerHand === "paper") {
    if (computerHand === "scissors") {
      result = loseResults(playerHand, computerHand);
    } else if (computerHand === "rock") {
      result = winResults(playerHand, computerHand);
    }
  } else if (playerHand === "rock") {
    if (computerHand === "paper") {
      result = loseResults(playerHand, computerHand);
    } else if (computerHand === "scissors") {
      result = winResults(playerHand, computerHand);
    }
  } else if (computerHand === "rock") {
    result = loseResults(playerHand, computerHand);
  } else if (computerHand === "paper") {
    result = winResults(playerHand, computerHand);
  }
  console.log(result);
  return result;
}
compareSelections("rock", "paper");

function computerPlay() {
  let result;
  const randomNumber = random(3);
  if (randomNumber === 1) {
    result = "Paper";
  } else if (randomNumber === 2) {
    result = "Rock";
  } else {
    result = "Scissors";
  }
  return result;
}
