import React from "react";

import Playground from "./playground";
import Preview from "./preview";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">ThoughtSpot Everywhere Test Bed</header>
      <div className="container">
        <Playground />
        <Preview />
      </div>
    </div>
  );
}

export default App;
