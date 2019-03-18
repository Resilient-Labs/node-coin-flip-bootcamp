//===========================Pseudo Code==============================//
// Prompt: Build a game that allows a user to choose and flip a coin that produces a random outcome
// The user first will decide between two options, then they will flip the coin
// The user then will flip the coin and wait for the result to match users
// choose and the users flip.
//  Next, if the the user choice matches with what the user choose before the flip
// then user wins, & then after the result win will be tracked,
//  However if the user choice before the flip does not
// match after the flip then the user loss & the result will be tracked.
//====================================================================//

document.querySelector('form').addEventListener('submit', flipCoin)

let faceValue = '';

function flipCoin(e){
  e.preventDefault()
  let userPick = document.querySelector('input').value
  let randomShuffle = Math.random()
  if(userPick === 'tail' || userPick === 'head'){
    if(randomShuffle < 0.5){
      //select the img element and change the source attribute to tails image
      document.querySelector('img').src = 'img/head.png'
      faceValue = 'head'
    }else{
      //select the img element and change the source attribute to head image
      document.querySelector('img').src = 'img/tail.png'
      faceValue = 'tail'
    }
  }else{
    alert('Choose head or tail!')
  }
  checkFlip(userPick, faceValue)
}
//compare the user's choice with the coin's flip
function checkFlip(userPick, faceValue){
  //if the user's choice is the same as the coin's flip, display win
  if(userPick === faceValue){
    document.querySelector('h2').innerHTML = 'You win!'
  }else{
    document.querySelector('h2').innerHTML = 'You lose!'
  }
}
