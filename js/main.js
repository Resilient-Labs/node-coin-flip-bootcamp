const headInput = document.querySelector('#head')
const tailInput = document.querySelector('#tail')
const button = document.querySelector('#button')
const display = document.querySelector('h2')

function playGame(){
  return Math.random()< .5 ? "heads" : "tails" ;
}

function userInput(e){
  e.preventDefault()

  const headInput = document.querySelector('#head').value
  const tailInput = document.querySelector('#tail').value

  if (headInput === playGame() || tailInput === playGame()){
    document.querySelector('h2').innerText= 'You Win!'
  } else{
    document.querySelector('h2').innerText= 'Try Again!'
  }
}
document.querySelector('#submit').addEventListener('click', userInput)
