const button = document.querySelector('button').addEventListener('click', makeRequest)

function makeRequest(){
  let userInput = document.querySelector('input').value

  fetch(`/flip?coin=${userInput}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
     document.querySelector('h2').textContent = (`The coin face was: ${data.result}`) // random bot 
     document.querySelector('h3').textContent = data.winStatus.toUpperCase() // win / lose 
    })

}
//data is the returned value from the flip function in the server.js