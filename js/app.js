let heads = document.getElementById('head');
let tails = document.getElementById('tails');
let answer = document.getElementById('answer');
let playerChoice;



function selectHeads(){
   playerChoice = "heads"
   checkWinner(playerChoice);
};
 function selectTails(){
   playerChoice = "tails"
   checkWinner(playerChoice);
 }


function checkWinner(choice){
  fetch(`/findWinner?choice=${playerChoice}`)
  .then(response => response.json())
    .then((data) => {
      console.log(data);
      console.log("player choice",playerChoice)
      if(data === true){
        document.getElementById('answer').innerHTML = 'You Won!'
      }else if (data === false){
        document.getElementById('answer').innerHTML = 'You Lost!'
      };
    })
    .catch(err => console.error(err))
}



heads.addEventListener('click',selectHeads)
console.log("works")
tails.addEventListener('click',selectTails)
console.log("works")
//
// const http = require('http');
// const fs = require('fs')
// const url = require('url');
// const querystring = require('querystring');
// const figlet = require('figlet')
//
//
// const server = http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'})
//   fs.readFile('index.html', function(error, data) {
//     if (error) {
//       res.writeHead(404)
//       res.write('Error: File Not Found')
//     }else {
//       res.write(data)
//     }
//     res.end()
//   })
// })
// server.listen(8000, function(error) {
//   if (error) {
//     console.log('Oops I think you broke something', error)
//   }else {
//     console.log('Shhh Im listening on port 8000')
//   }
// });
