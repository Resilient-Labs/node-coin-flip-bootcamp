console.log("hi");

document.querySelector('.head').addEventListener('click', ifHeads)

document.querySelector('.tail').addEventListener('click', ifTails)

let heads = 0
let tails = 0

function ifHeads(){
 if(Math.floor(Math.random()*2) == 0){
  document.querySelector('.result').innerText = 'You Win!'
} else{
  document.querySelector('.result').innerText = 'You Lose!'
 } 
}

function ifTails(){
 if(Math.floor(Math.random()*2) == 1){
  document.querySelector('.result').innerText = 'You Win!'
  } else {
  document.querySelector('.result').innerText = 'You Lose!'
  } 
}

// worked on with Khorally, Tamika, and Rodas //
