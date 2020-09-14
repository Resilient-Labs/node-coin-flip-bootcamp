const heads = document.getElementById('heads');
const tails = document.getElementById('tails');
let choice; //whats the choice

heads.addEventListener('click', choseHeads)
tails.addEventListener('click', choseTails)

function choseHeads(){
 choice = 'heads';
 checkWinner(choice)
}

function choseTails(){
  choice = 'tails';
  checkWinner(choice);
}

function checkWinner(choice){
  fetch(`/api?choice=${choice}`) //creating API? NODE.js
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      console.log(choice);
      if (data === true){
        document.getElementById('result').innerHTML = 'You Won!'
      } else if (data === false) {
        document.getElementById('result').innerHTML = 'You Lost!'
      };
    });
};
