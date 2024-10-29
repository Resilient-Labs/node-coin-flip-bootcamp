function Coin(side='Heads') {
    this.side=side;
    this.flip = function() {
      return (Math.random() >= .5) ? 'Heads' : 'Tails';
    }
  }
  
  function flipCoinResults(){
      let gameResult = newCoin.flip()
      console.log(userChoice)
      document.querySelector('h3').innerText = gameResult
      if ((gameResult === 'Heads' && userChoice === 'Heads') || (gameResult === 'Tails' && userChoice === 'Tails')) {
          document.querySelector('#result').innerText = "You win!"
      } else {
          document.querySelector('#result').innerText = "You lose."
      }
  }
  
  let newCoin = new Coin();
  let userChoice;
  
  document.querySelectorAll('input').forEach(button => { button.addEventListener('click', (event) => {
    userChoice = event.target.value;
    flipCoinResults()
  })});