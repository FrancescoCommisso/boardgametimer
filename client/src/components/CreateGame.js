import React, { Component } from "react";
import AddPlayers from "./AddPlayers";
import AddSettings from "./AddSettings";
import FindGame from "./FindGame";
import { Button } from "react-bootstrap";
import "./Main.css";

class CreateGame extends Component {
  state = {
    id: null,
    players: null,
    gameSettings: null
  };

  handleNext = players => {
    this.setState({ players: players });
  };

  componentDidMount() {
    this.setState({ new_id: this.generateID() });
  }

  handleFinish = settings => {
    this.setState({ gameSettings: settings }, () => {
      fetch("/api/addgame", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      }).then(this.props.history.push(`/game/${this.state.id}`));
    });
  };

  handleOnCreate = () => {
    console.log("id: " + this.state.new_id);
    this.setState({ id: this.state.new_id });
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
  handleFindGame = game => {
    console.log("handlefinegame() from App: ");
    this.setState({ gameSettings: game.gameSettings });
    this.setState({ players: game.players });
    this.setState({ id: game.id });

    this.setState({ showState: true });
  };

  render() {
    if (this.state.id === null) {
      return (
        <div className="sub top">
          <h2 className="">Create Game</h2>
          <p>Here is your Game-ID</p>
          <h1 className="text-button text-center my-3">{this.state.new_id}</h1>
          <p>
            Others can use it to access this game session from their device!
          </p>

          <button
            className="bg-info btn-block b1"
            onClick={this.handleOnCreate}
          >
            Create New Game
          </button>

          <div className="col" />
        </div>
      );
    } else if (this.state.players === null) {
      return <AddPlayers onNext={this.handleNext} />;
    } else {
      return <AddSettings onNext={this.handleFinish} />;
    }
  }
}

export default CreateGame;
