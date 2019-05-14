import React, { Component } from "react";

class FindGame extends Component {
  state = {
    id: null
  };

  handleIDChange = e => {
    this.setState({ id: e.target.value.trim() });
  };
  handleJoinGame = e => {
    e.preventDefault();
    fetch("/api/game", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: this.state.id })
    }).then(response => {
      if (response.status == 200) {
        this.props.history.push(`/game/${this.state.id}`);
      } else {
        this.setState({ error: "Invalid Game-ID" });
      }
    });
  };
  render() {
    let error;

    if (this.state.error) {
      error = (
        <p style={{ color: "red" }} className="text-center">
          This Game-ID is invalid
        </p>
      );
    } else {
      error = (
        <p style={{ color: "red" }} className="text-center">
          <br />
        </p>
      );
    }

    return (
      <div className="top sub">
        <form onSubmit={this.handleJoinGame}>
          <h2>Find Game</h2>
          <p>
            If a member of your party has already created a game, enter the
            Game-ID here
          </p>
          <input
            className="text-center form-control"
            onChange={this.handleIDChange}
            placeholder="XXXXX"
          />

          {error}

          <button className="btn-block b2" onClick={this.handleJoinGame}>
            Join Game
          </button>
        </form>
      </div>
    );
  }
}

export default FindGame;
