document.querySelector('.flip').addEventListener('click', flipCoin)

function flipCoin() {
    const prediction = document.querySelector('.selectBox').value
    console.log(prediction)
    fetch(`/api?chosenCoinFlip=${prediction}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            console.log(data.result)
            document.querySelector('.winnerLoser').innerText = data.result
            document.querySelector('.flipIMG').src = data.imgSRC
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
    //fetch url from server
}