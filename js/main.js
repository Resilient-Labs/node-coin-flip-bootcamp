// alert("ravioli ravioli give me the formuoli")

document.querySelector('button').addEventListener('click', flipItNow)


let flipResult

function flipItNow() {
    let flipHeader = document.querySelector('h2').innerHTML

    // document.getElementById('userGuess').addEventListener('change', () => {
    userGuess = document.querySelector('option:checked').value
    console.log(userGuess)
    // })

    fetch(`/api?coin=${userGuess}`)
        .then(res => res.json())
        .then((data) => {
            alert(data.result)
            console.log(data)
        })
        .catch((err) => console.error(err));


}


// Instructions:
// Goal: Create a simple web application that uses the fs and http modules. 
// Use http to create the server and fs to read your html file. 
// Include vanilla ES6 js in a script tag at the bottom of your html file. 
// Try creating a coin flip guessing game


// Pseudo-Code:
// Connect Server to DOM
// Create variables that hold head and tails or just a variable that holds result or you can do it boolean style
// Define way to randomly choose either one
// Use Math.Random and Math.Floor as potential built-in methods
// I think that if you have the number be 1 or 2 and decide between each it might work
// Find way for Server to print the message back into the DOM
// Create Dom elements that will hold the coin
// Add eventlistener to that element
// OPTIONAL:
// Find way to spin a 3D Coin upon click -- this would also be tied to the event listener
// It would be really cool to find a way to also have the coin go up and spin when it gets clicked

// res.end(Math.Floor (math.random()*2) ? "heads" : "tails")