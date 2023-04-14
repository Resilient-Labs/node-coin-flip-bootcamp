// const headInput = document.querySelector('#head')
// const tailInput = document.querySelector('#tail')
// const button = document.querySelector('#button')
// const display = document.querySelector('h2')

// function playGame(){
//   return Math.random()< .5 ? "heads" : "tails" ;
// }

// function userInput(e){
//   e.preventDefault()

//   const headInput = document.querySelector('#head').value
//   const tailInput = document.querySelector('#tail').value

//   if (headInput === playGame() || tailInput === playGame()){
//     document.querySelector('h2').innerText= 'You Win!'
//   } else{
//     document.querySelector('h2').innerText= 'Try Again!'
//   }
// }
//document.querySelector('#submit').addEventListener('click', userInput)
function sendReq(){

  const coin = document.querySelector('input[name="game"]:checked').value

  fetch(`/api?coins=${coin}`)
  .then(response => response.json())
  .then((data) => {
    document.querySelector('#player').textContent = data.playerChoice
    document.querySelector('#cpu').textContent = data.cpuChoice
    document.querySelector('#placeToSee').textContent = data.winOrLoose
  }) 

   console.log(coin)
}

document.querySelector('#submit').addEventListener('click', sendReq)
