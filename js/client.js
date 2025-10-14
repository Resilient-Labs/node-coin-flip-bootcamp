/* for the client side, we want to capture user input. to do this, user will click button and that will trigger the flip that will then provide one of two results (heads or tails). we want to display the result to user*/

document.querySelector('#button').addEventListener ('click', tossCoin)

function tossCoin(){
// alert('flip coin');
const userGuess = document.querySelector('[name="user-choice"]:checked').value;

fetch (`/api?userGuess=${userGuess}`)
  .then(res => res.json())
  .then((data) => {
    console.log(data)
    document.querySelector('#result').innerText=data.gameLogic
    if (data.userWins){
      document.querySelector('#message').innerText='Congrats! You win 🥳'
    }else{
      document.querySelector('#message').innerText='Oooh better luck next time 😢'
    }
  })
  }




