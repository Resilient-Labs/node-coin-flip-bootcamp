const buttons = document.querySelectorAll(".btn");
let yourChoice = document.querySelector("#yourChoice");
let result = document.querySelector("#result");
const twoBtns = Array.from(buttons, (button) => {
  button.addEventListener("click", flip);
});
console.log(twoBtns);
function flip(event) {
  fetch("/api")
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
      yourChoice.innerText = event.target.innerText;
      console.log(event.target.innerText);
      if (data == event.target.innerText) {
        result.innerText = `You guessed Correct! The computer flipped ${data}, too!`;
      } else {
        result.innerText = `Wrong Guess... The computer flipped ${data}. Try again after throwing salt over your left shoulder`;
      }
    });
}
