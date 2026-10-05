const http = require('http'); 
const fs = require('fs');
const url = require('url');

const server = http.createServer(function(req, res) { 
  const page = url.parse(req.url).pathname;// looking at url
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
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
  }
  else if (page == '/flip'){
    let flipCoin = Math.random() 
    let result 
    if ( flipCoin < 0.5){
        result = 'heads';

    }
    else {
      result = 'tails';

    } 
    let  resultObj = {
      result:result
    }
  res.writeHead(200, {'Content-Type': 'application/json'}); 


 res.write(JSON.stringify(resultObj));
res.end();  
}else {
    res.writeHead(404);
      res.end('404 - Not found');
    };
});
server.listen(8000);
