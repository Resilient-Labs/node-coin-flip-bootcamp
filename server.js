const http = require('http');
const fs = require('fs')                                                                                                                             
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function (req, res) {
const params = querystring.parse(url.parse(req.url).query);
const page = url.parse(req.url).pathname;

console.log(page);

if (page == '/') {
    fs.readFile('index.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
    });
}
else if (page == '/api') {
    //math
    let coin = Math.random() //50/50 chance
    if (params['guess'] === 'heads') { //head
        if (coin < 0.5) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const objToJson = {
                result: "heads",
                compare: "corect"
            }
            res.end(JSON.stringify(objToJson));
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const objToJson = {
                result: "tails",
                compare: "incorrect"
            }
            res.end(JSON.stringify(objToJson));
        }
    } else if (params['guess'] === 'tails') { //tail
        if (coin < 0.5) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const objToJson = {
                result: "heads",
                compare: "incorrect"
            }
            res.end(JSON.stringify(objToJson));
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const objToJson = {
                result: "tails",
                compare: "correct"
            }
            res.end(JSON.stringify(objToJson));
        }
    }
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
