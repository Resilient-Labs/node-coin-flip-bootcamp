document.querySelector('.flipB').addEventListener('click',flipCoin)

document.querySelector('.resetB').addEventListener('click',reset)
let headIN = document.querySelector('.h span')
let tailIN= document.querySelector('.t span')
let hr=document.querySelector('#coin')
let front=0
let back=0
    function flipCoin(){
  // let probability = Math.floor(Math.random()*2)+1
      if (hr.classList.contains('animate-heads')){

      start()
      console.log('1');
    }else if (hr.classList.contains('animate-tails')){
      start()
      console.log('2');
    // do tails!!!!!!!!!
    }else{
      console.log('1');
      start()
    }
}

function start(){
  let probability = Math.floor(Math.random()*2)+1
  if (probability%2){
    front++
    flip('Heads')
    coin.setAttribute('class', 'animate-' + 'heads');
  }else{
    coin.setAttribute('class', 'animate-' + 'tails');
    back++
    flip('tails')
  }
}
function reset(){
  if (hr.classList.contains('animate-heads')){
    hr.classList.remove("animate-heads")

    console.log('1');
  }else if (hr.classList.contains('animate-tails')){
    hr.classList.remove("animate-tails")
  }
}
function flip(side){
  headIN.innerText=front
  tailIN.innerText=back
}
