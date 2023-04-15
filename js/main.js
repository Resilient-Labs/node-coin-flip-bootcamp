document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  fetch(`/coin`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector('img').src = `${data.coin}.jpg`
      document.querySelector('#heads').innerText = data.heads
      document.querySelector('#tails').innerText = data.tails
    });

}


document.querySelector('button').addEventListener('click', makeReq)