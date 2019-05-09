import React, { Component } from "react";

class AddSettings extends Component {
  state = {
    time: 1,
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
        <div className="text-center">
          <h2>Add Rules</h2>
          <p>How long should each turn be?</p>
          <input
            value={this.state.time}
            onChange={this.onTimeChange}
            name="time"
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
