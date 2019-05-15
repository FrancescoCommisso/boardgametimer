import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Timer from "./Timer";
import ReactNoSleep from "react-no-sleep";
import Switch from "react-switch";
import "pretty-checkbox/src/pretty-checkbox.scss";

const pretty = require("pretty-ms");
const Sound = require("react-sound").default;
const missileSound = require("../assets/missile.mp3");
const finishSound = require("../assets/foghorn.mp3");
const bell = require("../assets/bell.mp3");
const chirp = require("../assets/chirp.mp3");

const pause = require("../assets/pause.svg");
const play = require("../assets/play.svg");
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      preventSleep: true
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
    } else {
      this.componentDidMount();
    }
  };

  calcTotalTime = () => {
    this.interval = setInterval(() => {
      var elapsed = Math.abs(Date.now() - this.state.gameState.gameStartTime);
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

  handleSleepChange = e => {
    this.setState({ preventSleep: e.target.checked });
  };

  render() {
    if (this.state.gameState) {
      return (
        <Container className="text-center my-4 sub">
          <Sound url={chirp} playbackRate={4} playStatus={this.playsound()} />

          <Row>
            <Col className="text-left align-top ">
              <h3>Timer-ID</h3>
              <p className="text-button ">{this.state.id}</p>
            </Col>
            <Col className="text-right align-top ">
              <h3>Total Time</h3>
              <p> {this.state.totalTime}</p>
            </Col>
          </Row>

          <Row className="my-3">
            <Col>
              <div className="border rounded">
                <h1>{this.state.gameState.currentPlayer}</h1>
                <Timer millis={this.state.gameState.remainingTimeForTurn} />
                <h5>Turn: {this.state.gameState.totalTurns}</h5>
              </div>
            </Col>
          </Row>

          <Row className="my-2">
            <Col>
              <button className="btn-block b1" onClick={this.handlePause}>
                {this.determinePaused()}
              </button>
            </Col>

            <Col>
              <button className="btn-block b1" onClick={this.handleRestart}>
                Restart Turn
              </button>
            </Col>
          </Row>
          <Row className="my-2 ">
            <Col>
              <button
                className="btn-block b1 py-4"
                onClick={this.handleEndTurn}
              >
                End Turn
              </button>
            </Col>
          </Row>

          <Row className="text-left my-5">
            <Col className="">
              <div className="py-3">
                <ReactNoSleep>
                  {({ isOn, enable, disable }) => (
                    <div className="">
                      <span className="align-baseline d-inline-block mx-2">
                        <p className="d-inline-block text-left">
                          Prevent Sleep
                        </p>
                      </span>
                      <span className=" d-inline-block align-middle">
                        <Switch
                          className=""
                          onColor="#ffc857"
                          checkedIcon={false}
                          uncheckedIcon={false}
                          onChange={isOn ? disable : enable}
                          checked={isOn}
                        />
                      </span>
                    </div>
                  )}
                </ReactNoSleep>
              </div>
            </Col>
          </Row>
        </Container>
      );
    } else {
      return <div />;
    }
  }
}

export default Game;
