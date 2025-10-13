// psuedo code
// client side just fetches api response of user name and user coin result
class CoinGame {
  constructor() {
    this.button = document.querySelector('button');
    this.game = document.querySelector('.game')
    this.result = document.querySelector('h2');
    this.gameBox = ["heads", "tails"];
    this.button.addEventListener('click', () => this.makeReq());
  }

  makeReq() {
    try {
    const guessElement = document.querySelector(".guess");
    let guess = '';
    if (guessElement) {
      guess = guessElement.value.toLowerCase().trim(); //get input value
      console.log('User guess:' + guess);
    }

    if (guess === "heads" || guess === "tails") {
      fetch(`http://localhost:2000/api/coin-flip-game?guess=${guess}`) //send guess to server
        .then(response => response.json())
        .then((data) => {
          this.game.innerText = `You flipped: ${data.serverResult}`; //Heads or Tails
          this.result.innerText = `${data.serverGameResult}`; //You Win or You Lose
        });
    } else {
      alert('Please enter a valid input');
    }
    } catch (err) {
      alert('Your JS is not working');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => { //make sure script runs after DOM loads, new coin game upon every load
  new CoinGame();
});

// client side logic
// class CoinGame {
//   constructor() {
//     this.button = document.querySelector('button');
//     this.game = document.querySelector('.game')
//     this.result = document.querySelector('h2');
//     this.guess = document.querySelector(".guess")
//     this.gameBox = ["Heads", "Tails"];
//     this.button.addEventListener('click', () => this.generateCoin());
//   }

//   generateCoin() {
//     const randomIndex = Math.floor(Math.random() * this.gameBox.length);
//     const headOrTails = this.gameBox[randomIndex];
//     this.game.innerText = `Coin flipped: ${headOrTails}`;
//     this.winOrLose(headOrTails);
//   }

//   winOrLose(headOrTails) {   
//     if (headOrTails === this.guess.value) {
//       this.result.innerText = "You Win!";
//     } else {
//       this.result.innerText = "You Lose!";
//     }
//   }
// }

// //new game
// document.addEventListener('DOMContentLoaded', () => {
//   new CoinGame();
// });


//Citations:
// Referenced from Resilient Coders Week 9 Matierial
// Use of House Cass, Google AI Overview, Chatgpt for debug and syntax reference