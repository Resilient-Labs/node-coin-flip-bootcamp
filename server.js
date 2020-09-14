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

  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }

  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }

  else if (page == '/img/heads.gif'){
    fs.readFile('img/heads.gif', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/gif'});
      res.write(data);
      res.end();
    });
  }


  else if (page == '/img/tails.gif'){
    fs.readFile('img/tails.gif', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/gif'});
      res.write(data);
      res.end();
    });
  }

  else if (page == "/api") {
        if ('guess' in params) {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });

            var bot = ['heads','tails'][Math.floor(Math.random()*2)]
            const obj = {
                answer: bot
            }
            res.end(JSON.stringify(obj));
        }
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

server.listen(8001);
