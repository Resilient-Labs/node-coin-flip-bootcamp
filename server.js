const http = require('http')
const fs = require('fs')
const url = require('url');

http.createServer(function( req, res ) {
    const page = url.parse(req.url).pathname
if ( page == '/' ){
    fs.readFile('index.html', function ( err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
    }else if (page == '/style.css'){
        fs.readFile('style.css', function(err, data) {
          res.write(data);
          res.end();
        });
    }else if (page == '/main.js'){
        fs.readFile('main.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
    });
}
}).listen(5000)