var headsScore = 0
var tailsScore = 0

document.querySelector('button').addEventListener('click', flipCoin)

function flipCoin(){
  const randomize = Math.floor(Math.random() * 2)
  if (randomize < 1) {
    headsScore += 1
    document.querySelector('.headsWinCounter').innerText = headsScore
    document.querySelector('img').src = 'img/heads.jpg'

    console.log('heads')
  }else{
    tailsScore += 1
    document.querySelector('.tailsWinCounter').innerText = tailsScore
    document.querySelector('img').src = 'img/tails.jpg'
    console.log('tails')


  }
}
