import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterID) => {
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        <br />
        {this.state.counters.map((counters) => (
          <Counter
            key={counters.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            counter={counters}
          />
        ))}
      </React.Fragment>
    );
  }
  handleReset = () => {
    const counters = this.state.counters.map((c) => ({ ...c, value: 0 }));
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    const counters = this.state.counters.map((c) =>
      c === counter ? { ...c, value: c.value + 1 } : c
    );
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    if (counter.value === 0) return;
    const counters = this.state.counters.map((c) =>
      c === counter ? { ...c, value: c.value - 1 } : c
    );
    this.setState({ counters });
  };
}

export default Counters;
