// Goal: Create a simple web application that uses the fs and http modules. Use http to create the server and fs to read your html file. Include vanilla ES6 js in a script tag at the bottom of your html file. Try creating a coin flip guessing game
document.querySelector('#flip-coin').addEventListener('click', flipCoin)

function flipCoin(){
  let choice;
  if (document.querySelector("#heads").checked) {
    choice = 0;
  } else if (document.querySelector("#tails").checked) {
    choice = 1;
  }
  console.log('choice', choice);
  if (choice !== undefined) {
    fetch(`/api?choice=${choice}`)
    .then(response => response.json())
    .then((data) => {
      console.log("data", data);
      document.querySelector("#result").textContent = data.result;
    });
  }  

}
