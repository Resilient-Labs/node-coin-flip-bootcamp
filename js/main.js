const heads = document.getElementById('heads');
const tails = document.getElementById('tails');
let choice; //whats the choice
let pscore = 0;
let cscore = 0;
document.getElementById('score').innerHTML = (``)

heads.addEventListener('click', choseHeads)
tails.addEventListener('click', choseTails)

function choseHeads(){
 choice = 'Heads';
 checkWinner(choice)
}

function choseTails(){
  choice = 'Tails';
  checkWinner(choice);
}

function checkWinner(choice){
  fetch(`/api?choice=${choice}`) //creating API? NODE.js
    .then(res => res.json())
    .then((data) => {
      let notChoice;
      if (choice === 'Heads'){
        notChoice = 'Tails'
      }else{
        notChoice = 'Heads'
      }
      if (data == true){
        document.getElementById('check').innerHTML = `You Won! The computer also chose ${choice}`
        pscore++
        document.getElementById('score').innerHTML = (`Player score: ${pscore} | Computer score: ${cscore}`)
      } else if (data == false) {
        document.getElementById('check').innerHTML = `You Lost! The computer chose ${notChoice}`
        cscore++
        document.getElementById('score').innerHTML = (`Player score: ${pscore} | Computer score: ${cscore}`)
      };
    });
};
