const http = require('http');
const fs = require('fs');
const url = require('url');


const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  console.log('cat')
  if(page == '/'){
    console.log('friend1')
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  } else if (page == '/normalize.css'){
    fs.readFile('normalize.css', function(err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/style.css'){
    fs.readFile('style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }
  else if (page == '/blueflower.gif'){
    fs.readFile('blueflower.gif', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/script.js'){
    console.log('friend2')
    fs.readFile('script.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
})
server.listen(8000);
