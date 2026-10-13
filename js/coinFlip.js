document.getElementById('clicker').addEventListener('click', coinFlipped)  

function coinFlipped(){
    const userInput = document.querySelector('input').value;
    fetch(`/api?coinFlip=${userInput}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#userChoice').textContent = data.name
        document.querySelector('#outcome').textContent = `${data.outcome} ${data.winOrLoseMessage}`
    })
}