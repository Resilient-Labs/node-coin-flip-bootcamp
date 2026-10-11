document.querySelector('#clickMe').addEventListener('click', getInput)

function getInput(){


  const userCoinInput = document.querySelector("#userName").value;

  const flipSound = new Audio('coin-flip.wav')

  flipSound.play()

  fetch(`/api?coinFlip=${userCoinInput}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#winner").textContent = data.message
      document.querySelector("#result").textContent = data.flipResult
      document.querySelector("#coinImg").src= "/" + data.Image
      
    });

}
