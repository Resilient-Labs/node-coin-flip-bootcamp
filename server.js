//needed to run 

const http = require('http')//importing the http module
const fs = require('fs')//importing the fs module that enambles interacting with the file system
const url = require('url')//module for url parsing and resolution
const querystring = require('querystring')//module provides utilities for parsing and formatting URL query strings.
const figlet = require('figlet')



//setting up the page
const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname
  const params = querystring.parse(url.parse(req.url).query);


  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
      const choices = ['heads', 'tails']
      const randomChoice = Math.floor(Math.random() * 2)
      const randomResult = choices[randomChoice]
    if (params.coingame === 'heads') {//if user chose heads

      if (randomResult === 'heads') {//compare user result to Math.random result, if they are the same return User has won

        res.writeHead(200, { 'Content-Type': 'application/json' })

        const objToJson = {
          gameMessage: "You chose Heads and the coin landed on Heads",
          decision: "YOU WIN"
          
        }
        console.log(JSON.stringify(objToJson))
        res.end(JSON.stringify(objToJson))
      }
      else if (randomResult === 'tails') {

        res.writeHead(200, { 'Content-Type': 'application/json' })

        const objToJson = {
          gameMessage: "You chose Heads and the coin landed on Tails ",
          decision: "YOU LOSE"
          
        }
        console.log(JSON.stringify(objToJson))
        res.end(JSON.stringify(objToJson))
        
      }
    }
    if (params.coingame === 'tails') {
    
      if (randomResult === 'tails') {

        res.writeHead(200, { 'Content-Type': 'application/json' })

        const objToJson = {
          gameMessage: "You chose Tails and the coin landed on Tails",
          decision: "YOU WIN"
          
        }
        console.log(JSON.stringify(objToJson))
        res.end(JSON.stringify(objToJson))
      }
      else if (randomResult === 'heads') {

        res.writeHead(200, { 'Content-Type': 'application/json' })

        const objToJson = {
          gameMessage: "You chose Tails and the coin landed on Heads ",
          decision: "YOU LOSE"
          
        }
        console.log(JSON.stringify(objToJson))
        res.end(JSON.stringify(objToJson))
        
      }
    }
    
  }
  
  else if (page == '/css/style.css') {
    
      fs.readFile('css/style.css', function (err, data) {
        res.write(data);
        res.end();
      });
    } else if (page == '/js/main.js') {
      fs.readFile('js/main.js', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.write(data);
        res.end();
      });
    } else {
      figlet('404!!', function (err, data) {
        if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
        }
        res.write(data);
        res.end();
      });
    }
  })

server.listen(8000);
