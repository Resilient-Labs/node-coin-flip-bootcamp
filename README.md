**Medusa Coin Flip**

Call it in the air. Pick heads or tails, hit the button, and my server flips a Medusa coin for you. You hear the flip, you see which side it landed on, and you find out if you won or lost.

 **How to Play**
Type heads or tails in the box (capital letters or not, it doesn't matter)
Click the button
Listen to the coin flip
See which side of the Medusa coin comes up and whether you called it right

**How It Works**
The flip: the server has a list with heads and tails in it, and Math.random() picks one with a 50/50 chance. The result happens on the server, so nobody can mess with it from the browser.

Win or lose: the server compares what you picked to what the coin landed on. Both get turned to lowercase with .toLowerCase() first, so Heads, heads, and HEADS all count the same.

Sending it back: the server responds with JSON that has the result, a win or lose message, and the name of the coin image to show.

**The Images**
There are two coin images: medusaCoinH.webp for heads and medusaCoinT.webp for tails. The server picks the right one based on how the coin landed and sends the filename back with the result. Then main.js swaps the src on the coin image so the page shows the side that actually came up.

Each image has its own route on the server with an image/webp content type. The browser requests images separately from the page, so without those routes, the pictures never load.

**The Sound**
Every time you click the button, main.js creates a new Audio object with coin-flip.wav and plays it. It plays right when you click, before the server even answers, so it feels like the coin is flipping while you wait for the result.

The sound has its own server route too, with an audio/wav content type. And since the sound only plays when you click, the browser doesn't block it the way it blocks sounds that autoplay.

**Built With**
Node.js
JavaScript
HTML
CSS
Medusa Coin Flip screenshot

<img width="2880" height="1541" alt="image" src="https://github.com/user-attachments/assets/5f7184aa-6b35-4cd9-807b-30f644957c56" />
