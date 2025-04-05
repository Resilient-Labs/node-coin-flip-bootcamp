const http = require('http');
const fs = require('fs');
const url = require('url');

const coinFlip = () => (Math.random() < 0.5 ? 'Heads' : 'Tails');

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;

  if (page === '/') {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Error loading index.html');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else if (page === '/coinFlipGameApi') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const result = coinFlip();
    res.end(JSON.stringify({ result }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(8000);