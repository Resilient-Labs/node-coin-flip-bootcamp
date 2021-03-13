const http = require('http');
const fs = require('fs');

// we create a server, which listens for HTTP request on port 8000
// accessed at localhost:8000
http.createServer(function (request, response) {
    console.log(`Request received for ${request.url}`)

    // if homepage is requested, send the coin toss index HTML
    if (request.url === "/") {
        sendIndexHTML(response)
    }
    else {
        // input: "/css/styles.css"
        // we want: "css/styles.css"
        const filename = request.url.slice(1, request.url.length)
        sendOtherPage(filename, response)
    }
}).listen(8000);

function sendOtherPage(whichPage, response) {
    fs.readFile(whichPage, (err, file) => {
        try {
            response.writeHead(200);
            response.write(file);
            console.log(`Rendering ${whichPage}`)
            response.end()
        } catch {
            console.error(`ERROR! Can't render ${whichPage}`)
            response.end()
        }
    });
}

function sendIndexHTML(response) {
    fs.readFile('coin-toss.html', (err, file) => {
        // 200 status code header for success
        response.writeHead(200);
        response.write(file);
        response.end()
    });
}
console.log("Listening on port 8000!")
