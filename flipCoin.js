//
// has a server that renders JS file
// done on Js but needs to be served up by a server, but can be JS file
//
//
// we're requiring more modules this time
// url gives us access to the url


document.querySelector('.head').addEventListener('click', ifHeads)

document.querySelector('.tail').addEventListener('click', ifTails)

let heads = 0
let tails = 0
let array = ['coin2', 'coin3']

function ifHeads() {
  setTimeout(_ => {
    let probability = Math.floor(Math.random() * 2)
    document.querySelector('#coin').classList.add(array[probability])
    if (probability == 1) {
      document.querySelector('.result').innerText = 'You Guessed Right!'
      console.log('hello')
    } else {
      document.querySelector('.result').innerText = 'You lost!'
    }
  }, 250)
  document.querySelector('#coin').classList.remove('coin2')
  document.querySelector('#coin').classList.remove('coin3')
}

function ifTails() {
  setTimeout(_ => {
    let probability = Math.floor(Math.random() * 2)
    document.querySelector('#coin').classList.add(array[probability])
    if (probability == 0) {
      document.querySelector('.result').innerText = 'You Win!'
    } else {
      document.querySelector('.result').innerText = 'Wrong choice...'
    }
  }, 250)
  document.querySelector('#coin').classList.remove('coin2')
  document.querySelector('#coin').classList.remove('coin3')
}
