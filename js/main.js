document.querySelector('#clickMe').addEventListener('click', twoFace)

function twoFace(){
    // Variable for input
    const userChoice = document.querySelector('#coinFlip').value.toLowerCase().trim()
    const message = document.querySelector('#message')

    if(!userChoice){
        message.textContent = 'Choose truth or dare first.'
        return
    }

    // Client = always requests info/data
    // Fetch = api to request data from the server

    fetch(`/api?coinFlip=${encodeURIComponent(userChoice)}`)
        .then(response => response.json())
        .then((data) =>{
            console.log(data)

            if(data.error){
                document.querySelector('#client').textContent = ''
                document.querySelector('#winner').textContent = ''
                message.textContent = data.error
                return
            }

            document.querySelector('#client').textContent = `You chose: ${data.choice}`
            document.querySelector('#winner').textContent = `The coin landed on: ${data.theOutcome}`
            message.textContent = data.message

        })
        .catch(error => console.log(error))
    
}