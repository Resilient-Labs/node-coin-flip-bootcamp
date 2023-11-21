//this can all be cleaned up with express node.js
//https:localhost/8000

const http = require('http'); // what we're sending to grab, putting it into an object, network access module
const fs = require('fs') // accessing file system module
const url = require('url'); //
const querystring = require('querystring'); // query parameters - query string is a part of a URL (Uniform Resource Locator) that contains data to be passed to a web server. It usually appears at the end of the URL after a question mark "?" and consists of one or more key-value pairs separated by ampersands "&"
const figlet = require('figlet') // so the 404 looks cool - computer program that generates text banners in various typefaces, used for decorative, allowing users to create stylized art

const server = http.createServer(function(req, res) { // creating variables that have the objects running methods to request/respond
  const page = url.parse(req.url).pathname; // figure out what page we're on, what comes after the 8000
  const params = querystring.parse(url.parse(req.url).query); // show the query parameters in that page
  console.log(page); 
  if (page == '/') { // conditionals - if i'm on the root do this 
    fs.readFile('index.html', function(err, data) { // give them index.html
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') { // second page
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') { // third page
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') { // an api exists
      if('heads' in params && params['heads'] === '1'){

        // we're going to write out a coin toss game, heads or tails
        // there will be a button
        // if the button is clicked run function
        // heads or tails function
        // if heads else tails
        
        // math.random generates random decimal between 0 to 1
        // * 2 to generate from 0 to 2
        // math.floor will round the number down between 0 and 1
        let randomInt = Math.floor(Math.random() * 2) 

        // initialize a variable to store result
        // if randomInt is 0, heads
        // if not it is tails
        let result = (randomInt === 0) ? "Heads" : "Tails"

        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          name: result
        };
        res.end(JSON.stringify(objToJson));
      } 
      else {
        res.writeHead(400, {'Content-Type': 'application/json'});
        const objToJson = {
          name: "Invalid request"
        };
        res.end(JSON.stringify(objToJson));
      } // invalid
    }// results on click
  else if (page == '/css/style.css'){ // if they request a style sheet here's the style sheet we're going to send them, so just by using index.html there are css stylesheets client side in there that is why on server side we handle it
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
    figlet('404!!', function(err, data) { //error handling with figlet which is text
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
