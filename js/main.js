function sendReq(){

  const coin = document.querySelector('input[name="game"]:checked').value

  fetch(`/api?coins=${coin}`)
  .then(response => response.json())
  .then((data) => {
    document.querySelector('#player').textContent = data.playerChoice
    document.querySelector('#cpu').textContent = data.cpuChoice
    document.querySelector('#placeToSee').textContent = data.winOrLoose
  }) 

  //  console.log(coin)
}

document.querySelector('#submit').addEventListener('click', sendReq)
