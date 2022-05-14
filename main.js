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
        results.innerText = 'Heads! Your Wrong!'
    } else if ( probability === 1 && coinLand === 'heads') {
        results.innerText = 'Tails! Nope!'
    } else if ( probability === 2 && coinLand === 'heads') {     
        results.innerText = 'Heads! Right On!'
    } else if ( probability === 1 && coinLand === 'tails') {       
        results.innerText = 'Tails! Nice!'
    }
}
