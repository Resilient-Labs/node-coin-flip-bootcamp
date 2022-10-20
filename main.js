const option = document.querySelector('#coin')
const button = document.querySelector('#button')
const results = document.querySelector('h2')
const head = document.querySelector('#head')
const tail = document.querySelector('#tail')


button.addEventListener('click', coinFlip)

function coinFlip() {

    let coinLand = option.value

    fetch(`/api?cointoss=${coinLand}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data)

        results.innerText = `${data.result}`
    })
    .catch(err => {
    console.log(`error ${err}`)
    });
    
}
