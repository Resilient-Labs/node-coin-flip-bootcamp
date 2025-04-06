  const http = require('http');
  const url = require('url');
  const fs = require('fs')
  const querystring = require('querystring');
  const figlet = require('figlet')
  const server = http.createServer(function (req, res) {


    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }
  
  else if (page == '/css/style.css'){ 
    fs.readFile('index.html', function(err, data){
    res.write(data);
    res.end();
  })
}

  else if (page == '/js/client.js') {
    fs.readFile('js/client.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.end(data);

    })
  }
  else if (page.startsWith("/flipCoin")){
res.writeHead(200, {'Content-Type': 'text/html'});
 const side = page.split("&")[1].split("=")[1]
 const flip = Math.random() < 0.5
 console.log(flip, side)
 if (side == flip.toString()) {res.end("You Won!")} 
 else {res.end("Sorry!")} 
}

})
server.listen(8001);