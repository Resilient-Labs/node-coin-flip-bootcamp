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
      console.log(res.writeHead)
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    //setting the array with variables
    headsOrTails = ['heads', 'tails']
    if('student' in params){
    if(params['student'] == 'heads'){
      res.writeHead(200, {'Content-Type': 'application/json'});
      randomize = headsOrTails[Math.floor(Math.random() * headsOrTails.length)]  
      checkResults = params['student'].toLowerCase()
      if(checkResults == randomize){
        outcome = 'You won!'
      }
      else{
        outcome = 'You lose'
      }
      res.writeHead(200, {'Content-Type': 'application/json'});
      //creates object that gets display on DOM
      const objToJson = {
        playerChoice: `${checkResults}`,
        coinResult: `${randomize}`,
        winningOrLosing: `${outcome}`
    }
        res.end(JSON.stringify(objToJson));
      // }//student = leon
      // else if(params['student'] != 'leon'){
      //   res.writeHead(200, {'Content-Type': 'application/json'});
      //   const objToJson = {
      //     name: "unknown",
      //     status: "unknown",
      //     currentOccupation: "unknown"
      //   }
      //   res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
  else if (page == '/css/style.css'){
    console.log('hello, I am CSS!')
    console.log(page)
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    console.log('hello, I am JS!')
    console.log(page)
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