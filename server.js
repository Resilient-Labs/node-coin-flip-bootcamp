const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
//const figlet = require("figlet");

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const param = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == "/") {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/api") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    let coin = Math.random() > 0.5 ? "Heads" : "Tails";
    res.write(coin);
    console.log(coin);
    res.end();
  } else if (page == "/css/style.css") {
    fs.readFile("css/style.css", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else if (page == "/css/normalize.css") {
    fs.readFile("css/normalize.css", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else if (page == "/js/main.js") {
    fs.readFile("js/main.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404);
    // res.write("404 Something went wrong...");
    // console.log("404 something went wrong...");
    // console.dir(err);
    res.end();
  }

  // } else {
  //   figlet("404!", function (err, data) {
  //     if (err) {
  //       console.log("Something went wrong...");
  //       console.dir(err);
  //       return;
  //     }
  //     res.write(data);
  //     res.end();
  //   });
});

server.listen(8000);
