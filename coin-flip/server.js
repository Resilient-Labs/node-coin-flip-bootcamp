const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function (req, res) {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    if (page == '/') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
    //  else if (page == '/otherpage') {
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
    else if (page == '/api') {
        if ('choice' in params) {
            //DO math.random here and comparison here
            let coin = ''
            let winOrLose = ''
            let num = Math.random()

            if (num <= 0.5) {
                coin = 'heads'
                // img.src = 'https://th.bing.com/th/id/OIP.jK3GE7yWtxrcBLk202CzlAHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7'
            } else {
                coin = 'tails'
                // img.src = 'https://th.bing.com/th/id/OIP.TIwoakaiE4h5Cxgn5_w1cgHaHa?w=168&h=180&c=7&r=0&o=5&pid=1.7'
            }

            if (params['choice'] == coin) {
                winOrLose = 'You win'
            } else {
                winOrLose = 'You lost'
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const objToJson = {
                //User's choice
                user: params['choice'],
                //Computer's choice
                computer: coin,
                //Win or lose
                outcome: winOrLose
            }
            res.end(JSON.stringify(objToJson));
        }
}//else if
  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function (err, data) {
        res.write(data);
        res.end();
    });
} else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.write(data);
        res.end();
    });
} else {
    figlet('404!!', function (err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        res.write(data);
        res.end();
    });
}
});

server.listen(8000);