let coin = document.querySelector("#coin");
let text = document.querySelector("h2");

//function

const { text } = require("stream/consumers");

function game(event) {
  let flip = Math.random();

  if (flip < 0.5) {
    flip = "heads";
  } else {
    flip = "tails";
  }

  if (flip === event.target.id) {
    text.innerText;
  }
}
