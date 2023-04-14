function coinflip(){
  let randomNumber = Math.random()
  if (randomNumber < .5){
    coin = 'heads'
  }else {
    coin = 'tails'
  }

  console.log(coin)
  return coin
 
}


function checkWhoWon(coin, player1turn){
  let status = document.querySelector("#status")

  if (player1turn !== coin){
    status.innerText = "You lost"
  }
	else{
		status.innerText = "YOU WIN"
	}
}

function playerpicksHeads(){
  let player1turn = 'heads'
  let coin = coinflip()
  checkWhoWon(coin, player1turn)
  
}

document.querySelector('#heads').addEventListener('click', playerpicksHeads)


function playerpicksTails(){
  let player1turn = 'tails'
  let coin = coinflip()
  checkWhoWon(coin, player1turn)

  
}

document.querySelector('#tails').addEventListener('click', playerpicksTails)




