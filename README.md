# Coin Flip Game

A simple coin flip guessing game built with HTML, CSS, JavaScript, and Node.js.

## Project Preview 

<img width="680" height="445" alt="coin flip" src="https://github.com/user-attachments/assets/4e8151a6-8a5d-42d5-b9a7-660a0f8437dd" />

## How to Play

1. Enter `heads` or `tails`.
2. Click the **Click!** button.
3. See the coin flip result and whether you won or lost.

## Features

- Random heads or tails outcomes
- Win or lose messages
- Solid red styling with gold accents
- Responsive layout for screens at 600px and below

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Node.js http and fs modules

## Run Locally

Install the dependencies:

    npm install

Start the server:

    node server.js

Open http://localhost:8000 in your browser.

## What I Learned

I practiced sending requests from the browser to a Node.js server,
returning JSON responses, and updating the page with the results.

I also fixed a bug where the tails condition checked the wrong
query parameter, preventing the server from responding.
