import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Main.css";
const landingIcon = require("../assets/landingicon.svg");
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
      <Container className="sub top">
        <h2 className="">Board Game Timer</h2>
        <p className="text-white">Because normal timers are boring</p>

        {this.state.more && desc}

        <Row className=" my-5">
          <Col className="text-center">
            <img
              src={landingIcon}
              style={{ maxWidth: "300px" }}
              className="img-fluid "
              alt="Responsive Image"
            />
          </Col>
        </Row>
        <button className="text-button my-2" onClick={this.learnMore}>
          Learn More
        </button>

        <Row className="">
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
