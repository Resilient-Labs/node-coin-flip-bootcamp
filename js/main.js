document.querySelector('#flipMe').addEventListener('click', flippaCoin)

function flippaCoin(){

  const userName = document.querySelector("#userName").value;

  fetch(`/api?student=${userName}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      
      document.querySelector("#coinSide").textContent = data.coinSide
      document.querySelector("#endResult").textContent = data.endResult
      document.querySelector("#letsSee").textContent = data.letsSee
    });

}