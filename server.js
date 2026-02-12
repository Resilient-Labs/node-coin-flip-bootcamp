const http = require('http');
const fs = require('fs');
const url = require('url');
const figlet = require('figlet');

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  console.log(page); // helps debug routes

  if (page === '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } 

  else if (page === '/api') {
    const flip = Math.random() < 0.5 ? 'heads' : 'tails';
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(flip);
  }

  else if (page === '/style.css') {
    fs.readFile('style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }

  else if (page === '/main.js') {
    fs.readFile('main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }

  else {
    figlet('404!!', function(err, data) {
      if (err) {
        console.log('Something went wrong...', err);
        res.writeHead(500);
        res.end();
        return;
      }
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
console.log('Server running on port 8000');
