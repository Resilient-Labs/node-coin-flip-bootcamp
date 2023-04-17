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
  }else if (page == '/api') {
    if('coin' in params){
      if(params['coin'] == 'heads'.toLowerCase()){
        res.writeHead(200, {'Content-Type': 'application/json'});
       randomNumber = Math.floor(Math.random()*2)
        if(randomNumber === 1){
          result = 'We have a winner!'
        }else{
           result = 'Better luck next time'
        }
        const objToJson = {
          choice: "you chose Heads",
          result: `${result}`
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['coin'] == 'tails'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        randomNumber = Math.random()
         if(randomNumber < .5){
          console.log(randomNumber)
          result = 'We have a winner!'
         }else if(randomNumber > .5){
          console.log(randomNumber)
          result = 'Better luck next time'
         }
        const objToJson = {
          choice: "you chose Tails",
          result: `${result}`
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
