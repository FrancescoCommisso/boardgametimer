import React, { Component } from "react";
import "./App.css";
import Game from "./components/Game";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateGame from "./components/CreateGame";

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      players: null,
      gameSettings: null
    };
  }

  handleFindGame = game => {
    console.log("handlefinegame() from App: ");
    this.setState({ gameSettings: game.gameSettings });
    this.setState({ players: game.players });
    this.setState({ id: game.id });

    this.setState({ showState: true });
  };

  addGame = () => {
    return <div>{<Game gameID={this.state.id} />}</div>;
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={CreateGame} />
          <Route path="/game/:id" component={Game} />
        </Switch>
      </Router>
    );

    //   if (this.state.id === null) {
    //     return (
    //       <div>
    //         <CreateGame onCreate={this.handleOnCreate} gameID={this.state.id} />
    //         <FindGame handleFindGame={this.handleFindGame} />
    //       </div>
    //     );
    //   }
    //   if (this.state.players === null) {
    //     return (
    //       <div>
    //         <AddPlayers onNext={this.handleNext} gameID={this.state.id} />
    //       </div>
    //     );
    //   }
    //   if (this.state.gameSettings === null) {
    //     return (
    //       <div>
    //         <AddSettings onNext={this.handleFinish} gameID={this.state.id} />
    //       </div>
    //     );
    //   }
    //   if (this.state.showState) {
    //     return <div>{<Game gameID={this.state.id} />}</div>;
    //   } else {
    //     return <div>Ya'll shouldnt be seeing this!</div>;
    //   }
  }
}
export default App;
