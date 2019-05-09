import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
class Description extends Component {
  state = {};
  handleFindGame = () => {
    this.props.history.push("/find");
  };
  handleNewGame = () => {
    this.props.history.push("/create");
  };
  render() {
    return (
      <Container>
        <h1>Board Game Timer</h1>
        <h4 className="text-left">
          The most convoluted and unnecessary timer you will ever use or need.
        </h4>
        <p className="text-left">
          Ever been stuck in a situation in which one static timer just doesn't
          cut it? Well look no further, my friend, as I present to you the Board
          Game Timer! Create a timer that can be viewed and munipulated by each
          and every player in your party. No more forgetting to stop/start
          subsequent turns, and no more having to tediously pass someone's phone
          around the table. Create one timer that can be viewed and manipulated
          from anyones device.
        </p>
        <Row>
          <Col>
            <button
              onClick={this.handleNewGame}
              className=" btn-block bg-warning"
            >
              New Game
            </button>
          </Col>
          <Col>
            <button onClick={this.handleFindGame} className="bg-info btn-block">
              Find Existing Game
            </button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Description;
