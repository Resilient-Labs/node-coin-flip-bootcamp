const http = require('http');
const fs = require('fs');
const url = require('url')
const querystring = require('querystring')
 // when the server hears a request its going to run the function below
const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  querystring.parse(url.parse(req.url).query);

  if(page == '/'){
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  }) ;
}else if (page == '/index.js'){
  fs.readFile('index.js', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/javascript'});
    res.write(data);
    res.end();
  });
}  else if (page == '/index.css'){
    fs.readFile('index.css', function(err, data) {
      res.write(data);
      res.end();
    });
  // this is the end of the .createServer() function that is taking the
  // function nested inside it
}
})
server.listen(8000);
