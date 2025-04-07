document.querySelector('#headButton').addEventListener('click',() => makeReq('head'))
document.querySelector('#tailButton').addEventListener('click', () => makeReq('tail'))

function makeReq(userInput){

  fetch(`/api`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      if(data.result === userInput){
        alert("User Wins!!")
      } else {
        alert("User Looses!!")
      }
    });

}