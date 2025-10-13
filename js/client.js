let btn = document.querySelector('button')

btn.addEventListener("click", flipCoin)

async function flipCoin(){
    try{
        
    let output = document.querySelector('#output')
    // fetch my flipCoin file from my node server code
    let response = await fetch('/flipCoin')

    if(!response.ok){
        alert("Something went wrong with the API")
    }
    let data = await response.json()

    console.log(data)
    output.innerHTML = data.resultOfCoinFlip
    }catch(err){
        console.log(`Error: ${err}`)
    }

}