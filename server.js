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
    } else if (page == '/assets/images/heads.png') {
        fs.readFile('assets/images/heads.png', function (err, data) {
            res.writeHead(200, {'Content-Type': 'image/png'})
            res.write(data)
            res.end()
        })
    } else if (page == '/assets/images/tails.jpg') {
        fs.readFile('assets/images/tails.jpg', function (err, data) {
            res.writeHead(200, {'Content-Type': 'image/jpg'})
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
                    imgSRC: '',
                    compare(){
                        // 0 is heads, 1 is tails
                        if (this.randomNumber === 0){
                            this.result = 'The coin landed on heads! You predicted correctly!'
                            this.imgSRC = 'assets/images/heads.png'
                        } else {
                            this.result = 'The coin landed on tails! You predicted incorrectly!'
                            this.imgSRC = 'assets/images/tails.jpg'
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
                    imgSRC: '',
                    compare(){
                        // 1 is heads, 0 is tails
                        if (this.randomNumber === 0){
                            this.result = 'The coin landed on tails! You predicted correctly!'
                            this.imgSRC = 'assets/images/tails.jpg'
                        } else {
                            this.result = 'The coin landed on heads! You predicted incorrectly!'
                            this.imgSRC = 'assets/images/heads.png'
                        }
                    }
                }
                coin.compare()
                res.end(JSON.stringify(coin))
            }
        }
    } else if (page == '/assets/stylesheets/style.css') {
        fs.readFile('assets/stylesheets/style.css', function (err, data) {
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