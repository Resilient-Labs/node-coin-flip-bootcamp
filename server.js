const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const { count } = require('console');

const server = http.createServer(function (req, res) {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    if (page == '/') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (page == '/style.css') {
        fs.readFile('style.css', function (err, data) {
            res.write(data);
            res.end();
        });
    } else if (page == '/script.js') {
        fs.readFile('script.js', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }); 
    } else if (page == '/imgs/heads.png') {
        fs.readFile('imgs/heads.png', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        }); 
    } else if (page == '/imgs/tails.png') {
        fs.readFile('imgs/tails.png', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } 
    else if (page == '/imgs/coinflipgif.gif') {
        fs.readFile('imgs/coinflipgif.gif', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } 
    else if (page == "/api") {
        let random = Math.round(Math.random());
        let coinFlip = random == 1 ? 'heads' : 'tails'
        let winner = {
            playerWin : true, 
            coinFlip : coinFlip

        }
        res.writeHead(200, { "Content-Type": "application/json" });
        console.log(winner)
        if ("playerChoice" in params) {
            if (params["playerChoice"] !== coinFlip){
                winner.playerWin = false
            }
            console.log(winner)
            res.end(JSON.stringify(winner));
        }
    }
});

server.listen(8900);
