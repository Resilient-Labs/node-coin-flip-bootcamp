const button = document.querySelectorAll('button')
button.forEach((a) => { a.addEventListener('click', flipCoin) });
let sum = 0

function flipCoin(a) {
  fetch('/api?flip')
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      let choice = a.target.id;
      if (data.result === 0) {
        document.querySelector('h2').innerText = 'The result is heads!'
        document.querySelector('#flipResult').src = '/images/heads.png'
      } else {
        document.querySelector('h2').innerText = 'The result is tails!'
        document.querySelector('#flipResult').src = '/images/tails.png'
      }
      if (data.result === 0 && choice === 'heads' || data.result === 1 && choice === 'tails') {
        sum++
        document.querySelector('h3').innerText = 'You got it! Here\'s a Carlton Coin for you'
        document.querySelector('p').innerText = `You currently have ${sum} Carlton Coins`
        document.querySelector('#result').src = '/images/win.jpg'
      } else {
        document.querySelector('h3').innerText = 'Awww sorry no points for you.'
        document.querySelector('p').innerText = `You currently have ${sum} Carlton Coins`
        document.querySelector('#result').src = '/images/lose.png'
      }
    })
}
// fetch('/images/heads.png')
//   .then(response => 