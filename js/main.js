document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const headscounter = document.querySelector("#headscounter").value;
  const tailscounter = document.querySelector("#tailscounter").value;


  const random = Math.random();
  console.log(random);

  if (random < 0.5) {
    document.querySelector("#displaycoin").src = 'https://image.similarpng.com/very-thumbnail/2021/08/Cryptocurrency-bitcoin-gold-coin-isolated-on-transparent-background-PNG.png';
    makeFetch('heads'); 
   }
  else {
    document.querySelector("#displaycoin").src = "https://img.freepik.com/premium-vector/bitcoin-money-isolated-transparent-background-golden-bitcoin-coin-blockchain-technology-crypto-currency-realistic-illustration_365941-33.jpg?w=2000";
    makeFetch('tails');}
}


function makeFetch(toss){
  fetch(`/api?bitcoinflip=${toss}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#headscounter").innerHTML = data.heads;
      document.querySelector("#tailscounter").innerHTML = data.tails;
    });
}




