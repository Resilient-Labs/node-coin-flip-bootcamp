// alert('works')

document.querySelector("#clickIt").addEventListener("click", getInput)

function getInput(){

    const userCoinInput = document.querySelector("#coinFlip").value
    console.log(userCoinInput)

    fetch(`/api?coinFlip=${encodeURIComponent(userCoinInput)}`)
    .then(response=>response.json())
    .then((data)=>{
        console.log(data)
        document.querySelector('#client').textContent = `Client Toss: ${userCoinInput}`
        document.querySelector("#winner").textContent = `Server: ${data.result}`
        document.querySelector("#message").textContent = `Winner : ${data.winner}`
    })
    .catch((err)=>{
        console.log(err)
    })
}
