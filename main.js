document.querySelector('#flipButton').addEventListener('click', flipCoin);

function flipCoin() {
    const userInput = document.querySelector('#coinFlip');

    fetch(`api?coinFlip=${userInput.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector('#Winner').textContent = data.result;
        });
} 
