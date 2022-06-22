console.log("Hello World");

// Return a random number from 1 to the given parameter number
// including the numbers on edge
function random(num) {
  return Math.floor(Math.random() * num);
}

function computerPlay() {
  const randomNumber = random(3);
  if (randomNumber === 1) {
    console.log("Paper");
  }
  else if (randomNumber === 2) {
    console.log("Rock");
  }
  else {
    console.log("Scissors");
  }
}
computerPlay();
