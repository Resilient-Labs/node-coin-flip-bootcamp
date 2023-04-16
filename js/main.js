function whatSide(){
const coinSide = document.querySelector('input[name = "coinGame"]:checked').value

  fetch(`/api?coinSide=${coinSide}`)
  .then(res => res.json())
      .then((data) => {
        console.log(data)
        
        document.querySelector('#result').textContent = data.winOrLoose

        
      })
}
document.querySelector('#submit').addEventListener('click', whatSide)



// ********************************************************* first attempt
// const buttons = document.querySelectorAll('button')
// // console.log(buttons)

// buttons.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     const coinSide = e.target.innerText
//     console.log(coinSide)
    
//     fetch(`/api?coin=${coinSide}`)
//       .then(res => res.json())
//       .then((data) => {
//         console.log(data)
//         // const result = data

//         document.querySelector('#results').innerText = data
//       })
//   })
// })