// Goal: Create a simple web application that uses the fs and http modules. 
// Use http to create the server and fs to read your html file. 
// Include vanilla ES6 js in a script tag at the bottom of your html file. 
// Try creating a coin flip guessing game
document.querySelector("#Heads").addEventListener("click",headsButt)

function headsButt(){
  let flipRes = document.querySelector("#Heads").value;
  console.log(flipRes)
  fetch(`/api?suavemente=${flipRes}`)
    .then (res=> res.json())
    .then ((data) => {
      document.querySelector(".resultado").innerText = data.deathAvoided

        console.log(data);
    })
}

document.querySelector("#Tails").addEventListener("click", tailsButt)

function tailsButt(){
  let flipRes = document.querySelector("#Tails").value;
  console.log(flipRes)
  fetch(`/api?suavemente=${flipRes}`)
    .then (res=> res.json())
    .then ((data) => {
      document.querySelector(".resultado").innerText = data.deathAvoided

        console.log(data);
    })
  }