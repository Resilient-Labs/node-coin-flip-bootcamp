let heads = 'heads'
let tails = 'tails'
document.querySelector('#heads').addEventListener('click', ()=>flipCoin(heads))
document.querySelector('#tails').addEventListener('click', ()=>flipCoin(tails))

 async function flipCoin(coinChoice){
    const res = await fetch('/api')
    const coinFlipData = await res.json()
    let coinFlipResult = coinFlipData.outcomes[Math.round(Math.random())]
    if( coinFlipResult == coinChoice){
        return document.querySelector('#result').innerHTML = `
            <h2 id="correct">${coinFlipResult}</h2>
            <div>
                <p id="correct">You chose right!</p>
            </div>
        `
    }else{
        return document.querySelector('#result').innerHTML = `
            <h2 id="wrong">${coinFlipResult}</h2>
            <div>
                <p id="wrong">You chose wrong!</p>
            </div>
        `
    }
    
}