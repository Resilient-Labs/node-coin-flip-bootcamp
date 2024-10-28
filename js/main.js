document.querySelector("#submitGuess").addEventListener("click", submitGuess);
document.querySelector("#coinFlip").addEventListener("click", coinFlipped);
document.querySelector("#restart").addEventListener("click", restartGame);

const userInput = document.querySelector("input");
const userGuess = document.querySelector("#userGuess");
const coin = document.querySelector("#coinResult");
const message = document.querySelector("#resultMsg");
const error = document.querySelector("#errorDisplay");
const flipBtn = document.querySelector("#coinFlip");

flipBtn.disabled = true;

userInput.addEventListener("input", () => {
  flipBtn.disabled = !userInput.value;
});

function submitGuess(e) {
  e.preventDefault();

  const guess = userInput.value.toLowerCase();

  clearInput();

  if (guess === "heads" || guess === "tails") {
    userGuess.innerText = guess.charAt(0).toUpperCase() + guess.slice(1);
    error.innerText = "";
    flipBtn.disabled = false;
  } else {
    userGuess.innerText = "";
    error.innerText = "Please enter either heads or tails!";
    flipBtn.disabled = true;
  }
}

function coinFlipped(e) {
  e.preventDefault();

  let randomSide = Math.random();

  if (randomSide < 0.5) {
    coin.innerText = "Heads";
  } else {
    coin.innerText = "Tails";
  }

  checkGuess();
}

function checkGuess() {
  if (userGuess.innerText === coin.innerText) {
    message.innerText = "Congrats! You guess correcntly";
    message.style.color = "#21931b";
  } else {
    message.innerText = "Sorry, your guess was incorrect";
    message.style.color = "#ff5900";
  }
}

function clearInput() {
  userInput.value = "";
}

function restartGame() {
  clearInput();
  message.innerText = "";
  error.innerText = "";
}
