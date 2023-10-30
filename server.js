const http = require('http'); // http is an object which holds my module http
const fs = require('fs')
const url = require('url');
const querystring = require('querystring'); // query params after 8000, 
const figlet = require('figlet') // fun 
              //object.createServer(param1)
const server = http.createServer(requestListener);

function requestListener(req, res) {

  // create server that opens
  const page = url.parse(req.url).pathname; // this gets path name
  const params = querystring.parse(url.parse(req.url).query); // getting parameter of object getting key value pairs property: value

  if (page == "/") {
    //if we go to server, there is a slash there then read the file
    fs.readFile("index.html", function (err, data) {
      // takes a param u want it to read
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end(); // ends http response
    });
  } else if (page == "/otherpage") {
    fs.readFile("otherpage.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" }); // creates headers
      res.write(data);
      res.end();
    });
  } else if (page == "/otherotherpage") {
    fs.readFile("otherotherpage.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/api") {
    console.log(`#2`);
    if ("student" in params) {
      if (params["student"] == "leon") {
        let coinToss = Math.random();
        if (coinToss > 0.5) {
          console.log("heads");
          res.writeHead(200, { "Content-Type": "application/json" });
          const objToJson = {
            name: "heads",
            status: "Boss Man",
            currentOccupation: "Baller",
          };
          res.end(JSON.stringify(objToJson));
        } else if (coinToss < 0.5) {
          console.log("tails");
          res.writeHead(200, { "Content-Type": "application/json" });
          const objToJson = {
            name: "tails",
            status: "Boss Man",
            currentOccupation: "Baller",
          };
          res.end(JSON.stringify(objToJson));
        }
      } //student
    } //student if
  } //else if
  else if (page == "/css/style.css") {
    console.log(`#3`);
    fs.readFile("css/style.css", function (err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == "/js/main.js") {
    console.log(`#4`);
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
} 

//server objct
server.listen(8000); // open on host
