counterTails = 0;
counterHeads = 0;

let placeResult = document.querySelector("#result")

let btn = document.querySelectorAll("button") // Select the two btns
btn.forEach(element => element.addEventListener('click', apiRequest)) // Add event listener

async function apiRequest(button) {

    let userChoice = button.path[0].innerText

    try {
        const response = await fetch(`/api`)
        const data = await response.json()

        let coinResult = data.result
        placeResult. innerText = `Result: ${coinResult}`

        if(coinResult === 'heads') {

            counterHeads += 1;
            
            document.querySelector('img').classList.remove("hidden")
            document.querySelector('img').src = data.image

            document.querySelector('#counter').innerText = `Heads = ${counterHeads}`

        }else {

            counterTails += 1;

            document.querySelector('img').classList.remove("hidden")
            document.querySelector('img').src = data.image

            document.querySelector('#counter').innerText = `Tails = ${counterTails}`

        }

    } catch (error) {
        console.log(error)
    }
}