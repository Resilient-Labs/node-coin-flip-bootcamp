const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const server = http.createServer((request, response) => {
    const page = url.parse(request.url).pathname
    const params = querystring.parse(url.parse(request.url).query)

    if (page === '/') {
        fs.readFile('coin-flip/index.html', function (err, data) {
            response.writeHead(200, { "Content-Type": 'text/html' })
            response.write(data)
            response.end()
        })

    } else if (page === '/api') {
        if ('choice' in params) {
            let coinSide = ""
            let number = Math.random()
            if (number < .5) {
                coinSide = "tails"
            } else {
                coinSide = "heads"
            }

            const objToJson = {
                coin: coinSide,
                userChoice: params['choice'],
                isCorrect: params['choice'] === coinSide
            }

            response.writeHead(200, { "Content-Type": "application/json" })
            response.end(json.stringify(objToJson))

        } else {
            response.writeHead(400, { "Content-Type": "application/json" })
            response.end(json.stringify({ error: "Missing 'choice' parameter" }))
        }

    } else if (page === '/js/main.js') {
        fs.readFile('coin-flip/js/main.js', function (err, data) {
            if (err) {
                response.writeHead(404, { "Content-Type": "text/plain" })
                response.end("File not found")
            } else {
                response.writeHead(200, { "Content-Type": "application/javascript" })
                response.end(data)
            }
        })

    } else {
        response.writeHead(404, { "Content-Type": "text/plain" })
        response.end("404 Not Found")
    }
})

server.listen(5000)
