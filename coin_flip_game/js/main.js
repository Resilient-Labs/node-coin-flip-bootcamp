/*

Goal: Create a simple web application that uses the fs and http modules. 
Use http to create the server and fs to read your html file. 
Include vanilla ES6 js in a script tag at the bottom of your html file. 
Try creating a coin flip guessing game


*/

//this file is client side



let buttons = document.querySelectorAll('button')

buttons.forEach(button => button.addEventListener('click', flipCoin))


// document.querySelectorAll('.button').forEach((elementAsCard) => {
//     elementAsCard.addEventListener('click', flipCoin) //hooks up anything with class .card to our flip function
// })


//this routes our user in put to the '/api/ case on line 32
function flipCoin(e) {
    console.log("TESTING");

    let guess = e.target.innerText
    fetch(`/api?guess=${guess}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            document.querySelector('.display').innerHTML = data.result

        })
        .catch(err => {
            console.log(`error ${err}`);

        });
}