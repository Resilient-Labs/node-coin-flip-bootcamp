let headsButton = document.querySelector('#heads')
let tailsButton = document.querySelector('#tails')

let coinPick = document.querySelector('#coinPick')
let userPick = document.querySelector('#userPick')

headsButton.addEventListener('click', function(){coinflip('heads')})
tailsButton.addEventListener('click', function(){coinflip('tails')})



function coinflip(pick){
  fetch(`/api?coinSide=${pick}`)
  .then (res => res.json())
  .then (data => {
    console.log(data)
    document.querySelector('#status').innerText = data.status
    coinPick.innerText = `Coin pick: ${data.coinPick}`
    userPick.innerText = `Your pick: ${data.userPick}`
  })
 
  .catch(err => {
  console.log(`error ${err}`)
 })
 
}



