console.log('hello')
document.querySelector('.head').addEventListener('click', playGame)

document.querySelector('.tail').addEventListener('click', playGame)

let heads = 0
let tails = 0

function playGame(){
 if(Math.floor(Math.random()*2) == 0){
   setTimeout( function (){
    document.querySelector('.result').innerText = 'You win!'
   }, 2000)
   // document.querySelector('.main').innerHTML.style.background. = 'https://media.giphy.com/media/cQ75oh2k0p5rSpur1L/giphy.gif'

} else{
  setTimeout( function (){
  document.querySelector('.result').innerText = 'Oops you lose :('
  }, 2000)
  // document.querySelector('.main').innerHTML.style.background. = 'https://media.giphy.com/media/cQ75oh2k0p5rSpur1L/giphy.gif'

 }
}

// function ifTails(){
//  if(Math.floor(Math.random()*2) == 1){
//   document.querySelector('.result').innerText = 'You Win :)'
//   } else {
//   document.querySelector('.result').innerText = 'Oops you lose :('
//   }
// }
