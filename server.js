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
  else if (page == '/style.css'){
    fs.readFile('style.css',  function(err, data) {
      res.write(data);
      res.end();
    });



  } 

  else if (page == '/api') {

    if('findgem' in params){
      
      // if(params['student']== 'leon'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        let i = Math.floor(Math.random() * 2);
        
        const objToJson = {
          i : i ? true : false
          // name: "leon",
          // status: "Boss Man",
          // currentOccupation: "Baller"
        }
        res.end(JSON.stringify(objToJson));
      
      // else if(params['student'] != 'leon'){
      //   res.writeHead(200, {'Content-Type': 'application/json'});
      //   const objToJson = {
      //     name: "unknown",
      //     status: "unknown",
      //     currentOccupation: "unknown"
      //   }
      //   res.end(JSON.stringify(objToJson));
      // }//student != leon
    }
  
  
  } 
  
  else if(page == '/pic/image.jpg'){
        fs.readFile('pic/image.jpg', function(err, data){
          res.writeHead(200, {'Content-Type': 'image/jpg'});
          res.write(data);
          res.end();
        });

    } 
    else if(page == '/pic/ruby.png'){
        fs.readFile('pic/ruby.png', function(err, data){
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.write(data);
            res.end();
        });
    } else if(page == '/pic/saphire.png'){
        fs.readFile('pic/saphire.png', function(err, data){
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.write(data);
            res.end();
        });
    }

    

    else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });

  }
  
  else{
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

server.listen(8003);