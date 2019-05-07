import React, { Component } from "react";
const pretty = require("pretty-ms");
const Sound = require("react-sound").default;
const missileSound = require("../assets/missile.mp3");
const finishSound = require("../assets/foghorn.mp3");
const bell = require("../assets/bell.mp3");
const chirp = require("../assets/chirp.mp3");

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id
    };
  }

  componentDidMount() {
    fetch("/api/game", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(res => this.checkResponse(res));
  }

  checkResponse = res => {
    if (res.status === 200) {
      res.json().then(state => this.setState(state, this.calcTotalTime()));
    }
  };

  calcTotalTime = () => {
    this.interval = setInterval(() => {
      var elapsed = Date.now() - this.state.gameState.gameStartTime;
      this.setState({ totalTime: pretty(elapsed) });
      this.getRemainingTime();
    }, 100);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleEndTurn = () => {
    fetch("/api/input/endturn", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: this.state.id })
    }).then(response => {
      this.setState(response.json());
    });
  };

  getRemainingTime = () => {
    fetch("/api/remainingtime", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: this.state.id })
    })
      .then(response => response.json())
      .then(state => this.setState({ gameState: state }));
  };

  handlePause = () => {
    fetch("/api/input/pause", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: this.state.id })
    }).then(response => response.json());
  };

  handleRestart = () => {
    fetch("/api/input/restart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: this.state.id })
    });
  };

  determinePaused = () => {
    if (this.state.gameState.paused) {
      return "Un-Pause";
    } else {
      return "Pause";
    }
  };

  playsound = () => {
    if (this.state.gameState.remainingTimeForTurn == 0) {
      return Sound.status.PLAYING;
    }
  };

  render() {
    if (this.state.gameState) {
      return (
        <div>
          <Sound url={chirp} playbackRate={4} playStatus={this.playsound()} />
          <h1>{this.state.id}</h1>
          <h2>{this.state.gameState.currentPlayer}'s Turn</h2>
          <h3>
            Time Remaining: {pretty(this.state.gameState.remainingTimeForTurn)}{" "}
          </h3>
          <h5>Total Time: {this.state.totalTime}</h5>
          <h5>Turn#: {this.state.gameState.totalTurns}</h5>
          <button onClick={this.handlePause}>{this.determinePaused()}</button>
          <button onClick={this.handleEndTurn}>End Turn</button>
          <button onClick={this.handleRestart}>Restart Turn</button>
        </div>
      );
    } else {
      return <div>That Game-ID is no longer valid</div>;
    }
  }
}

export default Game;
