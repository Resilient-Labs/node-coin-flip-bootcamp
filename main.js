document.querySelector('button').addEventListener('click', flipCoin);

function flipCoin(){
    fetch('/coinflipapi')
    .then(res=>res.text())
    .then(data =>
        document.querySelector('.result').innerText = data);
}

