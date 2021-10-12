//----------------------Core Modules

const http = require('http');//absolutely required dependency
const fs = require('fs') // file paths
const url = require('url'); //lets us look at url where request is coming from
const querystring = require('querystring');
const figlet = require('figlet')

//----------------------Core Modules


const server = http.createServer((req, res) => { //creates the http server
  const page = url.parse(req.url).pathname;   //not sure what this does
  const params = querystring.parse(url.parse(req.url).query);  //not sure what this does. maybe targets parameter value in url
  
  if (page == '/') {  //if the request is the index page
    fs.readFile('index.html', (err, data) => { // read this file and convert to data
      if (err) throw err; // if there is any error throw error
      res.writeHead(200, {'Content-Type': 'text/html'}); //everything went throught 200, content type is text/html
      res.write(data);  //not sure what this does
      res.end();  //end the response
    });
  }

  //algorithm that give either 1 or 2. if 1 then heads else tails
  
  else if (page == '/api') {
    if('result' in params){ //if result is a parameter in the url
      console.log('result in params')
      let randomCoinFlip = Math.ceil(Math.random() * 2 ) === 1 ? 'heads' : 'tails'   //gives you 1 or 2
      if(params['result']== randomCoinFlip){   //if heads is the guess
        res.writeHead(200, {'Content-Type': 'application/json'}); // content will be in json format
        console.log('heads')
        const objToJson = {
          result : 'Correct Guess' 
        }
        res.end(JSON.stringify(objToJson));
      }
      
      else if(params['result'] != randomCoinFlip){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
            result : 'Incorrect Guess'
        }
        res.end(JSON.stringify(objToJson));  
      }
      
    }
  }
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



//issues
//math should have been Math
//ciel should have been ceil
//