const heads = document.querySelector(".heads")
const tails = document.querySelector(".tails")
const coin = document.querySelector('.coin')
let result = document.querySelector('.result')
let outcome = document.querySelector('.outcome')
function flip () {
  coin.classList.add('flip')
  setTimeout(function(){ coin.classList.remove('flip') }, 1000);
  let random = Math.random()
  setTimeout(function(){
    if (random < .50) {
      result.innerHTML = 'heads'
    } else {
      result.innerHTML = 'tails'
    }
  }, 800);
}
heads.addEventListener('click', function(){
  flip()
  setTimeout(function(){result.innerHTML == 'heads' ? outcome.innerHTML = 'you won' : outcome.innerHTML = 'you lost';
},1000)})
tails.addEventListener('click', function(){
  flip()
  setTimeout(function(){result.innerHTML == 'tails' ? outcome.innerHTML = 'you won' : outcome.innerHTML = 'you lost';
},1000)})
