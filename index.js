const http = require("http"); //imports network access
const fs = require("fs"); //access to hard-drive
const url = require("url");
const querystring = require("querystring");

const server = http.createServer(function (req, res) {
  const params = querystring.parse(url.parse(req.url).query);

  const page = url.parse(req.url).pathname;

  if (page == "/") {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
      //let random = Math.random()
      //const objToJSON ={
      //random:random
      // }
    });
  } else if (page == "/index.html") {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/style.css") {
    fs.readFile("style.css", function (err, data) {
      // res.writeHead(200, {'Content-Type': 'text/stylesheet'})
      res.write(data);
      res.end();
    });
  } else if (page == "/main.js") {
    fs.readFile("main.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else if (page == "/imgs/Heads.png") {
    fs.readFile("imgs/Heads.png", function (err, data) {
      console.log(err);
      res.writeHead(200, { "Content-Type": "image/png" });
      res.write(data);
      res.end();
    });
  } else if (page == "/imgs/Tails.png") {
    fs.readFile("imgs/Tails.png", function (err, data) {
      console.log(err);
      res.writeHead(200, { "Content-Type": "image/png" });
      res.write(data);
      res.end();
    });
  } else if (page == "/api") {
    if ("coinT" in params) {
      let string = params["coinT"];
      let results = `${string}`;

      let probability = Math.ceil(Math.random() * 2);

      if (probability === 1 && results === "heads") {
        coinOutcome = "win";
      } else if (probability === 2 && results === "tails") {
        coinOutcome = "win";
      } else if (probability === 1 && results !== "heads") {
        coinOutcome = "lose";
      } else if (probability === 2 && results !== "tails") {
        coinOutcome = "lose";
      }
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    const myToss = {
      coinLand: coinOutcome,
      // imageDisplay: probability
    };

    res.end(JSON.stringify(myToss));
  }else {
    res.writeHead(404,{"Content-Type": "text/html"})
    res.write(`${page} page not found`)
    res.end()
  }
});
server.listen(8900);

//request style.css and main.js files
