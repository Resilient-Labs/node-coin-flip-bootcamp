const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');


const server = http.createServer(function (req, res) {
    const page = url.parse(req.url).pathname
    const params = querystring.parse(url.parse(req.url).query)
    // console.log(page)

    if (page === '/') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data);
            res.end();
        })
    }
    else if (page === '/api') {
        let winOrLose
        if ('coinFlip' in params) {
            // if (params['coinFlip'] === 'heads') {

            // }
            // else if
             if (params['coinFlip'] === 'heads' || params['coinFlip'] === 'tails') {
                res.writeHead(200, { 'Content-Type': 'application/json' })
                const coinChoices = ['heads', 'tails'];
                const outcome = coinChoices[Math.floor(Math.random() * coinChoices.length)];

                if (outcome === params['coinFlip']) {
                    winOrLose = 'win'
                }
                else {
                    winOrLose = 'lose'
                }

                const convertJson = {
                    name: params['coinFlip'],
                    winOrLoseMessage: `You ${winOrLose}`,
                    outcome: `The flip was ${outcome}`
                }
                res.end(JSON.stringify(convertJson))
            }
        }
    }
    else if (page === '/css/coinFlip.css') {
        fs.readFile('css/coinFlip.css', function (err, data) {
            res.write(data);
            res.end();
        })
    }
    else if (page === '/js/coinFlip.js') {
        fs.readFile('js/coinFlip.js', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(data);
        });


    }
    else {
    res.writeHead(404);
    res.end('Page not found');
}
});
server.listen(8000);