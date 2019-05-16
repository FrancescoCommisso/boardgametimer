import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Main.css";
import Footer from "./footer";
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
    if (this.state.more) {
      this.setState({ more: false });
    } else {
      this.setState({ more: true });
    }
  };

  render() {
    let desc;

    if (this.state.more) {
      desc = (
        <div className="my-5">
          <p className="text-light">
            Create a timer that can be started, paused, and restarted from any
            device.
          </p>
          <p className="sub">Fun at parties.</p>
        </div>
      );
    } else {
      desc = (
        <Row className=" my-5">
          <Col className="text-center">
            <img
              src={landingIcon}
              className="img-fluid landingicon "
              alt="Responsive Image"
            />
          </Col>
        </Row>
      );
    }

    return (
      <Container className="top ">
        <h1 className="title">Cloud Timer</h1>
        <h4 className="slogan">Better Than The One In Your Phone</h4>

        {desc}

        <button className="text-button my-2" onClick={this.learnMore}>
          Learn More
        </button>

        <Row className="">
          <Col>
            <button onClick={this.handleNewGame} className="btn-block b1 ">
              New Timer
            </button>
          </Col>
          <Col>
            <button onClick={this.handleFindGame} className="btn-block b2">
              Find Existing Timer
            </button>
          </Col>
        </Row>
        <Row>
          <Col className="text-center my-4 sub">
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Description;
