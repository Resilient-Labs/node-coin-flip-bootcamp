//psuedo code
//Goal: Create a simple web application that uses the fs and http modules. Use http to create the server and fs to read your html file. 
// Include vanilla ES6 js in a script tag at the bottom of your html file. 
// Try creating a coin flip guessing game
//after creating my api in server 
//create my event listener to run my function
//inside my function i will have a fetch that will get a response from my api and use it to get data needed
//display my data in dom
///have a catch for errors




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

