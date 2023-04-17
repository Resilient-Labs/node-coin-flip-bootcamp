document.querySelector(".button").addEventListener("click", makeGuess)

function makeGuess(){
    let userInput = document.querySelector(".userInput").value 

    if (userInput === "") return alert("Must enter valid guess")

    fetch(`/random?guess=${userInput}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data)

            document.querySelector(".coinResult").innerText = `The coin is ${data.random}`

            document.querySelector(".status").innerText = `You ${data.winOrLoss}`
        })
        
        .catch(err => {
            console.log(`error ${err}`)

        })

    document.querySelector(".userInput").value = ""
}