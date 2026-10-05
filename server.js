const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
// __dirname so it still finds the file if I start node from a different folder
const HTML_FILE = path.join(__dirname, 'index.html');

const server = http.createServer((req, res) => {
  console.log(`${new Date().toLocaleTimeString()} - ${req.method} ${req.url}`);

  // only one page, so anything else gets a 404 (stops the favicon request from loading the html too)
  if (req.url !== '/' && req.url !== '/index.html') {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Not Found');
    return;
  }

  fs.readFile(HTML_FILE, (err, data) => {
    if (err) {
      console.error(`Could not read ${HTML_FILE}:`, err.message);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 - Server Error');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  });
});

// mostly here for when port 3000 is already taken by another project
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use - stop the other server and try again.`);
  } else {
    console.error('Server error:', err.message);
  }
});

server.listen(PORT, () => {
  console.log(`Coin flip server running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser`);
});
