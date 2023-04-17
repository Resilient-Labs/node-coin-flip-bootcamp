const submitBtn = document.querySelector('button').addEventListener('click', makeReq)

function makeReq(e){
  e.preventDefault()
  const userName = document.querySelector('input').value

  fetch(`/api?student=${userName}`)
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector("#playerChoice").textContent = data.playerChoice
    document.querySelector("#coinResult").textContent = data.coinResult
    document.querySelector("#winningOrLosing").textContent = data.winningOrLosing
  });
}

// function coinFlip(){
//   return Math.random() < 0.5 ? "heads" : "tails"
  
// }

// function flip(e){
//   //prevents browser default- immediate refresh
//   e.preventDefault()
//   const radioHeads = document.querySelector('#heads').value
//   const radioTails = document.querySelector('#tails').value
//   const results = document.querySelector('h2')

  
//   if(radioHeads === coinFlip() || radioTails === coinFlip()){
//     console.log(coinFlip())
//     results.innerText = 'You Win!';
//   }else{
//     console.log(coinFlip())
//     results.innerText = 'You lose :(';
//   }
// }

