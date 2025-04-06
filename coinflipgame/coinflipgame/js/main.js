document.querySelector('button').addEventListener('click', playGame)

function playGame(){

  const userChoice = Number(document.querySelector('input').value);

  fetch(`/api?choice=${userChoice}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector('h2').textContent = data.display
      //document.querySelector('h3').textContent = data.results
      //document.querySelector("#personOccupation").textContent = data.currentOccupation
    });

}



