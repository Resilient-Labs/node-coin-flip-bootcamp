const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');

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
  } else if (page == '/api') {
    let result = Math.random() < 0.5 ? 'heads' : 'tails';
    if (params['coin'] == 'heads' || params['coin'] == 'tails') {
      if (params['coin'] == result) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: 'win',
          choice: params['coin'],
          resultCoin: result
        }
        res.end(JSON.stringify(objToJson));
      } else {
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: 'lose',
          choice: params['coin'],
          resultCoin: result
        }
        res.end(JSON.stringify(objToJson));
      }
    } else {
      res.writeHead(400, {'Content-Type': 'text/html'});
      res.end('<h1>Bad Request</h1>');
    }
  } else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/client.js'){
    fs.readFile('client.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>404 Not Found</h1>');
  }
});

server.listen(5454);
