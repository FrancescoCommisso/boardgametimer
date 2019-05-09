import React, { Component } from "react";
import "./App.css";
import Game from "./components/Game";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateGame from "./components/CreateGame";
import Description from "./components/Description";
import FindGame from "./components/FindGame";
import { Container, Row, Col } from "react-bootstrap";

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
        <Container style={{ maxWidth: "700px" }}>
          <Row>
            <Col>
              <Switch>
                <Route exact path="/" component={Description} />
                <Route exact path="/create" component={CreateGame} />
                <Route exact path="/find" component={FindGame} />
                <Route path="/game/:id" component={Game} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}
export default App;
