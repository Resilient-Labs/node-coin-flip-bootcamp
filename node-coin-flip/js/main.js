let flipCoinBtn = document.querySelector('.flipCoinBtn').addEventListener('click', flipCoin)


function flipCoin(){
        let coinFlipResult = document.querySelector('#coin').value
        fetch(`/api?coinFlip=${coinFlipResult}`) //fetch to retrieve information from the server
        .then(res => res.json())
        .then(data => {
        console.log(data)

        document.querySelector('h3').innerText = data.result
    })
}