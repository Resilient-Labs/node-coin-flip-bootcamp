document.querySelector('.head').addEventListener('click', ifHeads)
document.querySelector('.tail').addEventListener('click', ifTails)


let heads = 0
let tails = 0

const front = document.createElement('img')
front.classList.add('coin-img')
document.getElementById('coin').appendChild(front)
front.src = 'headss.png'

function ifHeads() {
  if (Math.floor(Math.random() * 2) == 0) {
    document.querySelector('.coin-img').src = 'headss.png'
    document.querySelector('.display').innerText = 'You win!'
  } else {
    document.querySelector('.coin-img').src = 'tailss.png'
    document.querySelector('.display').innerText = 'Oops you lose :('
  }
}

function ifTails() {
  if (Math.floor(Math.random() * 2) == 1) {
    document.querySelector('.coin-img').src = 'tailss.png'
    document.querySelector('.display').innerText = 'You Win :)'
  } else {
    document.querySelector('.coin-img').src = 'headss.png'
    document.querySelector('.display').innerText = 'Oops you lose :('
  }
}
