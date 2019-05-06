import React, { Component } from "react";

class CreateGame extends Component {
  state = {
    id: null
  };

  componentDidMount() {
    this.setState({ id: this.generateID() });
  }

  handleClick = () => {
    this.props.onCreate(this.state.id);
  };

  generateID() {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  render() {
    return (
      <div>
        <h2>Create Game</h2>
        <p>Here is your Game-ID</p>
        <h1>{this.state.id}</h1>
        <p>Others can use it to access this game session from their device!</p>

        <button onClick={this.handleClick}>Create</button>
      </div>
    );
  }
}

export default CreateGame;
