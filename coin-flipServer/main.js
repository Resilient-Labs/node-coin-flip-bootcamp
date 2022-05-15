// client-side js 

//Goal: Create a simple web application that uses the fs and http modules. Use http to create the server and fs to read your html file. Include vanilla ES6 js in a script tag at the bottom of your html file. Try creating a coin flip guessing game

//User gets coin
//Selects heads or tails
//Clicks button to trigger function/flip
//Randomized result 

//global variables 

// selection id coin 
const option = document.querySelector('#coin')

// button
const button = document.querySelector('#button')

// result 
const results = document.querySelector('h2')

// head tails option value in html
const head = document.querySelector('#head')
const tail = document.querySelector('#tail')

// event listener/ smurf - once clicked coinFlip runs

button.addEventListener('click', coinFlip)

// function 

function coinFlip() {

    let coinLand = option.value

    fetch(`/api?cointoss=${coinLand}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data.result)
        results.innerText = `${data.result}`
        
    })
    .catch(err => {
    console.log(`error ${err}`)
    alert('Please select heads or tails')
    });
    
}