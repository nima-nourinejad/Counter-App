import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: [],
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.handleDeccrement}
          className="btn btn-warning btn-sm ms-2"
        >
          Decreament
        </button>
        {this.renderTags()}
		<br/>
		
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
  renderTags() {
    if (this.state.tags.length === 0) return;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  handleIncrement = () => {
    this.setState({ value: this.state.value+ 1 });
  };
  handleDeccrement = () => {
    if (this.state.value === 0) return;
    this.setState({ value: this.state.value - 1 });
  };
}

export default Counter;
