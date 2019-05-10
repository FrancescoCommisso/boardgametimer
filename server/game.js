class Game {
  constructor(obj) {
    this.id = obj.id;
    this.players = obj.players;
    this.gameState = {
      paused: null,
      currentPlayer: null,
      remainingTimeForTurn: null,
      gameStartTime: null,
      totalTurns: 0,
      currentPlayerStartTime: null
    };
    this.gameSettings = obj.gameSettings;

    this.init = function() {
      this.gameState.currentPlayer = this.players[0];
      this.gameSettings.time *= 60000;
      this.gameState.remainingTimeForTurn = this.gameSettings.time;
      this.gameState.gameStartTime = Date.now();
      this.gameState.totalTurns = 1;
      this.gameState.paused = false;
      this.calculateTimeRemaining();
    };

    var intervalID;

    this.endTurn = function() {
      var current = this.players.indexOf(this.gameState.currentPlayer);
      var next = (current + 1) % this.players.length;
      this.gameState.currentPlayer = this.players[next];
      this.gameState.totalTurns += 1;
      this.gameState.remainingTimeForTurn = this.gameSettings.time;

      if (this.gameSettings.autoStart == false) {
        this.pauseTurn();
      }
    };

    this.calculateTimeRemaining = () => {
      intervalID = setInterval(() => {
        this.gameState.remainingTimeForTurn -= 1000;
        if (this.gameState.remainingTimeForTurn < 0) this.endTurn();
      }, 1000);
    };
    this.pauseTurn = () => {
      if (intervalID) {
        clearInterval(intervalID);
        intervalID = null;
        this.gameState.paused = true;
      } else {
        this.calculateTimeRemaining();
        this.gameState.paused = false;
      }
    };

    this.restartTurn = () => {
      this.gameState.remainingTimeForTurn = this.gameSettings.time;
    };
  }
}

module.exports = Game;
