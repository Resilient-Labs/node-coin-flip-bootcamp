const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log("!",page);
  if (page == '/') {
    console.log('fetching index file');
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    console.log(params.userGuess);
        const userGuess = params.userGuess;
        const objToJson={key: 'hello from backend'};
        //here we append to const objToJson by adding a new key called newProperty with the value of 'hello again!' The period is for accessing the object that I'm handling
        objToJson.newProperty='hello again!';
        const coinRandomizer = Math.floor(Math.random()*10)
      //const randomInteger = Math.Floor((Math.Random() * <MAX_VALUE>) + <MIN_VALUE>;
      //https://www.codecademy.com/forum_questions/5020be4d3a51800002015ebe
          if (coinRandomizer < 5){
            objToJson.gameLogic = 'heads';
          }else if (coinRandomizer >= 5){
            objToJson.gameLogic = 'tails';
          }
      
          if (objToJson.gameLogic === userGuess){
            objToJson.userWins = true;
          }else{
            objToJson.userWins = false;
          }
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(objToJson));
  }else if (page == '/styles.css'){
    fs.readFile('styles.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/client.js'){
    fs.readFile('js/client.js', function(err, data) {
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
console.log('server is running ✅');

// work completed with help of developer friend