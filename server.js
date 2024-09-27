const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');


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
  }


  else if (page == '/api') {
    let guess = params['answer'];
    let result = Math.random() > 0.5 ? 'heads' : 'tails';
    console.log(guess, result);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ check: guess == result }));
  }
  else if (page == '/css/style.css') {
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
  }
  else if (page == 'img/Heads.jpg') {
    fs.readFile('img/Heads.jpg', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'image/jpg' });
      
      res.end(data);
    })
  }
  else if (page == 'img/Tails.jpg') {
    fs.readFile('img/Tails.jpg', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'image/jpg' });
     
      res.end(data);
    })
  }
});

server.listen(8000);
