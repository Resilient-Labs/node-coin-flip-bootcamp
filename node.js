//INSTRUCTIONS
// Create a simple web application that uses the fs and http modules.
// Use http to create the server and fs to read your html file.
// Include vanilla ES6 js in a script tag at the bottom of your html file.
// Try creating a coin flip guessing game!


//Server-side code
//require loads nodeModule specified
const http = require("http")
const fs = require("fs")
// change back to http.createServer
http.createServer((request,response) => {
  //loads html (NO CSS/JS yet...)
  fs.readFile("index.html", (error,data) => {
    //200 message, request accepted
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write(data)
    response.end()
  })
}).listen(8080)


//test connection
//Why doesn't this work?
// OK to violate separation of concerns FOR NOW, b/c FOR NOW no way to serve up CSS and JS files
// document.querySelector("h1").textContent = "Computer began infiltrating your website just now"









//
