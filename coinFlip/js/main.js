//House Gardner worked on this project as a group.

let heads = document.getElementById('heads');
let tails = document.getElementById('tails');
let playerChoice;

heads.addEventListener('click',chooseHead)

tails.addEventListener('click',chooseTails)

function chooseHead(){
  playerChoice= 'heads';
  checkCoinFlipWinner(playerChoice);
};

function chooseTails(){
  playerChoice= 'tails';
  checkCoinFlipWinner(playerChoice);
};

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
      };
    });
  };
