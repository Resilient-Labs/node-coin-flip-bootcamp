const http = require('http')
const fs = require('fs')
const url = require('url')
const port = 2500


const server = http.createServer(function(req, res) {
    const page = url.parse(req.url).pathname;
    if (page == '/coinflip.html') {
        fs.readFile('coinflip.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        console.log("Working")
        })
    }
    res.end();
    })

server.listen(port, function(error) {
    if (error) {
        console.log("Something went wrong")
    } else {
        console.log(`Server is up on port: ${port}, open browser.`)
    }
})