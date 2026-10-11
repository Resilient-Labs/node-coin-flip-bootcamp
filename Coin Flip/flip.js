const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
         
const headsImg = "medusaCoinH.webp"
const tailsImg= "medusaCoinT.webp"
//Need 2 options
//display is on the client side
//Math.random with 50% chance


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
  }
  else if (page == '/api') {
    if ('coinFlip' in params) {
      if (params['coinFlip'].toLowerCase() == 'heads') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        let flipCoin = ['heads', 'tails'];
          let userInput = params['coinFlip'].toLowerCase()
        const coin = flipCoin[Math.floor(Math.random() * flipCoin.length)];
          let coinFace = (coin === 'heads')? headsImg : tailsImg

        if (userInput === coin) {
          result = 'win';
        } else {
          result = 'lose';
        }
        const conditionOne = {
          playerOne: 'Heads',
          flipResult: `The coin landed on ${coin}`,
          message: `You ${result}`,
          Image:coinFace,
        };
        res.end(JSON.stringify(conditionOne));
      } 
      else if (params['coinFlip'].toLowerCase() == 'tails') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        let flipCoin = ['heads','tails'];
         let userInput = params['coinFlip'].toLowerCase()

        const coin = flipCoin[Math.floor(Math.random() * flipCoin.length)];

          let coinFace = (coin === 'tails')? tailsImg : headsImg


        if (userInput === coin) {
          result = 'win';
        } else {
          result = 'lose';
        }

        const conditionTwo = {
          playerTwo: 'Tails',
          flipResult: `The coin landed on ${coin}`,
          message: `You ${result}`,
          Image:coinFace,
          
        };
        res.end(JSON.stringify(conditionTwo));
      }
    }
    
  } else if (page == '/coin-flip.wav'){
    fs.readFile('coin-flip.wav', function(err, data) {
    res.writeHead(200, {'Content-Type': 'audio/wav'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/medusaCoinH.webp'){
    fs.readFile('medusaCoinH.webp', function(err, data) {
    res.writeHead(200, {'Content-Type': 'image/webp'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/medusaCoinT.webp'){
    fs.readFile('medusaCoinT.webp', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/webp'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }
  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
