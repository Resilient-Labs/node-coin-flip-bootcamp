const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring'); //query parameters in our url
const figlet = require('figlet') //look up NPM to make the 404 fancier

//^ these are all modules

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });

  } else if (page == '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let flip = Math.random()
    
    if (flip < 0.5) {
      flip = 'heads'

    } else {
      flip = 'tails'
    }
    const objToJson = {
      flip: flip
    }
    res.end(JSON.stringify(objToJson));
  } else if (page == '/img/1.png') {
    fs.readFile('img/1.png', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'image/png' });
      res.write(data);
      res.end();
    });

  } else if (page == '/img/2.png') {
    fs.readFile('img/2.png', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'image/png' });
      res.write(data);
      res.end();
    });
  }  else if (page == '/img/background.png') {
    fs.readFile('img/background.png', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'image/png' });
      res.write(data);
      res.end();
    });
  } else {
    figlet('404!!', function (err, data) {
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
