const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        fs.readFile('./coin.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
});

server.listen(3000, () => {
    console.log('listening on port 3000');
});

function guessCoin(){
    const guess = document.getElementById('guess');
    const result = document.getElementById('result');
    const coin = Math.random() < 0.5 ? 'heads' | 'tails';

    if(guess.value === coin) {
        result.textContent = `You guessed correctly! Way To Go!! ${guess} was right`
    } else {
        result.textContent = `You guessed ${guess} but the coin was not correct! it was ${coin}`;
    }
    guess.value = '';
}