const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer(function(req, res) {
	const page = url.parse(req.url).pathname;
	console.log(page);
	if (page == '/') {
		fs.readFile('index.html', function(err, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(data);
			res.end();
		});
	}
	else if (page == '/assets/css/style.css') {
			fs.readFile('assets/css/style.css', function(err, data) {
					res.write(data);
					res.end();
			});
	}
	else if (page == '/assets/js/main.js') {
			fs.readFile('assets/js/main.js', function(err, data) {
					res.writeHead(200, {'Content-Type' : 'text/javascript'});
					res.write(data);
					res.end();
			});
	}
});

server.listen(8000);