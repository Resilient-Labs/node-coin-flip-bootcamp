document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const coinInput = document.querySelector("#userInput").value;

  fetch(`/api?flip=${coinInput}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#flipChoice").textContent = data.choice
      document.querySelector("#results").textContent = data.winOrLose
    });

}
