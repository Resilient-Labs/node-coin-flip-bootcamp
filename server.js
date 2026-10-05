//this is boilerplate code

const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
//const figlet = require('figlet')

//const coinFlipSides = ['heads', 'tails'];

// const server = http.createServer(function(req, res) {
//   const parsedUrl = url.parse(req.url);
//   const page = parsedUrl.pathname;
//   const params = querystring.parse(parsedUrl.query);

//   if (page === '/') {
//     fs.readFile('index.html', function(err, data)) {
//       if (err) {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end();
//       }}

//  else if (page == '/api') {
//     if ('coinFlip' in params){
//         if(params['coinFlip'] === "Head"{
//             res.writeHead(200, {'Content-Type': 'application/json'})
//             flipDice = ["Head", "Tail"]

//     coinLogic  = Math.floor(Math.random()) * flipDice.length)

//     if(params[`coinFlip`] === coinLogic?{
//         winner = "Winner, winner, chicken dinner!!!!"
//     }
// else{
//     winner = "You lost. Now you Die."
//     res.end()
// }

//      const jawn = {
//         result : `${coinLogic}`, 
//         message: "Head"

//      }
//     res.end(JSON.stringify(coinLogic));
        
    

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
//   }
//   else if (page == '/otherpage') {
//     fs.readFile('otherpage.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       res.end();
//     });
//   }
//   else if (page == '/otherotherpage') {
//     fs.readFile('otherotherpage.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       res.end();
//     });
  }
  else if (page == '/api') {
    if('coinFlip' in params){
      const userGuesses = params['coinFlip'].toLowerCase()

      const flipResult = Math.random() < 0.5 ? 'heads' : 'tails';

      const winnerDisplay = (userGuesses === flipResult)
      ? "Winner, winner, chicken dinner!!!"
      : "You lost. Now you Die."


        
        // randomFlip = flipArray(Math.floor(Math.random() * flipArray.length))
        // }

        const responseObj = {
            flip: flipResult, 
            message: winnerDisplay
        }

        res.writeHead(200, {'Content-Type': 'application/json'});
        // if(params["issue"]== 'heads')
        res.end(JSON.stringify(responseObj));
      }//student = leon
      
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);