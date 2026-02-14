//Goal: Create a simple web application that uses the fs and http modules. Use http to create the server and fs to read your html file. Include vanilla ES6 js in a script tag at the bottom of your html file. Try creating a coin flip guessing game


document.querySelector("#button").addEventListener("click", flipCoin)

const output = document.querySelector("#output")

function flipCoin(){

    fetch("/coinflip")
    .then(res => res.json())
    .then(data => {
        console.log(data.key)
        output.innerHTML = `${data.key}`
    })
}

