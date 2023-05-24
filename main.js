document.getElementById("heads").onclick = function(){makeReq('heads')};
document.getElementById("tails").onclick = function(){makeReq('tails')};

function makeReq(userChoice){
  
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
