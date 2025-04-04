const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require("path");
const querystring = require('querystring');

const server = http.createServer(function (req, res) {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    if (page == '/') {
        // console.log(page)
        fs.readFile('../index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    } else if (page == '/api') {
        // console.log(page)
        if ('flip' in params) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            let result = Math.floor(Math.random() * 2);
            // console.log(result)
            const objToJson = {
                result: result
            };
            res.end(JSON.stringify(objToJson));
        }
    } else if (page == '/css/style.css') {
        // console.log(page)
        fs.readFile('../css/style.css', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(data);
            res.end();
        });
    } else if (page == '/js/main.js') {
        // console.log(page)
        fs.readFile('main.js', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
        });
        // brute forcing /images/head.png to load -> not good for if a larger database of images
        // } else if (page == '/images/heads.png') {
        //     fs.readFile('../images/heads.png', function (err, data) {
        //         res.writeHead(200, { 'Content-Type': 'image/png' });
        //         res.write(data);
        //         res.end();
        //     });
    } else if (page.includes('/images')) {
        //checks if the page includes /images
        let extension = path.extname(page)
        //gets the extension of the path in order to correctly identify the type of content for headers
        //finds the image file based on the last section of the URL -> faulty bc there may be query parameters after but for now it works
        let imageName = page.substring(page.lastIndexOf('/') + 1);
        if (extension === '.jpg') {
            // console.log(`../images/${imageName}`, 'readfile test jpg')
            fs.readFile(`../images/${imageName}`, function (err, data) {
                contentType = 'image/jpg';
                res.writeHead(200, { 'Content-Type': contentType })
                res.write(data);
                res.end();
            });
        } else /*if (extension === '.png')*/ {
            // console.log(`../images/${imageName}`, 'readfile test png')
            fs.readFile(`../images/${imageName}`, function (err, data) {
                contentType = 'image/jpg';
                res.writeHead(200, { 'Content-Type': contentType })
                res.write(data);
                res.end();
            });
        }
        // res.end();
    } else {
        res.end();
    }

});

server.listen(8000);
