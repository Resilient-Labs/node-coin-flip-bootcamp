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
  else if (page == '/zebra') {
    fs.readFile('juju.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    arrCoin = ['heads', 'tails']
    if('student' in params){
      if(params['student'] == 'heads'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        random = arrCoin[Math.floor(Math.random() * arrCoin.length)]
        checkResult = params['student'].toLowerCase()
        if(checkResult == random){
          congrats = 'You won!!!'
        } else{
          congrats = 'You Lost !!!'
        }
        console.log(checkResult, random, congrats)
        const objToJson = {
          playerChoice:`${checkResult}`,
          cpuChoice: `${random}`,
          winOrLose: `${congrats}`
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['student'] == 'tails'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        random = arrCoin[Math.floor(Math.random() * arrCoin.length)]
        checkResult = params['student'].toLowerCase()
        if(checkResult == random){
          congrats = 'You won!!!'
        } else{
          congrats = 'You Lost !!!'
        }
        const objToJson = {
          playerChoice:`${checkResult}`,
          cpuChoice: `${random}`,
          winOrLose: `${congrats}`
        }
        res.end(JSON.stringify(objToJson));
      }else if(params['student'] != 'tails' || params['student'] != 'heads' ){
        res.writeHead(200, {'Content-Type': 'application/json'});
        random = arrCoin[Math.floor(Math.random() * arrCoin.length)]
        checkResult = params['student'].toLowerCase()
        if(checkResult != random){
          congrats = 'Please Enter "heads" or "tails"'
        }
        const objToJson = {
          winOrLose: `${congrats}`
        }
        res.end(JSON.stringify(objToJson));
      }///student != leon
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

server.listen(4002);
