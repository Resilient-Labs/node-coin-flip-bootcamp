const http = require('http');
const fs = require('fs');
const url = require('url');
const figlet = require('figlet');


const server = http.createServer((req, res) => {
    const myUrl = url.parse(req.url).pathname;
    console.log('my URL =>' + req.url);

    //Routing
    if (myUrl === '/') {
        fs.readFile("index.html", (error, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        })
    } else if (myUrl === '/styles') {
        fs.readFile('css/style.css', (error, data) => {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        })
    } else if (myUrl === '/reset') {
        fs.readFile('css/reset.css', (error, data) => {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        })
    }else if (myUrl === '/main') {
        fs.readFile('js/main.js', (error, data) => {
            res.writeHead(200, { 'Content-Type': 'text/javascript' })
            res.end(data);
        })
    } else if (myUrl === '/coinflipapi') {
            res.writeHead(200, { 'Content-Type': 'text/text' })
            res.end( Math.floor(Math.random()*2)? 'Head' : 'Tail');
    }else {
        figlet('404!!', function (error, data) {
            if(error) {
                console.log('Something went wrong...');
                console.dir(error);
                return;
            }
            res.write(data);
            res.end();
        });
    }
});

server.listen(8000);