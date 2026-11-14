document.querySelector('#buttonFlip').addEventListener('click', flippityFlip)

function flippityFlip() {
    let coinChoice = document.querySelector('#coinChoice').value.toLowerCase();
    
    console.log(coinChoice);

    fetch(`/api?coinflip=${coinChoice}`)
        .then(response => response.json())
        .then((data) => {
            document.querySelector('#choice').textContent = data.name;
            document.querySelector('#message').textContent = data.message;
            document.querySelector('#outcome').textContent = data.outcome;
        })
}