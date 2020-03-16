
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

  else if (page == '/api') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        //{
          

          let result = Math.round(Math.random())

          let arr = ["heads", "tails"]

          if(arr[result] === "heads"){
            const objToJson = {

              result:"../images/heads.png",
              //tails:"images/tails.png"
    
          
              } 
            console.log("heads")
            res.end(JSON.stringify(objToJson.result));  
            

          }else{
            const objToJson = {

              //heads:"images/heads.png",
              result:"../images/tails.png"
              
          
              } 
            console.log("tails")
            res.end(JSON.stringify(objToJson.result));  

          }

    
          //res.end(JSON.stringify(objToJson));  
        //}
      
  //     else if(params['student'] != 'leon'){
  //       res.writeHead(200, {'Content-Type': 'application/json'});
  //       res.end(JSON.stringify(objToJson));
  // }
  }else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/images/heads.png'){
    fs.readFile('images/heads.png', function(err, data) {
      res.writeHead(200,{"content-type": "image/png"})
      res.write(data);
      res.end();
    });
  }else if (page == '/images/tails.png'){
    fs.readFile('images/tails.png', function(err, data) {
      res.writeHead(200,{"content-type": "image/png"})
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
