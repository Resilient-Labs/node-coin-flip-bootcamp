const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;

  if(page == '/'){
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if(page == '/img/quarterHeads.png') {
      fs.readFile('img/quarterHeads.png', function(err, data) {
        res.write(data);
        res.end();
      });
    }else if(page == '/img/quarterTails.png') {
        fs.readFile('img/quarterTails.png', function(err, data) {
          res.write(data);
          res.end();
        });
      }else if(page == '/css/style.css') {
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if(page == '/css/reset.css') {
    fs.readFile('css/reset.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if(page == '/img/coinBackground.jpg') {
      fs.readFile('img/coinBackground.jpg', function(err, data) {
        res.write(data);
        res.end();
      });
    }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }

}).listen(8000);
