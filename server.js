const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const figlet = require("figlet");

const server = http.createServer(function (req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log("this is page", page);
  if (page == "/") {
    fs.readFile("index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/api") {
    if ("chosenCoinFlip" in params) {
      if (params["chosenCoinFlip"] == "heads") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const coin = {
          prediction: "heads",
          randomNumber: Math.floor(Math.random() * 2),
          result: "",
          compare() {
            if (this.randomNumber === 0) {
              this.result = "Heads, Correct";
            }
            else {
              this.result = "Tails, You Suck";
            }
          },
        };
        coin.compare();
        res.end(JSON.stringify(coin));
      } else if (params["chosenCoinFlip"] == "tails") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const coin = {
          prediction: "tails",
          randomNumber: Math.floor(Math.random() * 2),
          result: "",
          compare() {
            if (this.randomNumber === 0) {
              this.result = "tails, Correct";
            } else {
              this.result = "heads, You Suck";
            }
          },
        };
        coin.compare();
        res.end(JSON.stringify(coin));
      }
    }
  } else if (page == '/css/style.css') {
    fs.readFile("css/style.css", function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile("js/main.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else {
    figlet("404!", function (err, data) {
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
