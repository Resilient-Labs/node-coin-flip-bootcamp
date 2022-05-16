const option = document.querySelector('#coin')
const button = document.querySelector('#button')
const results = document.querySelector('h2')
const head = document.querySelector('#head')
const tail = document.querySelector('#tail')

console.log(option)

button.addEventListener('click', coinFlip)

function coinFlip() {
    let coinLand = option.value
    let probability = Math.ceil(Math.random() * 2)
    if( probability === 2 && coinLand === 'tails') {
        results.innerText = 'heads! you lose!'
    } else if ( probability === 1 && coinLand === 'heads') {
        results.innerText = 'tails! sorry, you lose!'
    } else if ( probability === 2 && coinLand === 'heads') {     
        results.innerText = 'heads! you win!'
    } else if ( probability === 1 && coinLand === 'tails') {       
        results.innerText = 'tails! you\'re a winner!'
    }
}
