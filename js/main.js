document.querySelector('#heads').addEventListener('click', flipCoin)
document.querySelector('#tails').addEventListener('click', flipCoin)

function flipCoin(event) {
  document.querySelector('p').hidden = true
  let userChoice = event.target.id
  fetch(`/api?playerGuess=${userChoice}`)
  .then(response => response.json())
  .then((data) => {
    document.querySelector('#coin').innerHTML = data.flipResultImg
    document.querySelector('#guess').innerText = ''
    document.querySelector('#outcome').innerText = ''
    document.querySelector('#winLose').innerText = ''
    setTimeout(() => showOutcome(), 2100)
    function showOutcome(){
      document.querySelector('#guess').innerText = `You guessed ${userChoice}`
      document.querySelector('#outcome').innerText = `It's ${data.flipResult}`
      document.querySelector('#winLose').innerText = data.outcome ? 'You win!' : 'You lose!'
  }
  });
}