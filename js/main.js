document.querySelector('#flipButton').addEventListener('click', flipButton)

function flipButton() {



  fetch(`/coinFlipApi`)
    .then(response => response.text())
    .then((data) => {
      console.log(data);

      const result = document.querySelector("#coinResult").textContent = data;

    });

}

