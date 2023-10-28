// Importing the 'http' module to create an HTTP server
const http = require("http");
// Importing the 'fs' module to interact with the file system
const fs = require("fs");
// Importing the 'url' module to parse URLs
const url = require("url");
// Importing the 'querystring' module to parse query strings
const querystring = require("querystring");
// Importing the 'figlet' module to generate ASCII art text
const figlet = require("figlet");

// Creating an HTTP server that listens for requests
const server = http.createServer(function (req, res) {
	// Parsing the URL to get the pathname (e.g., '/', '/otherpage', etc.)
	const page = url.parse(req.url).pathname;
	// Parsing the query string to get the parameters (if any)
	const params = querystring.parse(url.parse(req.url).query);
	// Logging the requested page to the console
	console.log(page);

	// Routing logic to handle different paths
	// If the request is for the home page
	if (page == "/") {
		// Reading the 'index.html' file from the file system
		fs.readFile("index.html", function (err, data) {
			// Setting the HTTP status code to 200 (OK) and content type to 'text/html'
			res.writeHead(200, { "Content-Type": "text/html" });
			// Sending the contents of 'index.html' as the response
			res.write(data);
			// Ending the response
			res.end();
		});
	}
	// If the request is for the '/otherpage' path
	else if (page == "/otherpage") {
		// Reading the 'otherpage.html' file from the file system
		fs.readFile("otherpage.html", function (err, data) {
			// Setting the HTTP status code to 200 (OK) and content type to 'text/html'
			res.writeHead(200, { "Content-Type": "text/html" });
			// Sending the contents of 'otherpage.html' as the response
			res.write(data);
			// Ending the response
			res.end();
		});
	}
	// If the request is for the '/otherotherpage' path
	else if (page == "/otherotherpage") {
		// Reading the 'otherotherpage.html' file from the file system
		fs.readFile("otherotherpage.html", function (err, data) {
			// Setting the HTTP status code to 200 (OK) and content type to 'text/html'
			res.writeHead(200, { "Content-Type": "text/html" });
			// Sending the contents of 'otherotherpage.html' as the response
			res.write(data);
			// Ending the response
			res.end();
		});
	}
	// If the request is for the '/api' path
	else if (page == "/api") {
		// Checking if the 'coin' parameter is in the query string
		if ("coin" in params) {
			let result = Math.floor(Math.random() * 2) === 0 ? "heads" : "tails";
			let userGuess = params["coin"].toLowerCase();

			if (userGuess === "") {
				// The coin parameter is an empty string
				res.writeHead(400, { "Content-Type": "application/json" });
				const objToJson = {
					error: "Invalid input. Parameter 'coin' cannot be an empty string.",
				};
				res.end(JSON.stringify(objToJson));
			} else if (userGuess === "heads" || userGuess === "tails") {
				let isCorrect = userGuess === result; // this will give me true or false.
				res.writeHead(200, { "Content-Type": "application/json" });
				const objToJson = {
					resultOfToss: result,
					userGuessedCorrectly: isCorrect,
				};
				res.end(JSON.stringify(objToJson));
			} else {
				// The user's guess is neither "heads" nor "tails"
				res.writeHead(400, { "Content-Type": "application/json" });
				const objToJson = {
					error: "Invalid input. Please enter 'heads' or 'tails'.",
				};
				res.end(JSON.stringify(objToJson));
			}
		}
	}

	// If the request is for the '/css/style.css' path
	else if (page == "/css/style.css") {
		// Reading the 'style.css' file from the file system
		fs.readFile("css/style.css", function (err, data) {
			// Sending the contents of 'style.css' as the response
			res.write(data);
			// Ending the response
			res.end();
		});
	}
	// If the request is for the '/js/main.js' path
	else if (page == "/js/main.js") {
		// Reading the 'main.js' file from the file system
		fs.readFile("js/main.js", function (err, data) {
			// Setting the HTTP status code to 200 (OK) and content type to 'text/javascript'
			res.writeHead(200, { "Content-Type": "text/javascript" });
			// Sending the contents of 'main.js' as the response
			res.write(data);
			// Ending the response
			res.end();
		});
	}
	// If none of the above conditions are met (404 Not Found)
	else {
		// Using Figlet to generate ASCII art text for '404!!'
		figlet("404!!", function (err, data) {
			// If there is an error generating the ASCII art text
			if (err) {
				// Logging a generic error message to the console
				console.log("Something went wrong...");
				// Logging the error object to the console
				console.dir(err);
				// Exiting the function
				return;
			}
			// Sending the ASCII art '404' message as the response
			res.write(data);
			// Ending
			res.end();
		});
	}
});

server.listen(8000);

// const http = require('http'); // import the HTTP module to create a HTTP server
// const fs = require('fs') // import the file system module to interact with the file system (read files)
// const url = require('url'); // import module to parse through URLS.
// const querystring = require('querystring'); // import the query string module to parse strings through URLs
// const figlet = require('figlet') // Import the figlet module to create ASCll art text

// const server = http.createServer(function(req, res) {
//   const page = url.parse(req.url).pathname;
//   const params = querystring.parse(url.parse(req.url).query);
//   console.log(page);
//   if (page == '/') {
//     fs.readFile('index.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       res.end();
//     });
//   }
//   else if (page == '/otherpage') {
//     fs.readFile('otherpage.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       res.end();
//     });
//   }
//   else if (page == '/otherotherpage') {
//     fs.readFile('otherotherpage.html', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       res.end();
//     });
//   }
//   else if (page == '/api') {
//     if('student' in params){
//       if(params['student']== 'leon'){
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         const objToJson = {
//           name: "leon",
//           status: "Boss Man",
//           currentOccupation: "Baller"
//         }
//         res.end(JSON.stringify(objToJson));
//       }//student = leon
//       else if(params['student'] != 'leon'){
//         res.writeHead(200, {'Content-Type': 'application/json'});
//         const objToJson = {
//           name: "unknown",
//           status: "unknown",
//           currentOccupation: "unknown"
//         }
//         res.end(JSON.stringify(objToJson));
//       }//student != leon
//     }//student if
//   }//else if
//   else if (page == '/css/style.css'){
//     fs.readFile('css/style.css', function(err, data) {
//       res.write(data);
//       res.end();
//     });
//   }else if (page == '/js/main.js'){
//     fs.readFile('js/main.js', function(err, data) {
//       res.writeHead(200, {'Content-Type': 'text/javascript'});
//       res.write(data);
//       res.end();
//     });
//   }else{
//     figlet('404!!', function(err, data) {
//       if (err) {
//           console.log('Something went wrong...');
//           console.dir(err);
//           return;
//       }
//       res.write(data);
//       res.end();
//     });
//   }
// });

// server.listen(8000)
