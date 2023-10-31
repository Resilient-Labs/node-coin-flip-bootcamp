const http = require("http"); // magic book that helps us talk to the internet
const fs = require("fs"); // a secret box where we can keep and get files
const url = require("url"); // a map that helps us understand web addresses
const querystring = require("querystring"); // helps us read info from web addresses
const figlet = require("figlet"); // is a tool for making big fancy letters

// the constant server is our special machine where it can listen to requests from the internet and respond to them.
// http.createServer tells our
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
    if ("flip" in params) {
      res.writeHead(200, { "Content-Type": "application/json" });
      const winner = Math.random() <= 0.5 ? "tails" : "heads";
      const objToJson = {
        winner: winner,
      };
      res.end(JSON.stringify(objToJson));
    } // check for 'flip' param
  } // for api calls
  else if (page == "/css/style.css") {
    fs.readFile("css/style.css", function (err, data) {
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

server.listen(8000);
