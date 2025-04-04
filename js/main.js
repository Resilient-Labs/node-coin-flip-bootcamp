
//Make TWO buttons for Heads or tails
document.querySelector('#tails').addEventListener('click', coinFlipT)
document.querySelector('#heads').addEventListener('click', coinFlipH)

function coinFlipH(){
  fetch(`/api?coingame=heads`)
    .then(res => res.json())
    .then(data => {
    console.log(data)
    document.querySelector('#result').innerText = data.decision
    document.querySelector('#message').innerText = data.gameMessage

    })

    .catch(err => {
    console.log(`error ${err}`)
  })

}

function coinFlipT() {
  fetch(`/api?coingame=tails`)
    .then(res => res.json())
    .then(data => {
    console.log(data)
    document.querySelector('#result').innerText = data.decision
    document.querySelector('#message').innerText = data.gameMessage
    })
    .catch(err => {
    console.log(`error ${err}`)
  })

}

