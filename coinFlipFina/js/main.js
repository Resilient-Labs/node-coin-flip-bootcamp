let heads = document.getElementById('heads');
let tails = document.getElementById('tails');
let playerChoice;
heads.addEventListener('click',chooseHead)

tails.addEventListener('click',chooseTails)

function chooseHead(){
  playerChoice= 'heads';
  checkCoinFlipWinner(playerChoice);
}

function chooseTails(){
  playerChoice= 'tails';
  checkCoinFlipWinner(playerChoice);
}
//Now you have to decide how to show the result. Do we just want an alert that say you won or lost? or do we want a picture or something to show what the computer got when it flipped the coin? We can have the api send back {winner: true/false, coinFlipped: heads/tails} or we can just have in our main.js if person chose heads and won, then show heads. if person chose tails and won, show tails, etc. etc. something like that.
function checkCoinFlipWinner(choice){
  fetch(`/calculateWinner?playerChoice=${choice}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      console.log(playerChoice);
      document.getElementById('displayChoice').innerHTML = playerChoice
      if (data === true){
        document.getElementById('checkWin').innerHTML = 'You Win'
      } else if (data === false) {
        document.getElementById('checkWin').innerHTML = 'You Lose'
      }
      // let display =  document.getElementById('checkWin').innerHTML = data
    });
}
