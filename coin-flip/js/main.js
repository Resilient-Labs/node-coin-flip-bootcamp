//add event listener and fetch

// const heads = document.querySelector('#heads').addEventListener('click', playHeads)
// const tails = document.querySelector('#tails').addEventListener('click', playTails)

const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', flipCoin));


function flipCoin(click) {

        fetch(`/api?choice=${click.target.id}`)
            .then(response => response.json())
            .then(data => {
                console.log('API Response:', data)
                document.querySelector('#user').innerHTML = data.user
                document.querySelector('#computer').innerHTML = data.computer
                document.querySelector('#outcome').innerHTML = data.outcome
            })
            .catch(error => console.error('Error:', error));
    
    
    
}


// const buttons = document.querySelectorAll('button')

// Array.from(buttons).forEach(element => element.addEventListener('click', flipCoin))

// function flipCoin(click){
//     if(click.target.classList.contains('coin1')){
// 		document.querySelector('#heads') = buttons
// 	}else{
// 		document.querySelector('#tails') = buttons
// 	}

// //for the query parameters inside the fetch you can just use the variables of the, you can also take a look at the achelor example to check which button was clicked, through event.target 
// fetch(`/api?choice=${buttons}`)
// .then(response => response.json())
// .then((data) => {
//   console.log(data);
//   document.querySelector("#personName").textContent = data.name
//   document.querySelector("#personStatus").textContent = data.status
//   document.querySelector("#personOccupation").textContent = data.currentOccupation
// });

// }


// const buttons = document.querySelectorAll('button');

// buttons.forEach(button => button.addEventListener('click', flipCoin));

// function flipCoin(click) {
//     if (click.target.classList.contains('coin1')) {
//         document.querySelector('#heads').textContent = click.target.textContent;
//     } else {
//         document.querySelector('#tails').textContent = click.target.textContent;
//     }

//     fetch(`/api?choice=${click.target.classList}`);
// }

