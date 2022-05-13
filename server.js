const http = require('http');
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
// const figlet = require('figlet')

const server = http.createServer(function (req, res) {
    const page = url.parse(req.url).pathname
    const params = querystring.parse(url.parse(req.url).query)
    // make page and param variable
    console.log(page)
    // if statement for default page ('/'), respond with index.html file (CSS & JS will be referenced in HTML)
    if (page == '/') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    } else if (page == '/api'){
        // use url we created to check if the query (property) is in the param object
        if ('chosenCoinFlip' in params){
            //use if else to check if heads or tails
            if(params['chosenCoinFlip'] == 'heads'){
                // fill in if/else block with res.writeHead, object, turn into JSON and respond back to main.js with res.end(JSON.strigify(OBJECT))
                res.writeHead(200, {'Content-Type': 'application/json'})
                const coin = {
                    prediction: 'heads',
                    randomNumber: Math.floor(Math.random() * 2),
                    result: '',
                    compare(){
                        // 0 is heads, 1 is tails
                        if (this.randomNumber === 0){
                            this.result = 'Heads, Correct'
                        } else {
                            this.result = 'Tails, You Suck'
                        }
                    }
                }
                coin.compare()
                res.end(JSON.stringify(coin)) //converting our object to JSON
            } else if(params['chosenCoinFlip'] == 'tails'){
                // fill in if/else block with res.writeHead, object, turn into JSON and respond back to main.js with res.end(JSON.strigify(OBJECT))
                res.writeHead(200, {'Content-Type': 'application/json'})
                const coin = {
                    prediction: 'tails',
                    randomNumber: Math.floor(Math.random() * 2),
                    result: '',
                    compare(){
                        // 1 is heads, 0 is tails
                        if (this.randomNumber === 0){
                            this.result = 'tails, Correct'
                        } else {
                            this.result = 'heads, You Suck'
                        }
                    }
                }
                coin.compare()
                res.end(JSON.stringify(coin))
            }
        }
    } else if (page == '/stylesheets/style.css') {
        fs.readFile('stylesheets/style.css', function (err, data) {
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
        fs.readFile('error.html', function (err, data) {
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }
})

server.listen(8000)

// else if for api and 404 pages
// add url for fetch in main.js
// use url to check if the query (property) is in the param object
// check if it's heads or tails