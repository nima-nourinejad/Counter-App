import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0, name: "Product1", price: 101, img: "https://picsum.photos/200" },
      { id: 2, value: 0, name: "Product2", price: 102, img: "https://picsum.photos/200" },
      { id: 3, value: 0, name: "Product3", price: 103, img: "https://picsum.photos/200" },
      { id: 4, value: 0, name: "Product4", price: 104, img: "https://picsum.photos/200" },
    ],
  };

  handleDelete = (counterID) => {
    const counters = this.state.counters.filter((c) => c.id !== counterID);
    this.setState({ counters });
  };
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

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.reduce((a, b) => a + b.value, 0)}
		  totalValues={this.state.counters.reduce((a, b) => a + (b.value * b.price), 0)}
        />
        <nain className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </nain>
      </React.Fragment>
    );
  }
}

// function App() {
//   return (
//     <React.Fragment>
//       <NavBar />
//       <nain className="container">
//         <Counters />
//       </nain>
//     </React.Fragment>
//   );
// }

export default App;
