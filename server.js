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
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('student' in params){
      coinArray = ['heads','tails']
      if(params['student']== 'heads'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        randomCoin = coinArray[Math.floor(Math.random() * coinArray.length)]
        if (randomCoin == params['student']) {
          result = 'You Won!' 
        } else {
          result = 'You Lost!'
        }
        const objToJson = {
          coinResult: `${result}`,
          coinName: "You Flipped Heads",
          
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['student'] == 'tails'){
        coinArray = ['heads','tails']
        res.writeHead(200, {'Content-Type': 'application/json'});
        randomCoin = coinArray[Math.floor(Math.random() * coinArray.length)]
        if (randomCoin == params['student']) {
          result = 'You Won!'
        } else {
          result = 'You Lost!'
        }
        const objToJson = {
          coinResult: `${result}`,
          coinName: "You Flipped Tails",
          
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
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


