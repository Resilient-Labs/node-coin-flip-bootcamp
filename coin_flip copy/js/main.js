let choice = document.querySelector('#choice')
let results = document.querySelector('h2')
let image = document.querySelector('img')
let button = document.querySelector('#button')

button.addEventListener('click', coinToss)

function coinToss() {
    let prediction = choice.value
    fetch(`/api?cointoss=${prediction}`)
    .then(res => res.json())
    .then(data => {
    console.log(data)
        image.src = data.image
        results.innerText = `${data.result}`
    })

    .catch(err => {
    console.log(`error ${err}`)
    });

}