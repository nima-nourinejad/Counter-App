import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDecrement, onDelete, counters } =
      this.props;

    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <br />
        {counters.map((counters) => (
          <Counter
            key={counters.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counters}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
