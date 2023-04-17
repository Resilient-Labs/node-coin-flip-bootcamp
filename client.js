document.querySelector('#coinHeads').addEventListener('click', () => {
  makeReq('heads');
});

document.querySelector('#coinTails').addEventListener('click', () => {
  makeReq('tails');
});

function makeReq(coinSide) {
  fetch(`/api?coinSide=${coinSide}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#coinHeadsResult").textContent = data.coinSide;
      document.querySelector("#result").textContent = data.result;
    })
    .catch(error => console.error(error));
}

