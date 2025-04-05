document.querySelector('#click1').addEventListener('click', startGame)
document.querySelector('#click2').addEventListener('click', startGame)
// document.querySelector("h3").innerHTML =

function startGame(){
    
    let side = Math.floor(Math.random() * (2))
	let whoWon = ""
    let winner = document.querySelector('#see')
    
   
    if(side === 0){
        wallet = wallet + minAmount * 2
        whoWon = "HEADS! YOU WIN!!!"
        
    }else{
        wallet = wallet - minAmount
        whoWon = "TAILS! TRY AGAIN."
        
    }

    document.querySelector("h3").innerHTML = whoWon + "Wallet: $" + wallet
}

let wallet = 50
let minAmount = 5