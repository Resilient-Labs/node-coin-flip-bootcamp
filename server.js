//copied the server.js file from the node-backend-simple-json project and added/removed
//also worked on the logic behind this with Shawn and others
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
    //coin flip logic
    const serverFlip = Math.floor(Math.random() * 2) + 1
    
    //lets 1 = heads and 2 = tails
    let flipResult
    if (serverFlip === 1){
        flipResult = 'Heads'
    } else {
        flipResult = 'Tails'
    }
    //gets users guess
    const userGuess = parseInt(params.guess)
    let userChoice;

    if (userGuess === 1) {
        userChoice = 'Heads'
    } else {
        userChoice = 'Tails'
    }

    let outcome
    if(serverFlip === userGuess){
        outcome = 'Winner!'
    } else {
        outcome = 'You lost:('
    }

    res.writeHead(200, { 'Content-type': 'application/json'})
    const responseObj = {
        userGuessNum: userGuess,
        userGuess: userChoice,
        serverFlipNum: serverFlip,
        serverFlip: flipResult,
        outcome: outcome

    }
    res.end(JSON.stringify(responseObj))
  }

    // if('student' in params){
    //   if(params['student']== 'leon'){
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     const objToJson = {
    //       name: "leon",
    //       status: "Boss Man",
    //       currentOccupation: "Baller"
    //     }
    //     res.end(JSON.stringify(objToJson));
    //   }//student = leon
    //   else if(params['student'] != 'leon'){
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     const objToJson = {
    //       name: "unknown",
    //       status: "unknown",
    //       currentOccupation: "unknown"
    //     }
    //     res.end(JSON.stringify(objToJson));
    //   }//student != leon
    // }//student if
  
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'}) //there was no writehead for the css so i added one?
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
