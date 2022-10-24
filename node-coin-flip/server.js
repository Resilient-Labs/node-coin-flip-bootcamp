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
  }
  else if (page == '/api') {
    if('coinFlip' in params){

        let randNum = Math.floor(Math.random() * 2) //This is to generate a number between 0 and 1 
        if(params['coinFlip'] == 'heads' && randNum === 0) { 
        res.writeHead(200, {'Content-Type': 'application/json'});
        const coinObj = {
            result: 'You won!',
        } 
        res.end(JSON.stringify(coinObj));
        }
        else if(params['coinFlip'] == 'heads' && randNum === 1) { 
        res.writeHead(200, {'Content-Type': 'application/json'});
        const coinObj = {
            result: 'You lost!',
        } 
        res.end(JSON.stringify(coinObj));
        }
        else if(params['coinFlip'] == 'tails' && randNum === 0) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const coinObj = {
            result: 'You lost!',
        } 
        res.end(JSON.stringify(coinObj));
        }
        else if(params['coinFlip'] == 'tails' && randNum === 1)
        res.writeHead(200, {'Content-Type': 'application/json'});
        const coinObj = {
            result: 'You won!',
        } 
        res.end(JSON.stringify(coinObj));
      } 
  }
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
  }
});

server.listen(8000);
