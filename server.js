const http = require('http');
const fs = require('fs');
const url = require('url');
const figlet = require('figlet');

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (page == '/flip') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const chance = Math.floor(Math.random() * 10) % 2;
    const flip = chance ? 'heads' : 'tails';
    res.end(JSON.stringify({'flip': flip}));
  } else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/css/normalize.css') {
    fs.readFile('css/normalize.css', function(err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  } else if (page == '/img/heads.png') {
    fs.readFile('img/heads.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  } else if (page == '/img/tails.png') {
    fs.readFile('img/tails.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  } else {
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.writeHead(404, 'Not Found');
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000, () => console.log('Coin flipper server is Listening on port 8000'));