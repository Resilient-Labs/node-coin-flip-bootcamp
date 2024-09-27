const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
var heads = 0;
var tails = 0;
const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  //created two variables fo counting heads and tails
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  
  else if (page == '/api') {
    if (params['bitcoinflip']=='heads'){
      heads++;
    }
    else if (params['bitcoinflip']=='tails'){
      tails++;
    }
    const objToJson = {
      heads: heads,
      tails: tails
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(objToJson));
    res.end();
   

   
     
    
  }//else if
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }
  // import the images from the images folder
  else if (page == '/images/bitcoinhead.png'){
    fs.readFile('images/bitcoinhead.png', function(err, data) {
      res.write(data);
      res.end();
    });
  }
  else if (page == '/images/bitcointails.png'){
    fs.readFile('images/bitcointails.png', function(err, data) {
      res.write(data);
      res.end();
    });
  }
  else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
