# Node Coin Flip Game

The user will guess heads or tails and enter it in the input box.

## How it's made
JS, Node.js

JS: The client side calls the API in the local server using the Fetch API. The result "winner" or "loser" will print to the DOM if the user's guess matches the logic (whether heads or tails was generated) on the server side end.

Node.js: Node.js was used to import several Node.js modules: http, fs, url, and queryStrings (from the user). Then I defined the server, extract the requested page's pathname, and parses query parameters. Following are conditionals that determines where a user is in the program. When the client accesses the '/api', the server generates a random outcome of heads or tails and checks if the user's choice matches the outcome. If there's a match, the client receives a response indicating a win along with additional information in a JSON format. 

## Lessons Learned

I learned how to make a basic API in the server side thereby separating the JS logic from the client side.
