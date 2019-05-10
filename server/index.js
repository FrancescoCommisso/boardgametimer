const Game = require("./game.js");
const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use(pino);

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('../client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

var games = {};

function addTestGame() {
  var test = {
    id: "test",
    players: ["player1", "player2", "player3", "player4"],
    gameState: {
      paused: false,
      currentPlayer: null,
      remainingTimeForTurn: null,
      gameStartTime: Date.now(),
      totalTurns: 0,
      currentPlayerStartTime: null
    },
    gameSettings: { time: 60000, autoStart: true }
  };
  var g = new Game(test);
  g.init();
  games[g.id] = g;
}

addTestGame();

// app.use(express.static(path.join(__dirname, "../client/build")));

app.post("/api/addgame", (req, res) => {
  var g = new Game(req.body);
  g.init();
  games[g.id] = g;
  res.send();
});

app.post("/api/remainingtime", (req, res) => {
  res.send(JSON.stringify(games[req.body.id].gameState));
});

app.get("/api/games", (req, res) => {
  res.send(games);
});

app.post("/api/game", (req, res) => {
  try {
    if (games.hasOwnProperty(games[req.body.id].id)) {
      res.send(JSON.stringify(games[req.body.id]));
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    res.sendStatus(404);
  }
});

app.post("/api/input/endturn", (req, res) => {
  games[req.body.id].endTurn();
  res.send(JSON.stringify(games[req.body.id]));
});
app.post("/api/input/pause", (req, res) => {
  games[req.body.id].pauseTurn();
  res.send(JSON.stringify(games[req.body.id]));
});
app.post("/api/input/restart", (req, res) => {
  games[req.body.id].restartTurn();
  res.send(JSON.stringify(games[req.body.id]));
});
app.post("/api/getstate", (req, res) => {
  res.send(JSON.stringify(games[req.body.id]));
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log("Express server is running on localhost:3001");
});
