const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');



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
    }
    else if (page == '/api') {
        if ('decision' in params) {
            if (params['decision'] == 'heads') {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const probability = Math.random();
                const objToJson = {
                    result: "Tails",
                    msg: "You Lose!"
                }
                if (probability < .5) {
                    objToJson.result = "Heads",
                        objToJson.msg = "You Win!"

                }
                res.end(JSON.stringify(objToJson));
            }
            else if (params['decision'] == 'tails') {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const probability = Math.random();
                const objToJson = {
                    result: "Tails",
                    msg: "You Win!"
                }
                if (probability < .5) {
                    objToJson.result = "Heads",
                        objToJson.msg = "You Lose!"

                }
                res.end(JSON.stringify(objToJson));

            }//student = tails
            else if (params['decision'] != 'heads' && params['decision'] != 'tails') {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                const probability = Math.random();
                const objToJson = {
                    result: "Tails",
                    msg: "Heads or Tails not selected"
                }
                if (probability < .5) {
                    objToJson.result = "Heads"
                }
                res.end(JSON.stringify(objToJson));
            }//student != leon
        }//decision if
    }//else if
    else if (page == '/css/style.css') {
        fs.readFile('css/style.css', function (err, data) {
            res.write(data);
            res.end();
        });
    } else if (page == '/css/normalize.css') {
        fs.readFile('css/style.css', function (err, data) {
            res.write(data);
            res.end();
        });
    } else if (page == '/css/layout.css') {
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
        // page not found
        res.writeHead(404, `Page not found: ${page}`)
        console.log('Something went wrong...');
        res.end();

    }
});

server.listen(8000);