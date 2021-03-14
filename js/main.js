/*
1. click the button and flip the coin for heads or tails
2. Math.floor(Math.random() * 2)
 answer == 1, odd else its even.
 3.increment the heads and tails when landed on it.  
*/

document.querySelectorAll('h3').forEach(img => img.addEventListener('click', flipCoin))

let answer = document.querySelector('h2')
let headsIncrement = document.querySelector('.headCounter span')
let tailsIncrement = document.querySelector('.tailCounter span')

let heads = 0
let tails = 0

function flipCoin(){
  let headsOrTails = Math.floor(Math.random() * 2) + 1
  if(headsOrTails % 2 === 0){
    flipped('Heads')
    heads++
  }
  else {
    flipped('Tails')
    tails++
  }
}

function flipped(coin){
  answer.innerText = coin
  headsIncrement.innerText = heads
  tailsIncrement.innerText = tails
}