document.querySelector('button').addEventListener('click', makeReq)

function makeReq(){
  fetch('/api')
    .then(response => response.text())
    .then((data) => {
      console.log(data);
      document.querySelector("h2").innerText = data
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      document.querySelector("h2").textContent = 'Error during flip';
    });
}

