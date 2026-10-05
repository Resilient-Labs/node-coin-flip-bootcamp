
document.querySelector("#clickIt").addEventListener("click", getInput)

function getInput(){
    // variable for input
    const userCoinInput = document.querySelector("#coinFlip").value
    console.log(userCoinInput)

    // client always request information/ data 
    // fetch -> api to request data from the server

    fetch(`/api?coinFlip=${userCoinInput}`)
    .then(response=>response.json())
    .then((data)=>{
        console.log(data)
          document.querySelector("#client").textContent = `Client Toss:${userCoinInput}`
       document.querySelector("#winner").textContent = `server:${data.result}`
       document.querySelector("#message").textContent = `Result : ${data.winner}`
    })


}
