const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {

    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);

    // homepage or inital loading screne
    if (page == "/") {

        fs.readFile('index.html', (err, data) => {

            if (err) {
                res.writeHead(500);
                return res.end('Error loading file');
            }

            res.writeHead(200, {
                'Content-Type': 'text/html'
            });

            res.end(data);
        });

    }

    // CSS
    else if (page == '/css/styles.css') {

        fs.readFile('css/styles.css', (err, data) => {

            if (err) {
                res.writeHead(500);
                return res.end('Error loading CSS');
            }

            res.writeHead(200, {
                'Content-Type': 'text/css'
            });

            res.end(data);
        });

    }

    // frontend javascript
    else if (page == '/js/main.js') {

        fs.readFile('js/main.js', (err, data) => {

            if (err) {
                res.writeHead(500);
                return res.end('Error loading JavaScript');
            }

            res.writeHead(200, {
                'Content-Type': 'text/javascript'
            });

            res.end(data);
        });

    }

    // coin flip API
    else if (page == '/api') {

        if ('coinflip' in params) {

            const userGuess = params['coinflip'];

            // make sure guess is valid
            if (userGuess != 'heads' && userGuess != 'tails') {

                const joe = {
                    result: '',
                    message: 'Please choose heads or tails.'
                };

                res.writeHead(200, {
                    'Content-Type': 'application/json'
                });

                res.end(JSON.stringify(joe));

            } else {

                const flipRocks = ['heads', 'tails'];

                const Ish =
                    flipRocks[Math.floor(Math.random() * flipRocks.length)];

                let message;

                if (userGuess == Ish) {
                    message = 'You were right!';
                } else {
                    message = 'You were wrong :(';
                }

                const joe = {
                    result: Ish,
                    message: message
                };

                res.writeHead(200, {
                    'Content-Type': 'application/json'
                });

                res.end(JSON.stringify(joe));
            }
        }
    }
});

server.listen(8080, () => {
    console.log('Server is running on port 8080');
});