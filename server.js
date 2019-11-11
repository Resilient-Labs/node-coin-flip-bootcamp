const http = require('http');
const fs = require('fs')//filesystem
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');
const server = http.createServer(function(req,res){
  const page=url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  if(page=="/"){
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if(page=="/style.css"){
    fs.readFile('style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }else if(page=="/script.js"){
    fs.readFile('script.js', function(err, data) {
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
