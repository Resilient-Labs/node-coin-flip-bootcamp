
// coin object which holds head and tails
var coin = ['Heads', 'Tails'];
// getting two buttons from html, one sorta resets it, the other flips coin
document.getElementById('dice').onclick = flipCoin;
document.getElementById('reload').onclick = clear;
// this function goes through our array ofd two options
// randomly selects heads or tails

function flipCoin(){
  var coinFlip = coin[Math.floor(Math.random()*coin.length)];
  console.log(coinFlip);
  // document.getElementById('results').innerHTML = coinFlip;
  fetch(`/coinFlip?checkCoinFlip=${coinFlip}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data.message, "serverRes");
        document.querySelector('#results').textContent = data.message
        if(data.message === "Heads"){
          document.querySelector('img').src = "image/coinFace.jpg"
        }else{
          document.querySelector('img').src = "image/coinTails.jpg"
        }
      });

}
//  allows clear button to remove heads or tails
function clear(){
  document.getElementById('results').innerHTML = 'pick a side'
}

// fetch(`/coinFlip?checkCoinFlip=${``}`)
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//       input.textContent = data.message
//     });
