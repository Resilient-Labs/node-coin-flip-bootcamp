document.querySelector('#heads').addEventListener('click', flipHeads)
document.querySelector('#tails').addEventListener('click', flipTails)

function flipHeads(){

  fetch(`/flip?choice=heads`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      ShowResult(data)
    });

}
function flipTails(){

  fetch(`/flip?choice=tails`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      ShowResult(data)
    });

}

function ShowResult(obj) {
  console.log(obj)
  if (obj.choice == obj.flipresult) {
    document.querySelector('p').innerText = `You chose ${obj.choice} and the result was ${obj.flipresult}. Luck was on your side!`
  }

  else {
    document.querySelector('p').innerText = `You chose ${obj.choice} and the result was ${obj.flipresult}. Luck was not on your side...`
  }
}