//Goal: Create a simple web application that uses the fs and http modules. Use http to create the server and fs to read your html file. Include vanilla ES6 js in a script tag at the bottom of your html file. Try creating a coin flip guessing game

//variables


//functions

function flip(e){

  const coinSide = e.target.id;

  fetch(`/api?coin=${coinSide}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("h2").textContent = data.humanVsbot

    });

}

//function calls & event listeners
document.querySelectorAll('button').forEach(e => e.addEventListener("click", flip))

