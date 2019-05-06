import React, { Component } from "react";

class AddSettings extends Component {
  state = {
    time: null,
    autoStart: false
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
    return (
      <form>
        <div>
          <h2>Add Rules</h2>
          <p>How long should each turn be?</p>
          <input
            onChange={this.onTimeChange}
            name="time"
            style={{ backgroundColor: "green" }}
          />
          <label>Min</label>
          <p>Start each new turn automatically?</p>
          <input
            onChange={this.onAutoStartChange}
            name="autostart"
            type="checkbox"
            style={{ backgroundColor: "green" }}
          />
          <label>Yes/No</label>
          <div>
            <button onClick={this.handleSubmit}>Finish</button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddSettings;
