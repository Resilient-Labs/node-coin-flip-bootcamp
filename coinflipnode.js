
const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer(function(req, res) {
const page = url.parse(req.url).pathname;
const coin = ['heads', 'tails'];
  
  console.log(page);
  
  if (page == '/') {
    fs.readFile('coinflip.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (page == '/flipCoin') {
    const result = coin[Math.round(Math.random())];
    res.writeHead(200, {'Content-Type': 'text/text'});
    res.end(result);
  } else if (page == '/style.css'){
    fs.readFile('style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  } else if (page == '/coinflip.js'){
    fs.readFile('coinflip.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
  }
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});