const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

// function checkWord(word){
//     console.log(word)
//     }

const server = http.createServer(function(req, res) {
    const page = url.parse(req.url).pathname;
    const parsedUrl = url.parse(req.url)
    const queryString = parsedUrl.query
    const params = querystring.parse(queryString)

    if (page == '/') {
        // console.log(`${userInput}`)
        fs.readFile('index.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        });
      }
      else if (page == '/main.css'){
        fs.readFile('main.css', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/css'});
          res.write(data);
          res.end();
        });
      }else if (page == '/main.js'){
        fs.readFile('main.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
      }
      else if (page == '/heads.png'){
        fs.readFile('heads.png', function(err, data) {
          res.writeHead(200, {'Content-Type': 'image/png'});
          res.write(data);
          res.end();
        });
      }
      else if (page == '/tails.png'){
        fs.readFile('tails.png', function(err, data) {
          res.writeHead(200, {'Content-Type': 'image/png'});
          res.write(data);
          res.end();
        });
      }
      else if (page == '/api') {// is there an api request?
        console.log(params)// is they a key value pari in qp?
        

 
        if('word' in params){
          if(params.word == `heads` || params.word == `tails`){
            res.writeHead(200, {'Content-Type': 'application/json'});
         
            const objToJson = arr[Math.floor(Math.random()* 2)]  
               console.log(objToJson)
               // document.querySelector().innerText = "The Computer chose "--> server side??
               res.end(JSON.stringify(objToJson));
          }
         

        }
      }
});


server.listen(8000);
//need to get displaying in the dom


const heads = {
  side: 'heads',
  description: 'front'
}
const tails = {
  side: 'tails',
  description: 'back'
  
}

const arr = [heads, tails]
// arr[Math.floor(Math.random()* 2)]