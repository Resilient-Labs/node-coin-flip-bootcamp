//I need to make a simple coin toss game. 
//when a button is clicked, I need to find out if the user lands on either 'heads', or 'tails'. so I will use math.random to choose a random number between 1 and 0 to set my heads and tails to. 
// I need to display these results on the DOM using.
// I need this to be fullstack, I need to implement http to create the server and fs to read my html file. I need to Include vanilla ES6 js in a script tag at the bottom of the html file. 



let flipButton = document.querySelector('#flipButton').addEventListener('click', flip)

let resetButton = document.querySelector('#reset').addEventListener('click', rst)

let coin = document.querySelector('#coin')
let reset = document.querySelector('#reset')
let flipResult = ''

function flip() {

  fetch(`/api?result=${flipResult}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector('#result').innerHTML = data.flipResult

    });
}

function rst () {
  document.querySelector('#result').innerHTML = ''
}

