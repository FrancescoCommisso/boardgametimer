import React, { Component } from "react";
import "./Main.css";
class AddPlayers extends Component {
  state = {
    p1: "player1",
    p2: "player2",
    p3: "player3",
    p4: "player4"
  };

  handleSubmit = e => {
    e.preventDefault();
    var players = [];
    players.push(this.state.p1);
    players.push(this.state.p2);
    players.push(this.state.p3);
    players.push(this.state.p4);

    this.props.onNext(players);
  };

  handlep1change = e => {
    this.setState({ p1: e.target.value });
  };
  handlep2change = e => {
    this.setState({ p2: e.target.value });
  };
  handlep3change = e => {
    this.setState({ p3: e.target.value });
  };
  handlep4change = e => {
    this.setState({ p4: e.target.value });
  };

  render() {
    return (
      <div className="top sub">
        <h2>Add Players</h2>
        <p>Enter each player's name</p>
        <form className="text-center block" onSubmit={this.handleSubmit}>
          <div>
            <input
              className="form-control my-1"
              value={this.state.p1}
              name="p1"
              placeholder="p1"
              onChange={this.handlep1change}
            />
          </div>
          <div>
            <input
              className="form-control my-1"
              value={this.state.p2}
              name="p2"
              placeholder="p2"
              onChange={this.handlep2change}
            />
          </div>
          <div>
            <input
              className="form-control my-1"
              value={this.state.p3}
              name="p3"
              placeholder="p3"
              onChange={this.handlep3change}
            />
          </div>
          <div>
            <input
              className="form-control my-1"
              value={this.state.p4}
              name="p4"
              placeholder="p4"
              onChange={this.handlep4change}
            />
          </div>
          <br />
          <button className="btn-block b1">Next</button>
        </form>
      </div>
    );
  }
}

export default AddPlayers;
