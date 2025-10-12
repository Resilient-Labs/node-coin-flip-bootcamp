const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer(function (req, res) {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page, params);

    if (page === '/') {
        fs.readFile('index.html', function (err, data) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error loading index.html');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }

    else if (page === '/api') {
        if ('coin' in params) {
            const userPick = params['coin']; 
            const randomPick = Math.random() < 0.5 ? 'mario' : 'luigi';
            const result = userPick === randomPick;
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                coinSideSelected: userPick,
                randomPick,
                result
            }));
        } else {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                error: 'Missing coin parameter'
            }));
        }
    }

    else if (page === '/css/styles.css') {
        fs.readFile('css/styles.css', function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('CSS not found');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        });
    }
    else if (page.indexOf('/img/') === 0) {
        fs.readFile('.' + page, function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Image not found');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            res.write(data);
            res.end();
        });
    }
    else if (page === '/js/main.js') {
        fs.readFile('js/main.js', function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('JS not found');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(data);
        });
    }
    else if (page.indexOf('/audio/') === 0) {
        fs.readFile('.' + page, function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Audio not found');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'audio/wav' });
            res.end(data);
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log('Server running on :' + PORT));