// GLOBALS
let headsButton = document.querySelector('#heads-button')
let tailsButton = document.querySelector('#tails-button')
let results = document.querySelector('span')

// BUTTONS
headsButton.addEventListener('click', coinSelector) // this passes the function as an arguement 
tailsButton.addEventListener('click', coinSelector)

// FUNCTIONS
function coinSelector(e)
{
    // FETCH REQUEST
    fetch('/api') // this is fetching data from the server
    .then (res => res.json()) // parse server response as JavaScript (JSON = JavaScript Object Notation)
    .then (coinName => // parameter, then the arrow function followed by the function code
    {
        console.log(coinName)

        // CONDITIONALS
        if (coinName.name == 'heads' && e.target == headsButton)
        {
            results.innerText = 'SHE\'S-A SMILIN\''
        }
        else if (coinName.name == 'tails' && e.target == tailsButton)
        {
            results.innerText = 'SHE\'S-A SMILIN\''
        }
        else
        {
            results.innerText = 'Better luck next time, pardner'
        }
    })
}