
const http = require('http');
const fs = require('fs')
const url = require('url');
const figlet = require('figlet')
const querystring = require('querystring');
const server = http.createServer(function (req, res) {
    const page = url.parse(req.url).pathname;
    console.log(page);
    if (page == '/') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            res.end();
        });
    } else if (page == '/style.css') {
        fs.readFile('style.css', function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/css'
            });
            res.write(data);
            res.end();
        });
    } else if (page == '/style.js') {
        fs.readFile('style.js', function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'text/javascript'
            });
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
server.listen(8000);