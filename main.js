/*logic: button to fire event or flip coin
function to flip coin


*/
document.querySelector("button").addEventListener("click", () => {
  let flip = Math.random();
  if (flip < 0.5) {
    flip = "heads";
  } else {
    flip = "tails";
  }
  console.log(flip);
  document.querySelector("h2").innerHTML = flip;
})





/*let coin = document.querySelector("#coin");
let text = document.querySelector("h2");

//function

const { text } = require("stream/consumers");

function game(event) {
 

*/
