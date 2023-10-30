# 💻 Simple Web App with `fs` and `http`

**Goal:** Build a basic web application using Node's `fs` and `http` modules. The application will serve an HTML file that contains a coin flip guessing game, powered by vanilla ES6 JavaScript.

## Introduction

This project showcases the power of Node.js core modules to build lightweight web applications. 

![Web App Preview](img/tails.png)(img/heads.png)

## Tech Stack 🛠️

**Core Technologies:** Node.js (with `fs` and `http` modules), HTML, ES6 JavaScript

### Project Components:

- **Node.js with `http`:** Creates a server to serve our application to users.
  
- **Node.js with `fs`:** Reads the HTML file, allowing it to be served to the user via the `http` server.
  
- **HTML:** Structures the user interface of the coin flip game, with a section to choose "Heads" or "Tails", and another section to display the result.
  
- **Vanilla ES6 JavaScript:** Located within a `<script>` tag at the bottom of the HTML. It powers the game's logic:
  - Captures user's guess.
  - Generates a random coin flip result.

## Enhancements & Insights 🔍

Using just the core modules of Node.js, I was able to serve a dynamic web game. By calculating possible outcomes with simple ES6 functions.

One key takeaway was the efficiency and simplicity of serving content with `http` and reading files with `fs`. This project reinforced the notion that not all web applications require hefty frameworks or libraries; sometimes, simplicity is key!

## Lessons Learned 📚

- Gained a deeper understanding of Node's core modules and their capabilities.
- Reinforced the importance of modular code, especially when blending server-side (Node.js) and client-side (ES6) logic.
- Appreciated the power of vanilla JavaScript in creating interactive web experiences without dependencies.

