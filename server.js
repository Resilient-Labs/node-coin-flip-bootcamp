const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const url = require('url');
const figlet = require('figlet');

const server = http.createServer( function(request, result) {
    const page = url.parse(request.url).pathname;
    const params = querystring.parse(url.parse(request.url).query);
    console.log(page);
    switch(page) {
        case '/': // Main page, load index.html
            fs.readFile('index.html', (error, data) => {
                result.writeHead(200, {"Content-Type": "text/html"});
                result.write(data);
                result.end();
            })
            break;
        case '/css/style.css': // Load CSS
            fs.readFile('css/style.css', (error, data) => {
                result.writeHead(200, {"Content-Type": "text/css"});
                result.write(data);
                result.end();
            });
            break;
        case '/js/script.js': // Load JavaScript
            fs.readFile('js/script.js', (error, data) => {
                result.writeHead(200, {"Content-Type": "text/javascript"});
                result.write(data);
                result.end();
            });
            break;
        case '/favicon.ico': // Load 'favicon', or Website Icon
            fs.readFile('favicon.ico', (error, data) => {
                result.writeHead(200, {"Content-Type": "image/png"});
                result.write(data);
                result.end();
            });
            break;
        case '/api': // API Call (The fun part!)
            // Randomly pick 0 or 1 as a random number. If the number is 1, we have "Heads", otherwise "Tails"
            const coinLand = Math.floor(Math.random() * 2) === 1 ? "Heads" : "Tails";
            // Get the user choice sent by the client
            const userChoice = params["userChoice"];
            // if the coin landed on the same side of the user bet, we win. Otherwise, we lose
            const betResult = coinLand === userChoice ? "won" : "lost";
            // Build a response object
            const object = {
                message: `It's ${userChoice}, you ${betResult}.`,
                coinImage: coinLand === "Heads" ? "img/half-dollar-front.png" : "img/half-dollar-rear.png"
            }
            // Send back a response
            result.writeHead(200, {"Content-Type": "application/json"});
            result.write(JSON.stringify(object));
            result.end();
            break;
        case '/img/half-dollar-front.png': // Send back the Half Dollar Heads Icon
            fs.readFile('img/half-dollar-front.png', (error, data) => {
                result.writeHead(200, {"Content-Type": "image/png"});
                result.write(data);
                result.end();
            })
            break;
        case '/img/half-dollar-rear.png': // Send Back the Half Dollar Tails Icon
            fs.readFile('img/half-dollar-rear.png', (error, data) => {
                result.writeHead(200, {"Content-Type": "image/png"});
                result.write(data);
                result.end();
            })
            break;
        default:
            figlet("404!!!", (error, data) => {
                if(error) {
                    console.log("Something went wrong...");
                    console.dir(error);
                    return;
                }
                console.log(figlet);
                result.write(data);
                result.end();
            })
            break;
    }
});

server.listen(8000);
