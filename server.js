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
    flipArray = ['heads', 'tails']
    if('input' in params){
      if(params['input']== 'heads'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        randomFlip = flipArray[Math.floor(Math.random() * 2)]
        if(params['input'] == randomFlip){
          winOrLose = 'Won'
        }else{
          winOrLose = 'Lose'
        }
        console.log(randomFlip)
        const objToJson = {
          yourChoice: "Heads",
          flipResult: `The flip was ${randomFlip}`,
          winOrLose: `You ${winOrLose}!`
        }
        res.end(JSON.stringify(objToJson));
      }
      else if(params['input'] == 'tails'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        randomFlip = flipArray[Math.floor(Math.random() * 2)]
        if(params['input'] == randomFlip){
          winOrLose = 'Won'
        }else{
          winOrLose = 'Lose'
        }
        console.log(randomFlip)
        const objToJson = {
          yourChoice: "Tails",
          flipResult: `The flip was ${randomFlip}`,
          winOrLose: `You ${winOrLose}!`
        }
        res.end(JSON.stringify(objToJson));
      }
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
