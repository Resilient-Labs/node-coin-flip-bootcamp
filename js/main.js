//got help from brian melara
document.querySelector('.flipB').addEventListener('click', flipCoin)
document.querySelector('.resetB').addEventListener('click', reset)

let headsCounter = document.querySelector('.h span')
let tailsCounter= document.querySelector('.t span')
let hr=document.querySelector('#coin')
let front=0
let back=0
let timer = 0
function flipCoin(){
  let headsTails = (Math.floor(Math.random()*2))
  console.log(headsTails);
  (headsTails) ? flip('Heads') : flip('tails')

}

function reset(){
  hr.classList.remove("tailsFront")
  if (hr.classList.contains('animate-heads')){
    hr.classList.remove("animate-heads")

  }else if (hr.classList.contains('animate-tails')){
    hr.classList.remove("animate-tails")
    coin.setAttribute('class', 'tailsFront');
  }
}

function flip(side){
  if (side === 'Heads'){
    front++
    coin.setAttribute('class', 'animate-' + 'heads');
    headsCounter.innerText=front
  }
  else{
    back++
    coin.setAttribute('class', 'animate-' + 'tails');
    tailsCounter.innerText=back
  }

  clearInterval(timer)
  timer = setTimeout( () => reset(), 3000)
}
