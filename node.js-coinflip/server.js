const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

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

    else if (page == '/css/styles.css'){
        fs.readFile('css/styles.css', function(err, data) {
          res.write(data);
          res.end();
        });
    }

    else if (page == '/css/btc.jpg'){
        fs.readFile('css/btc.jpg', function(err, data) {
          res.write(data);
          res.end();
        });
    }
    
    else if (page == '/js/main.js'){
        fs.readFile('js/main.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
    }

    else if (page == '/random') {
        const randomNum = Math.floor(Math.random() * 2)
        const coin = randomNum === 1 ? "heads" : "tails"
        console.log(randomNum)

        const guess = params["guess"].toLowerCase().trim()
        console.log("Coin toss is", coin, "User guess is", guess)

        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
            random: coin,
            winOrLoss: coin === guess ? "Win" : "Loss",
        }
        res.end(JSON.stringify(objToJson));
       
    }//else if
    
    
    else{
        figlet('404', function(err, data) {
          if (err) {
              console.log('Something went wrong...');
              console.dir(err);
              return;
          }
          res.write(data);
          res.end();
        });
    }

})

server.listen(8000)