# Coin Flip Game

A simple interactive web game where users can guess the outcome of a virtual coin toss. Built with JavaScript, Node.js, and HTML/CSS, featuring a football-themed design for a fun look.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Screenshots](#screenshots)
7. [Acknowledgements](#acknowledgements)

## Project Overview

This project simulates a coin flip where users can select Heads or Tails. Once the user makes a choice, the server randomly determines the coin toss outcome and returns a JSON response with:

- Toss result (heads or tails)
- User selection
- Whether the guess was correct (correct or wrong)

The frontend displays the result with a football-themed interface and a scoreboard-style result box.

## Features

- Interactive coin flip game
- Football-themed UI with styled radios and button
- Responsive design for desktop and mobile
- Dynamic result display using JSON from Node.js API

## Technologies Used

<a href="https://www.linux.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/linux-colored.svg" alt="Linux" title="Linux" width="36" height="36" /></a>   <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode-colored.svg" alt="VS Code" title="VS Code" width="36" height="36" /></a>  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" alt="JavaScript" title="JavaScript" width="36" height="36" /></a>   <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" alt="HTML5" title="HTML5" width="36" height="36" /></a>   <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" alt="CSS3" title="CSS3" width="36" height="36" /></a>    <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" alt="NodeJS" title="NodeJS" width="36" height="36" /></a>    <a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" alt="Git" title="Git" width="36" height="36" /></a>

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/coin-flip-game.git
````

2. Navigate to the project directory:

```bash
cd coin-flip-game
```

3. Install Dependencies:
```bash
npm install
```
4. Start the server:
```bash
node server.js
```
5. Open your browser and go to:
```bash
http://localhost:8001
```

## Usage

1. Select Heads or Tails using the radio buttons.

2. Click the Click Me button to toss the coin.

3. View the result in the scoreboard area: it will display the coin toss result and whether your guess was correct.

4. Check the browser console for additional debugging info.

## Screenshots

<img width="627" height="341" alt="coin flip" src="https://github.com/user-attachments/assets/c02e0caa-491e-4a3f-b12b-922dae4fce27" />

## Acknowledgements
* [Node.js Documentation](https://nodejs.org/en/docs/)
* [MDN](https://developer.mozilla.org/en-US/)
