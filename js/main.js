document.querySelector('#clickMe').addEventListener('click', flip)

function flip(){

const input = document.querySelector("#userGuess").value.toLowerCase()

 fetch(`http://localhost:5050/cointoss?guess=${input}`)
  .then(response => response.json())
  .then((data) => {
    console.log(data);
      document.querySelector("#message").textContent = data.winOrLose ? "You win" : "You loss"
  });
}









// document.querySelector('#clickMe').addEventListener('click', makeReq)

// function makeReq(){

//   const userName = document.querySelector("#userName").value;

//   fetch(`/api?student=${userName}`)
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//       document.querySelector("#personName").textContent = data.name
//     });

// }