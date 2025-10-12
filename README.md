# 💸 Week08 Bootcamp2019a Project: Node Coin Flip Game

### Goal: Create a simple web application that uses the fs and http modules. Use http to create the server and fs to read your html file. Include vanilla ES6 js in a script tag at the bottom of your html file. Try creating a coin flip guessing game

### How to submit your code for review:

- Fork and clone this repo
- Create a new branch called answer
- Checkout answer branch
- Push to your fork
- Issue a pull request
- Your pull request description should contain the following:
  - (1 to 5 no 3) I completed the challenge
  - (1 to 5 no 3) I feel good about my code
  - Anything specific on which you want feedback!

Example:

I completed the challenge: 5
I feel good about my code: 4
I feel good about this one


My Awesome Project

Node project for flipping a coin on the server side!

https://node-coin-flip-bootcamp-1.onrender.com/

How It's Made:

Tech used: HTML, CSS, JavaScript

Using the raw http and fs modules with node i created a full stack web application that flips a coin on the server side. To do this, I setup a fetch request on my client side javascript to fetch the /api route. Then in the server.js file, I imported the http, fs, url, and querystring modules. Using querystring and url i parsed the querystring of the fetch request that came from the client side js, and created a conditional for what to do in different cases. I used the /api route for this project, and defined what happened if the query string was '/api'. If it was, i created an object that would get the result of Math.floor(Math.random() * 2) (coin flip) and if truthy, return "Heads", if falsy, "Tails". Then i sent this object to my client side js and inserted the result property in the dom.


Lessons Learned:
I learned a lot about backend development and using node js, plus using the raw node modules to write full stack applications.
