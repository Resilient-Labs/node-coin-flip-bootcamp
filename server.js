const http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8000);

// press enter
// node server.js
const http = require('http');
// gives us access to network

const fs = require('fs')

const url = require('url');

// const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  // url that comes through request
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(index);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }

  else if (page == '/style.css'){
    fs.readFile('/style.css', function(err, data) {
      res.write(data);
      res.end();
    }else if (page == 'flip-coin.js'){
    });
    fs.readFile('/flip-coin.js'), function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
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
