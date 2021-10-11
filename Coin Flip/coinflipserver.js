const http = require('http')
const port = 4560

const server = http.createServer(function(req, res) {
    res.write('Hello Node')
    res.end()
})

server.listen(port, function(error) {
    if (error){
        console.log('Error! Please solve the riddle.', error)
    } else {
        console.log('Server is listening on port: ' + port)
    }
})