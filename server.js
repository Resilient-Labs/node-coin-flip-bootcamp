// const http = require('http');
// const fs = require('fs');
// const { type } = require('os');
// http.createServer(function (req, res) {
//   fs.readFile('demofile.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     res.end();
//   });
// }).listen(8000);


// const server = http.createServer(function(req,res){
//   const page = url.parse(req.url).pathname;
//   const params = querystring.parse(url.parse(req.url).query);
//   console.log(page);
//   if (page == '/'){
//     if('heads' in params){
//       if(params['heads']=='heads'){
//         res.writeHead(200,{'Content-type': 'application/json'});
//         const objToJson = {
//           name : flip
//         }
//         res.end(JSON.stringify(objToJson))
//       }
//     }
//   }
// })
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
        // error response'
    }else if (page == '/coin.gif') {
            fs.readFile('coin.gif', function (err, data) {
            res.writeHead(200, {'Content-Type': 'image/gif'})
            res.write(data);
            res.end()
            })
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
server.listen(9000)