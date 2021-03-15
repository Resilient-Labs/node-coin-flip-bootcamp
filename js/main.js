document.querySelector('button').addEventListener('click', flipper)
 let headsCounter = 0
 let tailsCounter = 0
 let angle = 0

function flipper(){
let coinFace = Math.floor(Math.random() * 10)
angle += 720

if(coinFace < 5){
  headsCounter++
  document.querySelector('img').src = '../heads.jfif'
  document.querySelector('img').style.transform = 'rotateX(' + angle + 'deg)';
  document.querySelector('.headScore').innerText = headsCounter
  console.log('heads' + coinFace);

} else{
  tailsCounter++
  document.querySelector('img').src = '../tails.jpg'
  document.querySelector('img').style.transform = 'rotateX(' + angle + 'deg)';
  document.querySelector('.tailScore').innerText = tailsCounter
  console.log('tails' + coinFace);
}

}
