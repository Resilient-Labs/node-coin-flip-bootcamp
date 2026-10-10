//declaring the variables 
//defining conditions - successful and unsuccessful attempts
//if the user visits /pathway (html, css, js, coin-flip)
//tell the browser server is sending (html,css,js, coin-flip)
//Send (html,css,js, coin-flip) to the browser 
//finsh the response
const http = require('http'); 
const fs = require('fs'); 
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet');

//creates the server
const server = http.createServer(function (req, res) {
  console.log(req.url)

  //gets the url path that was requested by the browser
  const page = url.parse(req.url).pathname; 

  //Homepage
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
      else if (page == '/css/style.css'){
        fs.readFile('css/style.css', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/css'});
          res.write(data);
          res.end();
        });

        //if the user visits the JS file 
      }else if (page == '/js/main.js'){
        fs.readFile('js/main.js', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(data);
          res.end();
        });
        //logic for coin flip - sends a request to run this code
      } else if (page == '/coin-flip') { 
        //math.random - to get a random number btwn 0 - .9 math for probability (heads vs. tails)
          const result = Math.random() < 0.5 ? 'heads' : 'tails';

          res.writeHead(200, {'Content-Type': 'text/javascript'});
          res.write(result);
          res.end();

      //display 404 message if none of the routes in the code match 
      }else{
        figlet('404!!', function(err, data) {
          if (err) {
              console.log('Something went wrong...');
              console.dir(err);
              return;
          }
          //sends the 404 message to the browser
          res.write(data);
          res.end();
        });
      }
    }).listen(8000); //let's the server acccept incoming requests to connect



//ISSUES - result needs to be sent back to the browser 
//