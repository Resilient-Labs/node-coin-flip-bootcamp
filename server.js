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
    coinArray = ['heads', 'tails']
    if('coins' in params){
      
      if(params['coins']== 'heads'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        random = coinArray[Math.floor(Math.random() * coinArray.length)]
        userChoice = params['coins']
        if(userChoice == random){
          statusMessage = 'Winner'
        }else{
          statusMessage = 'You Loose'
        } 
        console.log(userChoice, random, statusMessage)

        const objToJson = {
          playerChoice: `${userChoice}`,
          cpuChoice: `${random}`,
          winOrLoose: `${statusMessage}`
        }
        res.end(JSON.stringify(objToJson));
      }//coin = heads
      else if(params['coins']== 'tails'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        random = coinArray[Math.floor(Math.random() * coinArray.length)]
        userChoice = params['coins']
        if(userChoice == random){
          statusMessage = 'Winner'
        }else{
          statusMessage = 'You Loose'
        }
        console.log(userChoice, random, statusMessage)
        const objToJson = {
          playerChoice: `${userChoice}`,
          cpuChoice: `${random}`,
          winOrLoose: `${statusMessage}`
        }
        res.end(JSON.stringify(objToJson));
      }// coin = tails
    }// coin if
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
  } else{
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