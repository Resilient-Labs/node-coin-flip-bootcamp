const http = require('http'); //request to http to access internet
const fs = require('fs') //request to file system
const url = require('url'); //url returns an object
const querystring = require('querystring'); //look at query params
const figlet = require('figlet') //fun package to create scii art

//making first request to local server
const server = http.createServer(function(req, res) { //simple create server that opens and closes at end
  const page = url.parse(req.url).pathname; // what page we are on after 8000
  const params = querystring.parse(url.parse(req.url).query); //query params in the url
  console.log(page); // console log each page to see what's going on
  //home page/root
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  //accessing an api that is in the main.js folder 
  else if (page == '/api') {
    if('student' in params){
      //Get random num between 0 and 1; if 0 it's heads, 1 it's tails
      let randomNum = Math.floor(Math.random() * 2) === 0 ? 'heads' : 'tails'
      console.log(randomNum)
      //if user input === random (0 as heads, 1 as tails) num they win
      if(params['student']== randomNum){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "leon",
          status: "Boss Man",
          currentOccupation: "Baller",
          result: "You win!"
        }
        res.end(JSON.stringify(objToJson));
      }//student = leon
      // if userinput =/= random num (either 0 as heads or 1 as tails) they lose
      else if(params['student'] != randomNum){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "unknown",
          status: "unknown",
          currentOccupation: "unknown",
          result: "You lose!"
        }
        res.end(JSON.stringify(objToJson));
      }//student != leon
    }//student if
  }//else if
  //css file
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  //js file
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  //asking something that doesn't exist
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
