# Coin Flip 

A simple coin flip guessing game built with a Node.js server. 
Users pick heads or tails, flip the coin, and see whether their guess matches the result.

- Screenshots:
- This is how it looks like:
![Coin Flip](./img/cover.jpeg)
![You Win](./img/heads.jpeg)
![You Lose](./img/tails.jpeg)

## How It's Made

**Tech Used:** HTML, CSS, JavaScript, Node.js

The server is built with Node's core `http` module and uses the `fs` module to read and serve `index.html`. 
The front end uses JavaScript and html.

## Getting Started

1. Clone this repository

```bash
   git clone https://github.com/sabrinalindev/node-coin-flip.git
   cd node-coin-flip
```

2. Install dependencies

```bash
   npm install
```

3. Start the server

```bash
   node server.js
```

4. Open `http://localhost:8000` in your browser

## How to Play

1. Enter the coin side you pick (`heads` or `tails`) 
2. Click the press me button
3. Then it would show whick side you pick, the result, and the computer's side
4. If your pick matches the coin, you beats the bot! Otherwise, the bot wins.

## Features

- Coin flip guessing game with randomized outcomes
- Displays your pick, the flip result, and the computer's side

## Why This Stack

- **Node.js (`http` + `fs`)**: Builds the server from core modules, which helps in understanding how a web server works under the hood.
- **JavaScript**: Keeps the codebase lightweight and easy to understand, with no build step.
- **HTML/CSS**: Simple, fast to load, and perfect for a small browser-based game.

## Optimizations：

- Add input validation and error messages
- Track win/loss streaks and score
- Deploy the server online 

