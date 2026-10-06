




document.querySelector('#heads').addEventListener('click', heyBigHead);     

document.querySelector('#tails').addEventListener('click', tailsNeverFails);

function heyBigHead(){

    let chooseHeads = document.querySelector('#heads').value;

    fetch(`/api?coin=${chooseHeads}`)                       // This function runs the heads button
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
            const yourChoice = data.yourChoice;
            const coinResult = data.flipResult;
            const winOrLose = data.outcome;

            document.querySelector('#choice').textContent = yourChoice;
            document.querySelector('#result').textContent = coinResult;
            document.querySelector('#winOrLose').textContent = winOrLose;


        })

}


function tailsNeverFails() {                                 // This button runs the tails button

    let chooseTails = document.querySelector('#tails').value;

    fetch(`/api?coin=${chooseTails}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            const yourChoice = data.yourChoice;
            const coinResult = data.flipResult;
            const winOrLose = data.outcome;

            document.querySelector('#choice').textContent = yourChoice;
            document.querySelector('#result').textContent = coinResult;
            document.querySelector('#winOrLose').textContent = winOrLose;

        })
}