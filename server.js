const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const PORT = 8000;

const server = http.createServer((req, res) => {
  const parsedURL = url.parse(req.url);

  const path = parsedURL.pathname;
  const params = querystring.parse(parsedURL.query);
  console.log(path);

  if (path === "/") {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (path === "/api/flip") {
    console.log("\n\nYou hit an endpoint\n");
    const coin = ["heads", "tails"];

    const result = coin[Math.round(Math.random())];

    console.log("RESULT", result);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ result }));
  } else if (path == "/css/style.css") {
    fs.readFile("css/style.css", (err, data) => {
      res.write(data);
      res.end();
    });
  } else if (path == "/js/main.js") {
    fs.readFile("js/main.js", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else {
    console.log("Something went wrong...");
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(PORT, () => console.log(`Listening at localhost:${PORT}`));
