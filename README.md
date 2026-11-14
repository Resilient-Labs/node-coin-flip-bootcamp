# 🪙 Node Coin Flip

A coin flip built with Node.js hat uses the fs and http modules. Run it and get heads or tails.


### Project Description

This project is a small Node.js application that flips a coin. It uses JavaScript's built-in `Math.floor(Math.random()` to pick between two outcomes. The user must type either `heads` or `tails` and then click the 'Flip Coin' button to get their result. The outcome of their result will be render on the page depending on their coin choice. 

### Features:

- **Coin flip** — randomly returns heads or tails. Prints results.
- **Repeatable** — run it as many times as you like; each flip is independent.

### Tech Used:

- **Front-End:** HTML, CSS, JavaScript 
- **Backend:** server-side JavaScript
- **Runtime:** Node.js
- **Built-ins:** `Math.random()`, `Math.floor()`, `console.log`

### Things I Learned:

- File Architecture:
  - How a Node project is laid out — a `package.json` describing the project and a single entry file that Node runs.
- JavaScript fundamentals:
  - How to pick a random value with `Math.random()` and `Math.floor()`, and why you need both to get a whole number in range.
  - How to store the two outcomes in an array and index into it rather than writing an `if` for each side.
  - Using objToJson as a way to return information from the server I created.

### How to Use:

1. Visit this website using the live link by [**clicking here**](https://node-coin-flip-zll5.onrender.com/)

2. Input text either 'heads' or 'tails' and wait to see if your guess is a winner!

3. Or make this project your own by taking the following steps:

- Step 1. Clone this repository:

```bash
git clone https://github.com/priscilla-ruilova/node-coin-flip.git
```
- Step 2. Navigate to the project:

```bash
cd node-coin-flip
```
- Step 3. Run this command in the terminal to install dependencies `npm install` 

- Step 4. Run this command to start your app `node server.js`  

- Step 5. Edit the styling however you want!

## Happy Coding!