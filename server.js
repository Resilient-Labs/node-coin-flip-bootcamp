const http = require('http');
const fs = require('fs')
const url = require('url');
const port = process.env.PORT || 8000
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname; //What comes after localhost8000 so it knows what page to go to 
  const params = querystring.parse(url.parse(req.url).query); //See what query parameters come after the page and create an object with key value pairs
  console.log(page); //console log the page your on and whats happening on the page to the server.
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
    if('student' in params){
      function headTails(){
        let coinToss = Math.random()
        if(coinToss > 0.5){
          return 'heads'
        } else if(coinToss < 0.5){
          return 'tails'
        }
      }
      if(params['student']== 'heads'){
        headTails()
        if(headTails() == 'heads'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Coin shows Heads",
          status: "You Win",
          currentOccupation: "Baller"
        }
        res.end(JSON.stringify(objToJson));
      } else {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Coin shows Tails",
          status: "You Lose",
          currentOccupation: "Not Baller"
        }
        res.end(JSON.stringify(objToJson));
      }
      }//student = leon
      else if(params['student'] == 'tails'){
        if(headTails() == 'tails'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            name: "Coin shows Tails",
            status: "You Win",
            currentOccupation: "Baller"
          }
          res.end(JSON.stringify(objToJson));
        } else {
          res.writeHead(200, {'Content-Type': 'application/json'});
          const objToJson = {
            name: "Coin shows Head",
            status: "You Lose",
            currentOccupation: "Not Baller"
          }
          res.end(JSON.stringify(objToJson));
        }
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

server.listen(port, '0.0.0.0');
