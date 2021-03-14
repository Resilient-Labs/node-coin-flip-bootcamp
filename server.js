// we're requiring more modules this time
// url gives us access to the url

const http = require('http');
const fs = require('fs')
// tells me what page im on
const url = require('url');
// the last bit of the url (like a query [api] in an api url)

const server = http.createServer(function(req, res) {

  const page = url.parse(req.url).pathname;
  console.log('hello')
  // the forward slash represents the main page's root
  if (page == '/') {
    console.log('hi')
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  // conditional logic leads to another page using node
  else if (page == '/flipCoin.css'){
    console.log('flip')
    fs.readFile('flipCoin.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/flipCoin.js'){
    fs.readFile('flipCoin.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }

})
server.listen(8000);
