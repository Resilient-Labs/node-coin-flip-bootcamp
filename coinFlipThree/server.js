const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
// const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(params);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });

  }else if (page == '/image/coinFace.jpg'){
    fs.readFile('image/coinFace.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });

  }
  else if (page == '/image/coinTails.jpg'){
    fs.readFile('image/coinTails.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });

  }else if (page == '/coinFlip'){
    const string = params["checkCoinFlip"]
    console.log(string,"coinFlip");
    // const response = { message: "Heads"}
    if(string == "Heads"){
  		coinFace = { message: "Heads"}
      res.end(JSON.stringify(coinFace))
  	}else{
      coinFace = { message: "Tails"}
      res.end(JSON.stringify(coinFace))

    }
    // if(string === string.split("").reverse().join("")){


// test
  //   function flipCoin(){
  // 	var randomNumber=Math.random();
  // 	var coinFace="heads";
  // }
  // return coinFace;
// test


    //   response.message = "Tails"
    // // }
    // res.writeHead(200, {'Content-Type': 'application/json'});
    //  res.end(JSON.stringify(response));
}
 // else{
//     figlet('404!!', function(err, data) {
//       if (err) {
//           console.log('Something went wrong...');
//           console.dir(err);
//           return;
//       }
//       res.write(data);
//       res.end();
//     });
// }
});

server.listen(8000);
