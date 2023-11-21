const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const figlet = require('figlet')

const server = http.createServer(function (req, res) {
    const page = url.parse(req.url).pathname
    const params = querystring.parse(url.parse(req.url).query)
    console.log(page)

    if (page == '/') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
        })
    }

    else if (page == '/api') {
        const randomFlip = Math.floor(Math.random() * 2) // 0 or 1
        const flipResult = randomFlip === 0 ? 'The imaginary coin landed on heads!' : 'The imaginary coin landed on tails!'

        const guess = params.guess
        const winLose = flipResult.toLowerCase().includes(guess) ? 'You win!' : 'You lose!'
        
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ flipResult, winLose }))
    }

    else if (page == '/css/style.css') {
        fs.readFile('css/style.css', function (err, data) {
            res.write(data)
            res.end()
        })
    }

    else if (page == '/js/main.js') {
        fs.readFile('js/main.js', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' })
            res.write(data)
            res.end()
        })
    }

    else {
        figlet('404!!', function (err, data) {
            if (err) {
                console.log('Something went wrong...')
                console.dir(err)
                return
            }
            res.write(data)
            res.end()
        })
    }
})

server.listen(8000)