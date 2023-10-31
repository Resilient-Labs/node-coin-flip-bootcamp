const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') { 
    let flip = Math.random() < 0.5 ? 'heads': 'tails'
      console.log(flip)
    if('coinFlip' in params){
    
      if(params['coinFlip'] === flip){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          userFlip: params['coinFlip'] ,
          botFlip: flip,
          result: "winner"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      else if(params['coinFlip'] != flip){
        res.writeHead(200, {'Content-Type': 'application/json'}); 
        console.log(flip)
        const objToJson = {
          userFlip: params['coinFlip'] ,
          botFlip: flip,
          result:'loser'
         
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
  else if (page == '/css/style.css'){
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
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);




// card game
// must have 10 cards 
// if two cards matches 
// return matches 
// use arrays 
// use pop 

const game = ['car','apple','car','apple','rock','paper','rock','paper','pizza','pizza']

// take in string
// string should reverse
// loop thru string 
// compare string 
function isPalindrome(str){
  
  str = str.toLowerCase()
  let len = str.length
  for(let i = 0 ; i < len/2 ; i++){
    if(str[i] !== str[len -1 -i])
    return false 
  }
  return true
}
isPalindrome("race")

//