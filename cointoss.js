
document.querySelector('button').addEventListener('click', flip)
let answer = document.querySelector('h2')
function flip(){
    let coinFlip =Math.floor(Math.random()* 2) +1
        if(coinFlip % 2){
            toss('Heads')
        }
         else{
            toss('Tails')
        }
    
}

function toss(coin){
    answer.innerText = coin
}
