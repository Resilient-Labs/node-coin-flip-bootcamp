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
    if('playerGuess' in params){
      let coin = Math.floor(Math.random() * 2) === 0 ? 'heads' : 'tails'
      let coinImage = coin === 'heads' ? '<img class="heads animate-coin" src="css/img/heads.png"/>' : '<img class="tails animate-coin" src="css/img/tails.png"/>'

      let playerGuess = params['playerGuess']

      let result = coin === playerGuess ? true : false
      res.writeHead(200, {'Content-Type': 'application/json'});
      const objToJson = {
        flipResult: coin,
        flipResultImg: coinImage,
        outcome: result
      }
      res.end(JSON.stringify(objToJson));
    }//student if
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/css/reset.css'){
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
  } else if (page == '/css/img/heads.png'){
    fs.readFile('css/img/heads.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }else if (page == '/css/img/tails.png'){
    fs.readFile('css/img/tails.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }
  // else if (page == 'css/img/circus-background.jpeg'){
  //   fs.readFile('css/img/circus-background.jpeg', function(err, data) {
  //     res.writeHead(200, {'Content-Type': 'image/jpeg'});
  //     res.write(data);
  //     res.end();
  //   });
  // }
  else{
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

server.listen(8100);
