# 💸 Super Mario Bros. Coin Flip Game

#### Project Scope: This is a Super Mario Bros.- themed coin flip guessing game. The user clicks either the "heads" or "tails" button to lock in their guess. The button triggers the randomization of "heads" or "tails" that is then displayed to the user. The score of correct guesses is also shown and updated as the user plays. There is also a reset button if the user wants to start over.

- Try it Here: https://supermariobros-coinflip.herokuapp.com/
![Coin Flip Screenshot](/coinScreen.png)

# How it was made:
#### HTML5, CSS3, Javascript, API, JSON, Node.js

# Optimizations:
#### The hidden randomization of "heads" or "tails" is done in the back-end server created with Node.js using the fs and http modules. This result is then sent to the client to be displayed on their browser. The score of correct guesses is tracked on the client side through the game object and is displayed after every guess.

# Lesson Learned:
#### I can prevent users from possibly manipulating the results by keeping the randomization of "heads" or "tails" to the back-end server. I also learned how to apply the animation property in a new way by applying it to the background colors to help drive the Super Mario Bros. theme.
