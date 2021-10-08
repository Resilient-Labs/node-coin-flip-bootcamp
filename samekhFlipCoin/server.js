const http = require("http");
const fs = require("fs"); //module that allows you to read the fle system
const url = require("url"); //allows you to look at the url path to find what needs to be found
const querystring = require("querystring"); //enables us to look at query parameters in our url
const figlet = require("figlet"); //allows your 404 to look  little fanciers

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == "/") {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/api") {
    
    // let i = Math.floor(Math.random() * 2)
    if ("search" in params) {
        if(params['search'] == true){
           res.writeHead(200, { "Content-Type": "application/json" }); 
           const objToJson = {
                i: i,
            }
            return heads++;
        }else{
            
            const objToJson = {
                i: i,
            }
            return tails++;
            }
            res.end(JSON.stringify(objToJson));
            

      
    }

    //student = leon
  } //else if
  else if (page == "/style.css") {
    fs.readFile("style.css", function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == "/script.js") {
    fs.readFile("script.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else if (page == "/tails.svg") {
    //for image
    fs.readFile("tails.svg", function (err, data) {
      res.writeHead(200, { "Content-Type": "image/svg+xml" });
      res.write(data);
      res.end();
    });
  } else if (page == "/heads.svg") {
    //for image
    fs.readFile("heads.svg", function (err, data) {
      res.writeHead(200, { "Content-Type": "image/svg+xml" });
      res.write(data);
      res.end();
    });
  } else {
    figlet("404!!", function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      res.write(data);
      res.end();
    });
  }
});
server.listen(8002);

//call is the flip button or the reset button /api/guessHeads
///api/guessTails
///api/flipCoin
///api/resetGame
