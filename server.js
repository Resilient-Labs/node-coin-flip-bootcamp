//worked on with House Hayden: Rebecca, Kadeisha, Jeffrey, and Anastasia
const PORT = process.env.PORT || 8000;
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
  else if (page == '/images/heads.png') {
    fs.readFile('images/heads.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/images/tails.png') {
    fs.readFile('images/tails.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'images/png'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('coin' in params){
      if(params['coin'] < 0.5){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const heads= {
          side: "heads",
          src: "images/heads.png"
          }
          res.end(JSON.stringify(heads));
        }else if(params['coin'] >= 0.5){
            res.writeHead(200, {'Content-Type': 'application/json'});
            const tails = {
              side: "tails",
              src: "images/tails.png"
            }
            res.end(JSON.stringify(tails));
        }
      }
  }
  else if (page == '/css/stylesheet.css'){
    fs.readFile('css/stylesheet.css', function(err, data) {
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

server.listen(PORT);
