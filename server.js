const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page === '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page === '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page === '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page === '/api') {
    if('coinSide' in params){
      let coinValue = Math.random()
      console.log(coinValue)
      if(params['coinSide'] == 'Heads' && coinValue > .5){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          userChoice: "Heads",
          coinResult: "Heads",
          status: "win"
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['coinSide'] == 'Tails' && coinValue > .5){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          userChoice: "Tails",
          coinResult: "Heads",
          status: "loss"
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['coinSide'] == 'Heads' && coinValue < .5){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          userChoice: "Heads",
          coinResult: "Tails",
          status: "loss"
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['coinSide'] == 'Tails' && coinValue < .5){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          userChoice: "Tails",
          coinResult: "Tails",
          status: "win"
        }
        res.end(JSON.stringify(objToJson));
      }
    }//student if
  }//else if
  else if (page === '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page === '/js/main.js'){
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