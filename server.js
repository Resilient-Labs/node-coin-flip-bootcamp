const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
// const figlet = require('figlet')

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
  coinArray =['head','tail']
    if('coinSide' in params){
      if(params['coinSide']== 'head'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        random = coinArray[Math.floor(Math.random() * coinArray.length)]
        userChoice = params['coinSide']
        if(userChoice == random){
          statusMessage= 'Flip to the flop: you won!'
        } else{
          statusMessage= 'flop flop flip again!'
        }
        console.log(userChoice, random, statusMessage)
        const objToJson = {
         winOrLoose: `${statusMessage}`
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['coinSide'] == 'tail'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        random = coinArray[Math.floor(Math.random() * coinArray.length)]
        userChoice = params['coinSide']
        if(userChoice == random){
          statusMessage= 'Flip to the flop: you won!'
        } else{
          statusMessage= 'flop flop flip again!'
        }
        const objToJson = {
          winOrLoose: `${statusMessage}`
        }
        res.end(JSON.stringify(objToJson));
      }//if coin === tail
    }//coin statament
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
  }
 
});

server.listen(8000);

