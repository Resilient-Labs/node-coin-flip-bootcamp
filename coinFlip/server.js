const http = require('http'); // this is an imported module
const fs = require('fs') // this is also an imported module to help us look at/grab our files
const url = require('url'); // module to help us look at urls
const querystring = require('querystring'); // module to help read queries
const figlet = require('figlet') // ascii art (makes text cool)

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname; // enables us to parse through url and see the path of the request
  const params = querystring.parse(url.parse(req.url).query); // lets us see query parameters
  console.log(page); // consoles the pages visted into the terminal
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    try {
      if ('result' in params) {
        x = Math.random()

        if (x < 0.5) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          const objToJson = {
            flipResult: 'Heads'
          }
          res.end(JSON.stringify(objToJson)); // --- makes sure we are sending a jSON obj back.
        } else {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          const objToJson = {
            flipResult: 'Tails'
          }
          res.end(JSON.stringify(objToJson)); // --- makes sure we are sending a jSON obj back.
        }
      }
    } catch (error) {
      // Code to handle the error
      console.log(error)
    }
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

server.listen(4000);
