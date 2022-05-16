document.querySelector('button').addEventListener('click', flipCoin)

function flipCoin(){
    const prediction = document.querySelector('#headsTails').value
    console.log(prediction)

    fetch(`/api?chosenCoinFlip=${prediction}`)
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        
    }) 
    .catch (err => {
        console.log(`Error ${err}`)
    })
} 