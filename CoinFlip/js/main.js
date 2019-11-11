//coin flip
alert('work')
//
// let headz = document.querySelector("#head")
// let tailz = document.querySelector("#tail")
// avoid the tempation to do something in js 
class Game {
  constructor(){

  }
}

let btnz = document.querySelectorAll(".btn")

btnz.forEach(function(el){
  el.addEventListener('click', function(){
    let userChoice = event.target.id
    let result = flip()
    compare(result, userChoice)
  })
});

function flip(){
  let random = Math.floor(Math.random() * 2)
  let result;

  if(random === 0){
    result = 'head'
  }else if(random === 1){
    result = 'tail'
  }else{
    alert('error')
  }
  return result
}

function compare(result, userChoice){
  console.log(result)
  if(userChoice === result){
    console.log('win')
  }else{
    console.log('lose')
  }

}
