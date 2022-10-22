document.getElementById("heads").onclick = makeReq;
document.getElementById("tails").onclick = makeReq;

function makeReq(e){
  let userChoice = e.target.value

  fetch('/api')
    .then((response) => response.json())
    .then((data) => {
    console.log(data.coinToss);
    let result = document.querySelector('#result')
    if (userChoice === data.coinToss){
        result.innerHTML = `You guessed right!`
    }else{
      result.innerHTML = `You guessed wrong!`
    }
  })
  
}

