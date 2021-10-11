const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

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
    if('coin' in params){
      let bot= Math.floor(Math.random()*2) == 1 ? 'Tails' : 'Heads'
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          botChoice: bot,
          humanVsbot: params['coin'] === bot ? `the coin result is ${bot} you win`:`the coin result is ${bot} you lose`,
          image: bot == 'Heads'? 'Coin-heads.jpg': 'coin-tails.jpg'
      }
        
      res.end(JSON.stringify(objToJson));
    }//student if
  }//else if
  else if (page == '/Coin-heads.jpg'){
    fs.readFile('Coin-heads.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image'});
      res.write(data);
      res.end();
    });
  }  else if (page == '/coin-tails.jpg'){
    fs.readFile('coin-tails.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/main.js'){
    fs.readFile('main.js', function(err, data) {
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
