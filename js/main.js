// document.querySelector('button').addEventListener('click',flipCoin)

// function flipCoin(){
//     const prediction = document.querySelector('#headsTails').value
//     console.log(prediction)

//   fetch(`/api?chosenCoinFlip=${prediction}`)
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//       document.querySelector("#personName").textContent = data.name
//     });
// }

document.querySelector('button').addEventListener('click', flipCoin)

function flipCoin(){
    const prediction = document.querySelector('#headsTails').value
    console.log(prediction)

    fetch(`/api?chosenCoinFlip=${prediction}`)
    // fetch url from server 
    .then(res => res.json())
    .then((data) => {
        console.log(data)
        document.querySelector('h3').innerText = data.result
        
    }) 
    .catch (err => {
        console.log(`Error ${err}`)
    })
} 