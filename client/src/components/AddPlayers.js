import React, { Component } from "react";
import "./Main.css";
import { Container, Row, Col } from "react-bootstrap";

class AddPlayers extends Component {
  state = {
    players: 1,
    names: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onNext(this.state.names);
  };

  handlechange = e => {
    let newNames = this.state.names;
    newNames[e.target.name - 1] = e.target.value;
    this.setState({ names: newNames });
  };

  newPlayer = () => {
    if (this.state.players < 10) {
      let p = this.state.players;
      let q = p + 1;
      this.setState({ players: q });
    }
  };

  removePlayer = () => {
    if (this.state.players > 1) {
      let p = this.state.players;
      let q = p - 1;
      let n = this.state.names;
      n.pop();
      this.setState({ players: q, names: n });
    }
  };

  createInputs = () => {
    let inputs = [];

    for (let i = this.state.players; i > 0; i--) {
      inputs.push(
        <Row key={i}>
          <Col>
            <input
              className="form-control my-1"
              name={i}
              placeholder={`Participant ${i}`}
              onChange={this.handlechange}
            />
          </Col>
        </Row>
      );
    }
    return inputs.reverse();
  };

  render() {
    let c = this.createInputs();
    return (
      <div className="top sub">
        <h2>Add Particpant</h2>
        <p>Enter each particpant's name</p>
        <form className="text-center block" onSubmit={this.handleSubmit}>
          <Container>
            {c}
            <Row className="row equal">
              <Col>
                <button
                  type="button"
                  className="btn-block b3 my-2"
                  onClick={this.newPlayer}
                >
                  Add
                </button>
              </Col>
              <Col>
                <button
                  type="button"
                  className="btn-block b2 my-2"
                  onClick={this.removePlayer}
                >
                  Delete
                </button>
              </Col>
            </Row>
            <button className="btn-block b1 my-3">Next</button>
          </Container>
        </form>
      </div>
    );
  }
}

export default AddPlayers;
