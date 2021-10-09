let result = document.querySelector("#result");
let score = document.querySelector("#score");
let heads = document.querySelector("#heads");
let tails = document.querySelector("#tails");
let counter = 0;

heads.onclick = (e) => {
  const choice = `heads`;
  fetch(`/api?coin=${choice}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.face);
      if (e.target.id === data.face) {
        counter++;
        score.innerText = counter;
        result.innerText = `The result is ${data.face}, you won!`;
      } else {
        result.innerText = `The result is ${data.face}, you lost!`;
        counter--
        score.innerText = counter;
      }
      if (counter < -2 && counter > -5){
        alert(`Get good plz`)
      }
    });
};

tails.onclick = (e) => {
  const choice = `tails`;
  fetch(`/api?coin=${choice}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.face);
      if (e.target.id === data.face) {
        counter++;
        score.innerText = counter;
        result.innerText = `The result is ${data.face}, you won!`;
      } else {
        result.innerText = `The result is ${data.face}, you lost!`;
        counter--
        score.innerText = counter; 
      }
      if (counter < -2 && counter > -5 ){
        alert('At this point just refresh cause you not very good at the game')
      }
    });
};
