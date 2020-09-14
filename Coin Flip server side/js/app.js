//House Moses: Kim, Carlosalberto, Farrah and Gabriel
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
      document.getElementById('player').innerHTML = `You chose: ${playerChoice}`
      if(data === true){
        document.getElementById('answer').innerHTML = 'You Win! :)'
      }else if (data === false){
        document.getElementById('answer').innerHTML = 'You Lose! :('
      };
    })
    .catch(err => console.error(err))
}
//fetchs for the page winner and uses template literal to target input
// logic displayed in server side


heads.addEventListener('click',selectHeads)
console.log("works")
tails.addEventListener('click',selectTails)
console.log("works")
