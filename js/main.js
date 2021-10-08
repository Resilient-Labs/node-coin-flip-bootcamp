document.querySelector('#heads').addEventListener('click', flipCoin)
document.querySelector('#tails').addEventListener('click', flipCoin)

function flipCoin(event) {
  let userChoice = event.target.id
  console.log(event.target.id)
  fetch(`/api?playerGuess=${userChoice}`)
  .then(response => response.json())
  .then((data) => {
    document.querySelector('img').src = data.flipResultImg
    document.querySelector('#outcome').innerText = `It's ${data.flipResult}`
    // document.querySelector('#winLose').innerText = 
  console.log(data);


  });
}

// function flipCoin(event){
  // userChoice = event.target.id === 'heads' ? 0 : 1 //'heads' === 0 or 'tails' === 1
  // let coin = Math.floor(Math.random() * 2) //computer choice is 0 or 1

//   if (coin === 0){
//     document.querySelector('img').src = 'css/img/heads.jpeg'
//   } else {document.querySelector('img').src = 'css/img/tails.png'}

//   if (userChoice === coin){
//     document.querySelector('h2').innerText = 'You Win!'
//     console.log('win')
//   } else { 
//     document.querySelector('h2').innerText = 'You Lose!'
//     console.log('loss')
//   }
//   console.log(userChoice, coin)
// }