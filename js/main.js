

function makeReq(e){
let guess = e.target.innerText

  fetch(`/coin?guess=${guess}`)

    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector('img').src = `/img/${data.coin}.jpg`
      document.querySelector('#result').innerText = data.win ? 'You Won' : 'You Lost'
    });

}


document.querySelector('#HeadsButton').addEventListener('click', makeReq)
document.querySelector('#TailsButton').addEventListener('click', makeReq)