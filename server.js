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
    } else if (page == '/imgs/flagback.jpeg') {
        fs.readFile('imgs/flagback.jpeg', function (err, data) {
            res.writeHead(200), { 'Content-Type': 'text/html' }
            res.write(data)
            res.end()
        })
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
    else if (page == "/api") { // 0 = tails, 1 = heads
        let random = Math.round(Math.random()); //Math.round = make it a whole integer 
        let coinFlip = random == 1 ? 'heads' : 'tails' // the variable coinFlip was created and it equates to random and we're utilizing a ternary operator - if random = 1, then it is heads, else if = tails - does random = 1? if yes, then heads and no tails
        let winner = { //created an object of winner 
            playerWin : true, //properties = whenever user/play clicks on heads = true 
            coinFlip : coinFlip //coinFlip property has the value coinFlip AKA this 
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        console.log(winner)
        if ("playerChoice" in params) {
            if (params["playerChoice"] !== coinFlip){ // if playerChoice does not equal coinFlip
                winner.playerWin = false //object of winner and property of playerWin 
            }
            console.log(winner)
            res.end(JSON.stringify(winner));
        
    }
} 
});

server.listen(8000);


