const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');

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
  } else if  (page == '/api') {
    flipArray = ['heads', 'tails']
    if ('coin' in params){
      if (params['coin'] == 'heads') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        randomFlip = flipArray[Math.floor(Math.random() * flipArray.length)]    // Math for our possible outcomes of either heads or tails

        if (params['coin'] == randomFlip) {     // (if heads == heads)
          winOrLose = 'Won'
        } else {
          winOrLose = 'Lose'
        } 
        const data = {
          yourChoice: 'You chose heads',
          flipResult: `The coin landed on ${randomFlip}`,
          outcome: `You ${winOrLose}!`
        }

        res.end(JSON.stringify(data));
      } else {
        res.writeHead(200, {'Content-Type': 'application/json'});
        randomFlip = flipArray[Math.floor(Math.random() * flipArray.length)]

        if (params['coin'] == randomFlip) {     // (if tails == tails)
          winOrLose = 'Won'
        } else {
          winOrLose = 'Lose'
        }
        const data = {
          yourChoice: 'You chose tails',
          flipResult: `The coin landed on ${randomFlip}`,
          outcome: `You ${winOrLose}!`
        }

        res.end(JSON.stringify(data));
      }
    }
  }else if (page == '/css/main.css'){
    fs.readFile('css/main.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);


