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
    let p = this.state.players;
    let q = p + 1;
    this.setState({ players: q });
  };

  createInputs = () => {
    let inputs = [];

    for (let i = this.state.players; i > 0; i--) {
      inputs.push(
        <div>
          <input
            className="form-control my-1"
            name={i}
            placeholder={`p${i}`}
            onChange={this.handlechange}
          />
        </div>
      );
    }
    return inputs.reverse();
  };

  render() {
    let c = this.createInputs();
    return (
      <div className="top sub">
        <h2>Add Players</h2>
        <p>Enter each player's name</p>
        <form className="text-center block" onSubmit={this.handleSubmit}>
          <Container>
            {c}
            <Row className="">
              <Col>
                <button
                  type="button"
                  className="btn-block b-new-player my-2"
                  onClick={this.newPlayer}
                >
                  New Player
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

// class AddPlayers extends Component {
//   state = {
//     p1: "player1",
//     p2: "player2",
//     p3: "player3",
//     p4: "player4"
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     var players = [];
//     players.push(this.state.p1);
//     players.push(this.state.p2);
//     players.push(this.state.p3);
//     players.push(this.state.p4);

//     this.props.onNext(players);
//   };

//   handlep1change = e => {
//     this.setState({ p1: e.target.value });
//   };
//   handlep2change = e => {
//     this.setState({ p2: e.target.value });
//   };
//   handlep3change = e => {
//     this.setState({ p3: e.target.value });
//   };
//   handlep4change = e => {
//     this.setState({ p4: e.target.value });
//   };

//   render() {
//     return (
//       <div className="top sub">
//         <h2>Add Players</h2>
//         <p>Enter each player's name</p>
//         <form className="text-center block" onSubmit={this.handleSubmit}>
//           <Container>
//             <div>
//               <input
//                 className="form-control my-1"
//                 name="p1"
//                 placeholder="p1"
//                 onChange={this.handlep1change}
//               />
//             </div>
//             <div>
//               <input
//                 className="form-control my-1"
//                 name="p2"
//                 placeholder="p2"
//                 onChange={this.handlep2change}
//               />
//             </div>
//             <div>
//               <input
//                 className="form-control my-1"
//                 name="p3"
//                 placeholder="p3"
//                 onChange={this.handlep3change}
//               />
//             </div>
//             <div>
//               <input
//                 className="form-control my-1"
//                 name="p4"
//                 placeholder="p4"
//                 onChange={this.handlep4change}
//               />
//             </div>

//             <Row className="">
//               <Col>
//                 <button
//                   type="button"
//                   className="btn-block b-new-player my-2"
//                   onClick={this.newPlayer}
//                 >
//                   New Player
//                 </button>
//               </Col>
//             </Row>
//             <button className="btn-block b1 my-3">Next</button>
//           </Container>
//         </form>
//       </div>
//     );
//   }
// }

// export default AddPlayers;
