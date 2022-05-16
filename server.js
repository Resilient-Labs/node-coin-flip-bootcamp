const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');
const { userInfo } = require('os');

const server = http.createServer(function(req, res) {
    //Line through means that its deprecated and that current JS isn't using this.
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
      res.writeHead(200, {'Content-Type': 'application/json'});
      let computerChoice
      flipTheCoin()
      function flipTheCoin(){
          let coinFlip = Math.ceil(Math.random() * 2)
      
          if(coinFlip == 1){
              computerChoice = 'heads'
          }else{
              computerChoice = 'tails'
          }
      }
      const objToJson = {
          'Computer choice': computerChoice,
        }
        res.end(JSON.stringify(objToJson));
    
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
    }else if (page == '/img/squidward_head.png'){
        fs.readFile('img/squidward_head.png', function(err, data) {
          res.writeHead(200, {'Content-Type': 'image/png'});
          res.write(data);
          res.end();
        });
    }
    else if (page == '/img/patrick_butt.png'){
      fs.readFile('img/patrick_butt.png', function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.write(data);
        res.end();
      });
    }
    else if (page == '/img/flip-coin1.gif'){
      fs.readFile('img/flip-coin1.gif', function(err, data) {
        res.writeHead(200, {'Content-Type': 'image/gif'});
        res.write(data);
        res.end();
      });
    }
 
    else{
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
  