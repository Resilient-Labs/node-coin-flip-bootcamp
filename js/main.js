document.querySelector('#clickMe').addEventListener('click', flipIt)


function flipIt(){
  const user = document.querySelector('#userInput').value.toLowerCase()

  fetch(`http://localhost:8000/coinflip?guess=${user}`) //question about building api url ???
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#messageDisplay").textContent = data.check ? "you won" : "you lost" //textcontent = innertext
})
}

//note: if we're messing with the main.js = just refresh browser page; but if its the server.js = stop it (clear it) and reload it
