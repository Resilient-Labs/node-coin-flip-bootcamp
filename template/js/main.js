document.querySelector('#click').addEventListener('click', flip)
 let heads = 0
 let tails = 0

function flip(){
let result = Math.floor(Math.random() * 10)

if(result < 5){
  heads++
  document.querySelector('img').src = '../heads.jpg'

} else{
  tails++
  document.querySelector('img').src = '../Tails.png'
}

}
