const option = document.querySelector('#coin')
const button = document.querySelector('#button')
const results = document.querySelector('h2')
const coinImg = document.querySelector('#theCoin')


button.addEventListener('click', coinFlip)

function coinFlip() {

    let coinLand = option.value

    fetch(`/api?cointoss=${coinLand}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data)

        results.innerText = `${data.result}`
        // if( data.result === 'heads') {
        //     coinImg.src = '../images/head.png'
        // } else if (data.result === 'tails') {
        //     coinImg.src = '../images/tail.png'
        // }
    })
    .catch(err => {
    console.log(`error ${err}`)
    });
    
}
