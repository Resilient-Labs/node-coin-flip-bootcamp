//activate server using this
//nodeJS is an interpret -- interprets input as  JS code -- output anything
//nodeJS can have empty file 
//takes JS code and runs it 
//JS opens up browser 
//nodeJS works on a terminal interpret where it interpret JS
//nodeJS -- helps differentiate difference between webpage and browser
//browser and JS can work independent 

//require= requesting whatever inside para file
//http-set up set webserver
//fs- access file system (can be a whole comp--whatever we tell it)

//helped by Jeffrey and Kathy 
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
    //connecting server side to 
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
      res.end()
    })
  }
  else if (page == '/api') {
      let result 
      let probability=Math.ceil(Math.random()*2)
      if (probability%2===0){
        result='Head'
      }else{
        result='Tail'
      }
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          answer: result
        }
        res.end(JSON.stringify(objToJson));
      }
  //connect to server css file
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data)
      res.end()
    })
    //connecting server to main.js file
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    })
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
