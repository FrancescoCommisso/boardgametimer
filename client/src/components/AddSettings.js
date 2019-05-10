import React, { Component } from "react";
import "pretty-checkbox/src/pretty-checkbox.scss";
import "./Main.css";
import { Container, Row, Col } from "react-bootstrap";

class AddSettings extends Component {
  state = {
    time: 1,
    autoStart: true
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onNext(this.state);
  };

  onTimeChange = e => {
    this.setState({ time: e.target.value });
  };

  onAutoStartChange = e => {
    this.setState({ autoStart: e.target.checked });
  };

  render() {
    var auto = this.state.autoStart ? "Yes" : "No";

    return (
      <form className="top ">
        <Container className=" sub">
          <h2>Add Rules</h2>
          <p>How long should each turn be?</p>
          <Row className="my-3">
            <Col className="text-left">
              <input
                className="form-control min-input d-inline"
                value={this.state.time}
                onChange={this.onTimeChange}
                name="time"
              />
              <label className="mx-4 h5">Min</label>
            </Col>
          </Row>

          <p>Start each new turn automatically?</p>

          <Row className="my-3">
            <Col>
              <div class="pretty p-switch p-fill">
                <input
                  defaultChecked={this.state.autoStart}
                  onChange={this.onAutoStartChange}
                  type="checkbox"
                />
                <div class="state">
                  <label>{auto}</label>
                </div>
              </div>
            </Col>
          </Row>

          <div>
            <button
              className="btn-default round btn-block b1"
              onClick={this.handleSubmit}
            >
              Finish
            </button>
          </div>
        </Container>
      </form>
    );
  }
}

export default AddSettings;
