const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');

http.createServer(function (req, res) {
    const page = url.parse(req.url).pathname;
    console.log(page)
    const params = querystring.parse(url.parse(req.url).query);
    if (page == '/') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
    else if (page == '/css/style.css') {
        fs.readFile('css/style.css', function (err, data) {
            res.write(data);
            res.end();
        });
    } else if (page == '/js/main.js') {
        fs.readFile('js/main.js', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
        });
    } else if (page == '/img/DogeHead.png') {
        fs.readFile('img/DogeHead.png', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
        });
    } else if (page == '/img/DogeTail.png') {
        fs.readFile('img/DogeTail.png', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
        });
    } else if (page == '/api') {
        let deg = (Math.floor(Math.random() * 50) + 50) * 180
        res.write(deg.toString());
        res.end();
    } else {
        figlet('404!!', function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            res.writeHead(404, { 'Content-Type': 'text/text' });
            res.write(data);
            res.end();
        });
    }
}).listen(8001);

//Citation: Michael Kazin