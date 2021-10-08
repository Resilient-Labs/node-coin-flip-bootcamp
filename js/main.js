document.querySelector('#heads').addEventListener('click', flipCoin)
document.querySelector('#tails').addEventListener('click', flipCoin)

function flipCoin(event) {
  let userChoice = event.target.id
  fetch(`/api?playerGuess=${userChoice}`)
  .then(response => response.json())
  .then((data) => {
    document.querySelector('#guess').innerText = userChoice
    document.querySelector('img').src = data.flipResultImg
    document.querySelector('#outcome').innerText = `It's ${data.flipResult}`
    document.querySelector('#winLose').innerText = data.outcome ? 'You win!' : 'You lose!'
  });
}