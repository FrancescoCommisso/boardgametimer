import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
const broken = require("../assets/broken.svg");
class Error extends Component {
  state = {};
  render() {
    return (
      <div className="top sub">
        <h2>Something Ain't Right...</h2>
        <p>Refresh the page or check the Game-ID</p>
        <Row className="my-5">
          <Col className="text-center">
            <img
              src={broken}
              style={{ maxWidth: "200px" }}
              className="img-fluid "
              alt="Responsive Image"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Error;
