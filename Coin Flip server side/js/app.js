let heads = document.getElementById('head');
let tails = document.getElementById('tails');
let answer = document.getElementById('answer');
let playerChoice;



function selectHeads(){
   playerChoice = "heads"
   checkWinner(playerChoice);
};
 function selectTails(){
   playerChoice = "tails"
   checkWinner(playerChoice);
 }


function checkWinner(choice){
  fetch(`/findWinner?choice=${playerChoice}`)
  .then(response => response.json())
    .then((data) => {
      console.log(data);
      console.log("player choice",playerChoice)
      if(data === true){
        document.getElementById('answer').innerHTML = 'You Win!'
      }else if (data === false){
        document.getElementById('answer').innerHTML = 'You lose!'
      };
    })
    .catch(err => console.error(err))
}



heads.addEventListener('click',selectHeads)
tails.addEventListener('click',selectTails)
