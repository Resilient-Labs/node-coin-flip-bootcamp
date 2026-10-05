document.getElementById('flipButton').addEventListener('click', coinFlip);

function coinFlip() {
  document.getElementById('coin').style.transform = 'rotateY(180deg)';
  document.getElementById('coin').style.transition = 'transform 0.5s';

  setTimeout(() => {
    document.getElementById('coin').style.transform = 'rotateY(0deg)';
  }, 300);

  fetch(`/api?coinflip=heads`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);

      if (data.results === 'heads') {
        document.getElementById('coin').innerHTML = 'Heads';
        document.getElementById('result').innerHTML = data.message;
      } else {
        document.getElementById('coin').innerHTML = 'Tails';
        document.getElementById('result').innerHTML = data.message;
      }
    });
  
}