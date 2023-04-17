const butt = document.querySelector('#thebutt')
const result = document.querySelector('#result')
const message = document.querySelector('#message')

function coinGame() {
    const userGuess = document.querySelector('#guessInput').value

    fetch(`/coinflip?guess=${userGuess}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        result.innerText = data.random
        message.innerText = data.winOrLoss
        
    })
}
butt.addEventListener('click', coinGame)