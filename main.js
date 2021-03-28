let head = document.getElementsByClassName('head');
let tail = document.getElementsByClassName('tail');

document.querySelector('button').addEventListener('click', flipper)

 let headsCounter = 0
 let tailsCounter = 0
 let angle = 0
 let headScore = 'Head Score Is: '
 let tailScore = 'Tail Score Is: '
function flipper(){

let coinFace = Math.floor(Math.random() * 10) // 7
angle += 720
if(coinFace < 5){
  headsCounter++
  document.querySelector('img').src = 'head.png'
  document.querySelector('img').style.transform = 'rotateX(' + angle + 'deg)';
  document.querySelector('.headScore').innerText = headScore + headsCounter
  console.log(head + coinFace);
} else{
  tailsCounter++
  document.querySelector('img').src = 'tail.png'
  document.querySelector('img').style.transform = 'rotateX(' + angle + 'deg)';
  document.querySelector('.tailScore').innerText = tailScore + tailsCounter
  console.log('tails' + coinFace);
}
}
