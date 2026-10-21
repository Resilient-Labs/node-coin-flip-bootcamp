# 💸 &nbsp; Node Coin Flip Game

A coin flip guessing game with a Node.js backend. Type "Heads" or "Tails" and click Flip Coin. Your guess is sent to the server, which flips the coin, checks if you guessed right, and sends back the result to show on the page.

[![Screenshot-2026-10-04-at-4-40-48-AM.png](https://i.postimg.cc/0Qd3jRN9/Screenshot-2026-10-04-at-4-40-48-AM.png)](https://postimg.cc/YG08DPgP)

## How to Run It:

1. Clone this repo
2. In the project folder, run `npm install`
3. Start the server with `node server.js`
4. Open http://localhost:8000 in your browser

## How It's Made:

**Tech used:** 

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 

Node modules: http, fs, url, querystring, and the figlet package

**The server:** `server.js` uses Node's `http` module to create a server on port 8000. It looks at the path of each request with `url` and decides what to send back. For the home page, the CSS, the JavaScript, and the background image, it uses `fs.readFile` to read the file and sends it with the right `Content-Type` so the browser knows what kind of file it is. Any other path gets a 404 page made with the `figlet` package, which turns "404!!" into big ASCII-art text.

**The coin flip:** When the player clicks Flip Coin, `main.js` takes what they typed, makes it lowercase so "Heads", "heads", and "HEADS" all work, and sends it to the server with `fetch` as `/api?coinFlip=heads`. The server reads the guess with `querystring`, picks "heads" or "tails" at random using `Math.random` and `Math.floor`, and compares it to the guess. It sends back a JSON object with the player's choice, the flip result, and whether they won or lost.

**Showing the result:** `main.js` turns the server's response into an object with `response.json()` and uses template literals to show "You picked:", "The side came:", and "You Won" or "You Lose" on the page.

**Styling:** The body uses Flexbox to center the game on the screen over a full-page background image, with the game inside a bordered container.

## Optimizations

Things I'd like to improve next:

- Send back a message when the guess isn't heads or tails, so the page doesn't wait forever for an answer
- Combine the heads and tails parts of the server into one block, since they do the same thing
- Use buttons for Heads and Tails instead of a text box
- Keep track of wins and losses

## Lessons Learned:

This was my first project with a Node server. The biggest thing I learned is that the server only sends what you tell it to. My CSS and background image didn't show up at first because the server didn't have a route for them, so I had to add one for each file.

I also learned how the front end and back end talk to each other. The browser sends the guess to the server with `fetch`, the server sends back JSON, and the property names have to match on both sides or nothing shows up. Small details mattered a lot too: forgetting `Math.floor` meant the coin never landed on anything, and the guess had to match the server's checks exactly, which is why I made everything lowercase. I also learned that Node doesn't pick up changes on its own, so the server has to be restarted after editing it.
