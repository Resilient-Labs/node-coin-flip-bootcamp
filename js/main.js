//buttons and functions will be created in main.js
//fetch the server.js to get the coin flip functionality

document.querySelector('#heads').addEventListener('click', () => flipCoin(1))
document.querySelector('#tails').addEventListener('click', () => flipCoin(2))
document.querySelector('#reset').addEventListener('click', restartGame)

function flipCoin(guessNum){
//fetch coin flip
//determain whether coin lands on heads or tails
//figure out if user won
 fetch(`/api?guess=${guessNum}`)
 .then(res => res.json())
 .then((data) => {
    console.log(data)
    document.getElementById('userResults').innerText = `You chose ${data.userGuess}`

    document.getElementById('coinResults').innerText = `${data.serverFlip} was the correct choice; ${data.outcome}`
 })
 .catch(err => {
    console.log(`error ${err}`)
 })
}

function restartGame(){
document.getElementById('userResults').innerText = 'Win or Lose'
document.getElementById('coinResults').innerText = ''
}