

document.querySelector('.head').addEventListener('click', ifHeads)

document.querySelector('.tail').addEventListener('click', ifTails)


let heads = 0
let tails = 0
const front = document.createElement('img')
front.src = 'headss.png'
const back = document.createElement('img')
back.src = 'tailss.png'

document.getElementByClass('coin').appendChild(front)
document.getElementById('back').classList.add('hide')



function ifHeads(){
 if(Math.floor(Math.random()*2) == 0){
  document.querySelector('.result').innerText = 'You win!'
} else{
  document.querySelector('.result').innerText = 'Oops you lose :('
 }
}

function ifTails(){
 if(Math.floor(Math.random()*2) == 1){
  document.querySelector('.result').innerText = 'You Win :)'
  } else {
  document.querySelector('.result').innerText = 'Oops you lose :('
  }
}
