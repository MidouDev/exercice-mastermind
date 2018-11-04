import React, { Component } from "react";
import Header from "./components/Header";
import Game from "./components/Game";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="mt-5">
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
