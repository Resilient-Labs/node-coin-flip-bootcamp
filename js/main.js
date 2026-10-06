document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const choice = document.querySelector("#userName").value;
    const coin = document.querySelector("#coin")

  coin.classList.remove("flip")

  // Restart the animation
  void coin.offsetWidth

  coin.classList.add("flip")

  fetch(`/api?input=${choice.toLowerCase()}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#yourChoice").textContent = data.yourChoice
      document.querySelector("#flipResult").textContent = data.flipResult
      document.querySelector("#winOrLose").textContent = data.winOrLose
    });

}

