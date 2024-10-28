// Goal: Create a simple web application that uses the fs and http modules. Use http to create the server and fs to read your html file. Include vanilla ES6 js in a script tag at the bottom of your html file. Try creating a coin flip guessing game
const http = require('http'); 
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer(function(req, res) { 
  const page = url.parse(req.url).pathname; // getting path of URL path/page/route being requested
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

  if (page === '/') { 
    fs.readFile('index.html', function(err, data) {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.write('500 Internal Server Error');
        res.end();
        return;
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (page === '/css/reset.css') {
    fs.readFile('css/reset.css', function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 Not Found');
        res.end();
        return;
      }
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  } else if (page === '/css/style.css') {
    fs.readFile('css/style.css', function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 Not Found');
        res.end();
        return;
      }
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  } else if (page === '/js/main.js') {
    fs.readFile('js/main.js', function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('404 Not Found');
        res.end();
        return;
      }
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  } else if (page == '/api') {
      if('choice' in params){ // input event listener on client-side js (main.js under js)
        result = Math.floor(Math.random() * 2); // number rounds down to either 0 (heads) or 1 (tails)
        console.log('result', result);
        console.log('params choice', Number(params['choice']));
        let winLoseMessage = (Number(params['choice']) === result ? "You were right!": "You were wrong!")
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: winLoseMessage,
        } 
        res.end(JSON.stringify(objToJson));
        
  
      }
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('404 Not Found');
    res.end();
  }
});

server.listen(8000);