// worked with house Cass


document.querySelector('.head').addEventListener('click', headz)

document.querySelector('.tail').addEventListener('click', tailz)

// let heads = 0
// let tails = 0
let array = ['heads', 'tails']


function headz() {
  setTimeout(_ => {
    let prob = Math.floor(Math.random() * 2)
    document.querySelector('.coin').classList.add(array[prob])
    if (prob == 0) {

      document.querySelector('.result').innerText = 'Whip it! You win!'
    } else {
      document.querySelector('.result').innerText = 'Sorry, no Audi for you.'
    }
  }, 300)
  document.querySelector('.coin').classList.remove('heads')
  document.querySelector('.coin').classList.remove('tails')
}

function tailz() {
  setTimeout(_ => {
    let prob = Math.floor(Math.random() * 2)
    document.querySelector('.coin').classList.add(array[prob])
    if (prob == 1) {
      document.querySelector('.result').innerText = 'Skrt skrt! You Win!'

    } else {
      document.querySelector('.result').innerText = 'Meh. You lost.'
    }
  }, 300)
  document.querySelector('.coin').classList.remove('heads')
  document.querySelector('.coin').classList.remove('tails')
}
