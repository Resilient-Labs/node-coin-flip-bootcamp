const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path'); // Import the 'path' module

const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    console.log(page)

    if (page === '/') {
        fs.readFile('C:\\Users\\julio\\reslientCoders\\week9\\headOrTails\\client\\index.html', (err, data) => {
            if (err) {
                console.log(err)
                res.writeHead(404);
                return res.end("404 Not Found");
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (page === '/css/index.css') {
        fs.readFile('C:\\Users\\julio\\reslientCoders\\week9\\headOrTails\\client\\css\\index.css', (err, data) => {
            if (err) {
                res.writeHead(404);
                return res.end("404 Not Found");
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(data);
            res.end();
        });
    } else if (page === '/js/index.js') {
        fs.readFile('C:\\Users\\julio\\reslientCoders\\week9\\headOrTails\\client\\js\\index.js', (err, data) => {
            if (err) {
                res.writeHead(404);
                return res.end("404 Not Found");
            }
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
        });
    } else {
        res.writeHead(404);
        res.end('404 Not Found');
    }
});

server.listen(5000);