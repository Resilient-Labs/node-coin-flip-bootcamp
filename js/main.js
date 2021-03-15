//when click, section be either be head or tail
//make probably for the coin to flip-- use math.random and math.ceil to round it to a whole number
//client side

<<<<<<< Updated upstream
=======
document.querySelector('#flipCoin').addEventListener('click', fetchingCoin)

function fetchingCoin(){
    fetch ('/api')
    .then(function (res){
        return res.json() 
    })
    .then(data=>{
        console.log(data.answer)
    })
}

>>>>>>> Stashed changes
document.querySelector('#flipCoin').addEventListener('click', coinFlips)

function coinFlips() {
    let probability=Math.ceil(Math.random()*2)
    if (probability%2===0){
<<<<<<< Updated upstream
        document.querySelector('img').src='img/head.png'
        document.querySelector('p').innerHTML='Head Wins'
        console.log('head')
    }else{
        document.querySelector('img').src='img/tail.png'
        document.querySelector('p').innerHTML='Tail Wins'
=======
        document.querySelector('img').src='../img/head.png'
        document.querySelector('span').innerHTML='Head Wins'
        console.log('head')
    }else{
        document.querySelector('img').src='../img/tail.png'
        document.querySelector('span').innerHTML='Tail Wins'
>>>>>>> Stashed changes
        console.log('tail')
    }
}