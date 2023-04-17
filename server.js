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

    array = ['heads', 'tails']


    if('cointoss' in params){

        if(params['cointoss'] == 'heads'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        
        randomChoice = array[Math.floor(Math.random() * array.length)]

        userInput = params['cointoss'].toLowerCase()

        if(userInput == randomChoice){
          result = ('Winner')
        } else{
          result = ('Loser!')
        }
      

        const objToJson = {
          playerResult: `${userInput}`,
          cpuResult: `${randomChoice}`,
          overallResult: `${result}`
        }



        res.end(JSON.stringify(objToJson));
      }
    
      if(params['cointoss'] == 'tails'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        
        randomChoice = array[Math.floor(Math.random() * array.length)]

        userInput = params['cointoss'].toLowerCase()

        if(userInput == randomChoice){
          result = ('Winner')
        } else{
          result = ('Loser!')
        }
      

        const objToJson = {
          playerResult: `${userInput}`,
          cpuResult: `${randomChoice}`,
          overallResult: `${result}`
        }



        res.end(JSON.stringify(objToJson));
      }

      else if(params['cointoss'] != 'heads'|| params['cointoss'] != 'tails'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        
        randomChoice = array[Math.floor(Math.random() * array.length)]

        userInput = params['cointoss'].toLowerCase()

        if(userInput != randomChoice){
          result = 'Pick Heads or Tails'
        }
      

        const objToJson = {
          overallResult: `${result}`
        }



        res.end(JSON.stringify(objToJson));
      }
    
    
    
    
    
    }//student = leon
  }
//else if
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
