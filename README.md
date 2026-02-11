# 💸 Flip Em! - Node.js Coin Flip Game

A two-player coin flip guessing game built with vanilla Node.js using the `http` and `fs` modules. Players compete to reach 5 points first by correctly guessing coin flips!

![Game Preview](flip.png)

## 🌐 Live Demo

**[Play the Game Here](https://flip-em.onrender.com/)**

## 📖 About The Project

Flip Em! is a competitive two-player coin flip game that demonstrates fundamental Node.js concepts without frameworks. Built using only core Node.js modules, this project showcases server-side JavaScript, API routing, and real-time score tracking. Players take turns flipping a coin, with Player 1 assigned to "heads" and Player 2 to "tails". The first player to reach 5 points wins!

### Key Features

🎲 **Two-Player Competition** - Head-to-head gameplay with automatic turn tracking  
🏆 **Score System** - First to 5 points wins the game  
🪙 **Visual Coin Flips** - Dynamic images showing heads or tails results  
🔄 **API Integration** - Custom REST API built with vanilla Node.js  
📊 **Real-time Updates** - Live score tracking via fetch requests  
♻️ **Reset Functionality** - Start a new game instantly  

## 🛠️ Tech Stack

- **Node.js** - Server-side JavaScript runtime
- **HTTP Module** - Built-in Node.js server creation
- **FS Module** - File system operations for serving static files
- **Vanilla JavaScript (ES6+)** - Client-side game logic
- **HTML5 & CSS3** - Frontend structure and styling
- **Figlet** - ASCII art for 404 error pages

### Node.js Concepts Demonstrated

- Creating HTTP servers without Express
- File system operations (`fs.readFile`)
- URL parsing and query string handling
- Serving static assets (HTML, CSS, JS, images)
- Building RESTful API endpoints
- JSON data handling
- Request/response lifecycle management

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 17.0.0 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdirxhmxn/coin-flip-game.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd coin-flip-game
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the server**
   ```bash
   node server.js
   ```

5. **Open in browser**
   ```
   Navigate to: http://localhost:8000
   ```

## 🎮 How to Play

### Setup
1. **Player 1** enters their name in the first input field
2. **Player 2** enters their name in the second input field
3. Click the **"Flip Em"** button to start

### Gameplay
- **Player 1** is automatically assigned **"heads"**
- **Player 2** is automatically assigned **"tails"**
- Each flip randomly generates heads or tails
- The player whose side appears earns **1 point**
- A coin image displays the flip result
- Scores update in real-time
- **First player to 5 points wins!**

### Controls
- **Flip Em** - Flip the coin
- **Restart** - Reset the game and scores

## 📂 Project Structure

```
coin-flip-game/
│
├── server.js              # Node.js HTTP server
├── index.html             # Main game interface
├── package.json           # Project dependencies
│
├── css/
│   └── style.css         # Game styling
│
├── js/
│   └── main.js           # Client-side game logic
│
└── img/
    ├── heads.jpg         # Heads coin image
    └── tails.jpg         # Tails coin image
```

## 💻 Code Overview

### Server Setup (server.js)

```javascript
const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  
  // Route handling for HTML, CSS, JS, and API
  if (page === '/') {
    fs.readFile('index.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
  // ... additional routes
});

server.listen(8000);
```

### API Endpoint

The `/api` endpoint handles game logic:
- Receives player names via query parameters
- Generates random coin flip (1 = heads, 2 = tails)
- Tracks scores across requests
- Determines winner when score reaches 5
- Returns JSON response with game state

```javascript
// Example API response
{
  obj1: {
    name: "Player1",
    status: "heads",
    score: 3,
    winStatus: false
  },
  obj2: {
    name: "Player2", 
    status: "tails",
    score: 2,
    winStatus: false
  },
  coinResult: "heads"
}
```

### Client-Side Fetch

```javascript
fetch(`/api?p1=${userName}&p2=${userName1}`)
  .then(response => response.json())
  .then(data => {
    // Update UI with scores and coin result
    // Check for winner
  });
```

## 🎨 Features in Detail

### Random Coin Flip Logic
```javascript
let turnFlip = Math.floor(Math.random() * 2) + 1; // 1 or 2
let Coin = turnFlip === 1 ? 'heads' : 'tails';
```

### Score Tracking
- Server maintains `score1` and `score2` variables
- Scores persist across API calls
- Automatically resets when a player reaches 5 points

### Winner Detection
- Checks if either player reaches 5 points
- Sets `winStatus` to `true` for the winner
- Displays winner message and disables further flips

### Static File Serving
- Serves HTML, CSS, JavaScript, and images
- Uses `fs.readFile` for file operations
- Sets appropriate Content-Type headers

## 🐛 Known Issues & Improvements

- [ ] Score persistence relies on server memory (resets on server restart)
- [ ] No input validation for empty player names
- [ ] Could benefit from better error handling
- [ ] No animation for coin flip transitions

## 🔮 Future Enhancements

- [ ] Add coin flip animation
- [ ] Implement sound effects
- [ ] Add best-of-3 rounds option
- [ ] Store game history/statistics
- [ ] Add player avatars
- [ ] Implement WebSockets for real-time updates
- [ ] Add mobile touch gestures
- [ ] Create single-player mode vs. computer

## 📝 Lessons Learned

This project strengthened my understanding of:
- **Core Node.js Modules** - Building servers without frameworks
- **HTTP Protocol** - Request/response lifecycle and status codes
- **File System Operations** - Reading and serving static files
- **API Design** - Creating RESTful endpoints and JSON responses
- **State Management** - Tracking data across multiple requests
- **Asynchronous JavaScript** - Fetch API and promises
- **URL Routing** - Parsing paths and query parameters

## 🙏 Acknowledgments

- Bootcamp curriculum for project foundation
- Trek for assistance with score logic implementation
- Figlet library for creative 404 pages
- Node.js documentation for core module guidance

## 📄 License

This project is part of a coding bootcamp curriculum and is available for educational purposes.

## 👤 Author

**Abdirahman Mohamed**
- GitHub: [@abdirxhmxn](https://github.com/abdirxhmxn)
- LinkedIn: [Abdirahman Mohamed](https://linkedin.com/in/abdirahmanamohamed)
- Portfolio: [mcdigitalservices.pro](https://mcdigitalservices.pro)
- Email: work.amohamed@gmail.com

---

⭐ **If you found this project helpful, please consider giving it a star!**

*Built with vanilla Node.js to demonstrate fundamental server-side concepts*
