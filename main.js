document
  .querySelector(".heads")
  .addEventListener("click", e => coinResult(e));
document
  .querySelector(".tails")
  .addEventListener("click",e => coinResult(e));

function coinResult(e) {
const choice = e.target.id
console.log(choice)
  fetch('/api?coinOutcome=result')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("h2").innerText = data.result;
      if(choice == data.result){
        document.querySelector('.winOrLose').innerText = 'You Win!'
      }else{
        document.querySelector('.winOrLose').innerText = 'You Lose!'
      }
    })
    .catch((error) => {
      console.log(`${error}`);
    });
}
