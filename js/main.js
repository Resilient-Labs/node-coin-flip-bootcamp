

document.querySelector('button').addEventListener('click', run) //event listeners for button heads

function run(){ 
    
  const coinTossGuess = document.querySelector('input').value; //grabs the value of the input

  fetch(`/api?result=${coinTossGuess}`)  //add parameter 'result' and set it equal to input
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#coinGuess").textContent = data.result  //grab result from json
    });

}
