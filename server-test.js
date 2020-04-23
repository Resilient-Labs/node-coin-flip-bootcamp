// var headPng = "<img src = '/images/heads.png' width='150' height='150'>";
// var tailPng = "<img src = '/images/tails.png' width='150' height='150'>";
// var nemoImageHtml = "<img src= 'nemo.png' alt='Nemo' width= '150' height= '150'>";
// let headOrTail = ["images/heads.png", "images/tails.png"]
// let ourArr = []
// var headPng =['/images/heads.png']
// var tailPng =['/images/tails.png']
const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  //const params = querystring.parse(url.parse(req.url).query);
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
          const objToJson = {}
          if(arr[result] === "heads"){
             objToJson = {

              //  document.querySelector('#result').innerHTML = "headPng",
                result: "images/heads.png"
                
    
            
                } 
    

            res.end(JSON.stringify(objToJson.result));  
            // heads: headPng

          }else{
            objToJson = {
            result: "images/tails.png"
            }
            res.end(JSON.stringify(objToJson.result));  
            // tails: tailPng,
          //}

    
          res.end(JSON.stringify(objToJson));  
        }
      
  //     else if(params['student'] != 'leon'){
  //       res.writeHead(200, {'Content-Type': 'application/json'});
  //       res.end(JSON.stringify(objToJson));
  // }
  }else if (page == '/css/style.css'){
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
