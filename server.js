//Server side logic
const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const port = 8000

const server = http.createServer(function(req,res){
    const page = url.parse(req.url).pathname
    const params = querystring.parse(url.parse(req.url).query)
    console.log('Location: '+ page)
    if(page == '/'){
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            res.end()
          })
    }else if (page == '/css/normalize.css'){
        fs.readFile('css/normalize.css', function(err, data) {
          res.write(data)
          res.end()
        })
    }else if (page == '/css/reset.css'){
        fs.readFile('css/reset.css', function(err, data) {
          res.write(data)
          res.end()
        })
    }else if (page == '/css/style.css'){
        fs.readFile('css/style.css', function(err, data) {
          res.write(data)
          res.end()
        })
    }else if (page == '/js/main.js'){
        fs.readFile('js/main.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'})
          res.write(data)
          res.end()
        })
    }else if (page == '/api'){
        //Possible improvement: Could have just made one object... Brain was fried
        if('flip' in params){
            if(params['flip'] == 'heads'){
                res.writeHead(200, {'Content-Type': 'application/json'});
                const objToJson = {
                    choice: "heads",
                    result: '',
                    winCheck(){
                        let coin = (Math.random() < 0.5)
                        console.log(coin)
                        if(coin < 0.5){//heads
                            this.result = `You chose ${this.choice}...The coin lands on Heads. YOU WIN!`
                        }else if(coin > 0.5){ //tails
                            this.result = `You chose ${this.choice}... The coin lands on Tails. YOU LOSE!`
                        }
                    }
                }
                objToJson.winCheck()
                res.end(JSON.stringify(objToJson));
            }else if(params['flip'] == 'tails'){
                res.writeHead(200, {'Content-Type': 'application/json'});
                const objToJson = {
                    choice: "tails",
                    result: '',
                    winCheck(){
                        let coin = (Math.random() < 0.5)
                        console.log(coin)
                        if(coin < 0.5){//heads
                            this.result = `You chose ${this.choice}...The coin lands on Heads. YOU LOSE!`
                        }else if(coin > 0.5){ //tails
                            this.result = `You chose ${this.choice}...The coin lands on Tails. YOU WIN!`
                        }
                    }
                }
                objToJson.winCheck()
                res.end(JSON.stringify(objToJson));
            }
        }
    }
})

server.listen(port, function(err){
    if (err){
        console.log('Bad things happened', err)
    }else {
        console.log('Server is listening from port ' + port)
    }
})