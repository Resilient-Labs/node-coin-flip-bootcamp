const tail = document.querySelector('#tail');
const head = document.querySelector('#head');
const btn = document.querySelectorAll('button');
const result = document.querySelector('#result');

btn.forEach(function(el){
el.addEventListener('click',()=>{
  let userChoice= event.target.id
  let answer= flip();

  compare(answer,userChoice);

 })
});

function flip() {
  let randomize = Math.floor(Math.random() *2)
  let answer;
   if(randomize === 0){
      answer= "head"
   }
   else if(randomize === 1) {
      answer= "tail"
   }else{
     console.log('error')
   }
   return answer;

}

function compare(answer,userChoice){
  console.log(answer)
  if(userChoice === answer ){
    document.querySelector('#pic').src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fngccoin-production%2Fcoin-grading-guide%2FWashington-Quarters-Reverse.jpg&f=1&nofb=1'
    document.querySelector('#result').textContent="you won"
  } else {
    document.querySelector('#pic').src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.coinvalues.com%2Foriginal%2Ff5%2F38%2F09%2F1960-washington-quarter-value-79-1396214571.jpg&f=1&nofb=1'
    document.querySelector('#result').textContent="you lost"

  }
}
