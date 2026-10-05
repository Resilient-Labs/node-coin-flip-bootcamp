
document.querySelector('#flipButton').addEventListener('click', flipFlop)

function flipFlop() {

    const userInput = document.querySelector('#user').value;
    console.log(userInput);

    //Fetch me the URL
    fetch(`/api?coinFlip=${userInput}`)
        //Return the information in JSON format
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector('#apple').textContent = data.name;
            document.querySelector('#windows').textContent = data.winOrLoseMessage;
            document.querySelector('#chrome').textContent = data.theOutcome;
        })
        .catch(error => {
            console.error('Error:', error);
        })
}