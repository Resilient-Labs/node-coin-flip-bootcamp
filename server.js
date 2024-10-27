import { createServer } from 'node:http';
import { readFile } from 'node:fs';
import { parse } from 'node:querystring';
import url from 'node:url';
import { checkEquality } from './checkEquality.js';

const PORT = 8000;
const HOST = 'localhost';
const server = createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const path = parsedUrl.pathname;
  const params = parse(parsedUrl.query);

  if (path === '/') {
    readFile('./index.html', (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else if (path === '/api') {
    console.log(path);
    if ('choice' in params) {
      console.log(params);
      const userChoice = params['choice'];
      const result = checkEquality(userChoice);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ result }));
    }
  } else if (path == '/styles.css') {
    readFile('styles.css', (err, data) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(data);
      res.end();
    });
  } else if (path == '/index.js') {
    readFile('index.js', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.write(data);
      res.end();
    });
  }
});

server.listen(PORT, HOST, () =>
  console.log(`listening on http://${HOST}:${PORT}`)
);
