const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

let score1 = 0
let score2 = 0

const server = http.createServer(function(req, res) {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);// if this wasn't there then the terminal will be empty
    if (page == '/') { 
        fs.readFile('index.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        });
    }
    else if(page == '/flipcoin'){
      const coin = Math.floor(Math.random() * 2)
      const playerChoice = params.choice
      let result
      let winlose = ''

      if (coin === 0 && playerChoice === 'heads') {
        score1++;
        winlose = 'win';
      } else if (coin === 0 && playerChoice === 'tails') {
        score2++;
        winlose = 'lose';
      } else if (coin === 1 && playerChoice === 'tails') {
        score1++;
        winlose = 'win';
      } else if (coin === 1 && playerChoice === 'heads') {
        score2++;
        winlose = 'lose';
      }
      // const response = {
    
      //   userScore: score1,
      //   compScores: score2
      // }
      res.writeHead(200, {'Content-Type': 'application/json'});
      const objToJson = {
        // win: "your a winner",
        // lose: "sorry you lost",
        result: coin === 0 ? 'heads' : 'tails',
        score:{
          playerScore: score1,
          compScore: score2,
        }
        
      }
      res.end(JSON.stringify(objToJson));
    } 
    else if (page == '/CSS/styles.css'){ //pathway file
        fs.readFile('CSS/styles.css', function(err, data) {
          res.write(data);
          res.end();
        });
      }else if (page == '/JS/app.js'){
        fs.readFile('JS/app.js', function(err, data) {
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

