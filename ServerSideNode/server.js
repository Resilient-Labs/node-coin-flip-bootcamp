const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

// document.querySelector('#clickMe').addEventListener("click", flipCoin)
let results


// function flipCoin() {
  results = Math.floor(Math.random() * 2)
  console.log(results)
// }



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

    if('coin' in params){
      if(params['coin'].toLowerCase() == 'heads' & results == 0) {
        
        res.writeHead(200, {'Content-Type': 'application/json'});

        const objToJson = {
          choice: "Heads",
          outcome: "Heads",
          winOrLoss: "You Won!"
        }
        results = Math.floor(Math.random() * 2)
      
        res.end(JSON.stringify(objToJson));
      }//coin = leon
      else if(params['coin'].toLowerCase() == 'heads' & results == 1) {
        
        res.writeHead(200, {'Content-Type': 'application/json'});

        const objToJson = {
          choice: "Heads",
          outcome: "Tails",
          winOrLoss: "You lose.."
        }
        results = Math.floor(Math.random() * 2)
        res.end(JSON.stringify(objToJson));
      }//coin = leon
      else if(params['coin'].toLowerCase() == 'tails' & results == 1) {
        
        res.writeHead(200, {'Content-Type': 'application/json'});

        const objToJson = {
          choice: "Tails",
          outcome: "Tails",
          winOrLoss: "You win!"
        }
        results = Math.floor(Math.random() * 2)
        res.end(JSON.stringify(objToJson));
      }
      else if(params['coin'].toLowerCase() == 'tails' & results == 0) {
        
        res.writeHead(200, {'Content-Type': 'application/json'});

        const objToJson = {
          choice: "Tails",
          outcome: "Heads",
          winOrLoss: "You lose..."
        }
        results = Math.floor(Math.random() * 2)
        res.end(JSON.stringify(objToJson));
      }
      else if(params['coin'].toLowerCase()  != 'heads' || params['coin'].toLowerCase()  != 'tails'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          winOrLoss: "Enter heads or tails"
        }
        res.end(JSON.stringify(objToJson));
      }//coin != leon
    }//coin if
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
