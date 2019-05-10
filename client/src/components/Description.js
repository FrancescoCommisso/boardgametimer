import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Main.css";
class Description extends Component {
  state = { more: false };
  handleFindGame = () => {
    this.props.history.push("/find");
  };
  handleNewGame = () => {
    this.props.history.push("/create");
  };

  learnMore = () => {
    console.log("clickclick");
    if (this.state.more) {
      this.setState({ more: false });
    } else {
      this.setState({ more: true });
    }
  };

  render() {
    let desc = (
      <p className="sub">
        Ever been stuck in a situation in which one static timer just doesn't
        cut it? Well look no further, my friend, as I present to you the Board
        Game Timer! Create a timer that can be viewed and munipulated by each
        and every player in your party. No more forgetting to stop/start
        subsequent turns, and no more having to tediously pass someone's phone
        around the table. Create one timer that can be viewed and manipulated
        from anyones device.
      </p>
    );

    return (
      <Container className="top">
        <h1 className="title">Board Game Timer</h1>
        <h4 className="text-white">Because normal timers are boring</h4>

        {this.state.more && desc}

        <button className="text-button my-2" onClick={this.learnMore}>
          Learn More
        </button>

        <Row>
          <Col>
            <button onClick={this.handleNewGame} className="btn-block b1 ">
              New Game
            </button>
          </Col>
          <Col>
            <button onClick={this.handleFindGame} className="btn-block b2">
              Find Existing Game
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Description;