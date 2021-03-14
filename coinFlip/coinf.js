// a youtube video and house hayden helped me with this

document.getElementById('flip').addEventListener('click', flipCoin);

const coin = document.querySelector('#coin');
const status = document.querySelector('#status');
const heads = document.querySelector('#headsCount');
const tails = document.querySelector('#tailsCount');
let headsCount = 0;
let tailsCount = 0;

function processResult(result) {
    if (result === 'heads') {
       headsCount++;
       heads.innerText = headsCount;
     } else {
       tailsCount++;
       tails.innerText = tailsCount;
     }
     status.innerText = result;
}

function flipCoin() {
  coin.setAttribute('class', '');
  const random = Math.random();
  const result = random < 0.5 ? 'heads' : 'tails';

deferFn(function() {
   coin.setAttribute('class', 'animate-' + result);
   deferFn(processResult.bind(null, result), 2900);
 }, 100);
}

function deferFn(callback, ms) {
  setTimeout(callback, ms); 
}