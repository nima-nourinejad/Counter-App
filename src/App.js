import React from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <nain className="container">
        <Counters />
      </nain>
    </React.Fragment>
  );
}

export default App;
