const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

    const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);

    if (page === '/') {
        fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error loading index.html');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
        });
    } else if (page === '/api') {
        if ('coinFlip' in params) {
        const validChoices = ['heads', 'tails'];
        const userChoice = params.coinFlip;

        if (userChoice === 'heads' || userChoice === 'tails') {
            const randomFlip = validChoices[Math.floor(Math.random() * validChoices.length)];
            const message = userChoice === randomFlip ? 'You Win!' : 'You Lose!';

            const obj = {
            yourChoice: userChoice,
            result: randomFlip,
            message: message
            };

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(obj));
            return;
        }
        }

        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'No coinFlip provided' }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
    }
    });

server.listen(8000);

