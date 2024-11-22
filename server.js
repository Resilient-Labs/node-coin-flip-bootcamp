const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');


const server=http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    console.log(page);
    if(page == '/') {
        fs.readFile('index.html', function(err, data){
           res.writeHead(200, { 'Content-Type': 'text/html' });
           res.write(data)
           res.end();
        });
    }else if(page == '/style.css'){
        fs.readFile('style.css', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/css'});
          res.write(data);
          res.end();
        });
    }else if(page == '/main.js'){
        fs.readFile('main.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
    };
});
 server.listen(3000) 