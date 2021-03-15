//coin flip//
/* https://github.com/Resilient-Labs/node-coin-flip-bootcamp
Goal: Create a simple web application that uses the fs and http modules. Use http to create the server and fs to read your html file. Include vanilla ES6 js in a script tag at the bottom of your html file. Try creating a coin flip guessing game

Pseudocode
- (potential addition) player clicks <span class="heads"> or  <span class="tails">

- player clicks on image of coin
- coin flips (JS uses math.random to determine head/tail side)
  *bonus add animation for fun
- coin stops flipping and displays the flipped side
-<p class="message"> displays Heads! or Tails!
- reset button
*/
//Kiany + Jasmin + Danstan helped//

let button = document.querySelector("button")
let origCoin = document.querySelector("origCoin")
let heads = 0
let tails = 0

// document.querySelector("button").addEventListener("click", flip)

function flip() {
  let side = Math.floor(Math.random() * 2) //this is just so we compare it to an even number//
  if (side === 0) {
    //adds to the head count//
    heads += 1
    //display the head image//
    document.querySelector('#origCoin').src = 'css/img/heads.png'
    document.querySelector('#result').innerText = "Heads!"
    document.querySelector('#headCount').innerText = "Heads Count: " + heads
  } else {
    //adds to the tails count//
    tails += 1
    //display the tails image//
    document.querySelector('#origCoin').src = 'css/img/tails.png'
    document.querySelector('#result').innerText = "Tails!"
    document.querySelector('#tailCount').innerText = "Tails Count: " + tails
  }
}

/*this is from Jasmin*/
/*this helps remove the original image*/
button.onclick = function() {
  flip()
}
