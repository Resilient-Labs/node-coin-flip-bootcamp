# 💸 Project: Node Coin Flip Game

### Goal: Create a simple web application that uses the fs and http modules. Use http to create the server and fs to read your html file. Include vanilla ES6 js in a script tag at the bottom of your html file. Try creating a coin flip guessing game


**Link to project:** https://coinflip-app.netlify.app/


 ![gif](https://user-images.githubusercontent.com/91163017/197418489-9a7a0647-dd83-4913-aca6-367515e1b65e.gif)



## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js

On the server side I used the .random() method to generate a random number between 0 and 1. The server creates an object and sends it with two properties. If .random() generates a 0 it respondes to the request with a string of 'heads' alongside an image of a coin with the heads side showing. The same logic applies for tails.

## Lessons Learned:

When sending data to a web server, the data has to be a string. We can use JSON.stringify() to convert a JavaScript object to a JSON string.
