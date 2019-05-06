import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CreateGame from "./components/CreateGame";
import AddPlayers from "./components/AddPlayers";
import AddSettings from "./components/AddSettings";
import Game from "./components/Game";
import { thisExpression } from "@babel/types";
import FindGame from "./components/FindGame";

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      players: null,
      gameSettings: null
    };
  }

  handleOnCreate = id => {
    console.log("id: " + id);
    this.setState({ id: id });
  };

  handleNext = players => {
    this.setState({ players: players });
  };

  handleFinish = settings => {
    this.setState({ gameSettings: settings }, () => {
      fetch("/api/addgame", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      }).then(res => {
        if (res.status === 200) {
          this.setState({ showState: true });
        }
      });
    });
  };

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
        <div>
          <CreateGame onCreate={this.handleOnCreate} gameID={this.state.id} />
          <FindGame handleFindGame={this.handleFindGame} />
        </div>
      );
    }
    if (this.state.players === null) {
      return (
        <div>
          <AddPlayers onNext={this.handleNext} gameID={this.state.id} />
        </div>
      );
    }
    if (this.state.gameSettings === null) {
      return (
        <div>
          <AddSettings onNext={this.handleFinish} gameID={this.state.id} />
        </div>
      );
    }
    if (this.state.showState) {
      return <div>{<Game gameID={this.state.id} />}</div>;
    } else {
      return <div>Ya'll shouldnt be seeing this!</div>;
    }
  }
}
export default App;
