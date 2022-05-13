document.querySelector('.flip').addEventListener('click', flipCoin)

function flipCoin() {
    const prediction = document.querySelector('#headsTails').value
    console.log(prediction)
    fetch(`/api?chosenCoinFlip=${prediction}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    //fetch url from server
}