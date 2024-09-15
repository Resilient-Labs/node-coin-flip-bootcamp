const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
// const figlet = require('figlet')

const server = http.createServer(function(req, res){
    // make page parser variable
    // make param parser variable
    const page = url.parse(req.url).pathname
    const params = querystring.parse(url.parse(req.url).query)
    console.log('this is page',page)
    // user requests to see the page, page should be '/' we want to respond with the index.html file. we only need to request index.html because style.css and main.js are linked to the html file
    if (page == '/'){
        fs.readFile('index.html', function(err,data) {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        })
    } else if (page == '/image/starter.jpeg') {
        fs.readFile('image/starter.jpeg', function (err, data) {
            res.writeHead(200), { 'Content-Type': 'image/jpeg' }
            res.write(data)
            res.end()
        })
        // add url to fetch in main.js
        // user requests pathway '/api' add coin specific if statements after
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
                    image:"",
                    compare(){
                        // 0 is heads, 1 is tails
                        if (this.randomNumber === 0){
                            this.result = 'Heads, Correct'
                            this.image = "image/head.jpeg"
                        } else {
                            this.result = 'Tails, You Suck'
                            this.image = "image/tails.jpeg"
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
                    image:"",
                    compare(){
                        // 1 is heads, 0 is tails
                        if (this.randomNumber === 0){
                            this.result = 'tails, Correct'
                            this.image = "image/tails.jpeg"
                        } else {
                            this.result = 'heads, You Suck'
                            this.image = "image/head.jpeg"
                        }
                    }
                }
                coin.compare()
                res.end(JSON.stringify(coin))
            }
        }
    

    }

    else if (page == '/image/head.jpeg') {
    fs.readFile('image/head.jpeg', function (err, data) {
        res.writeHead(200), { 'Content-Type': 'image/jpeg' }
        res.write(data)
        res.end()
    })
    }else if (page == '/image/tails.jpeg') {
    fs.readFile('image/tails.jpeg', function (err, data) {
        res.writeHead(200), { 'Content-Type': 'image/jpeg' }
        res.write(data)
        res.end()
    })
        // error response'
    } else if (page == '/css/style.css'){
        fs.readFile('css/style.css', function(err, data) {
          res.write(data);
          res.end();
        });
      }else if (page == '/js/main.js'){
        fs.readFile('js/main.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
      }
    else{
        fs.readFile('error.html', function(err,data) {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        })
    }
})
server.listen(6900)
