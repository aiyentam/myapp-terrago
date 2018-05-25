import React, { Component } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "seagreen"
    };
    this.onColorChange = this.onColorChange.bind(this);
  }

  onColorChange(e) {
    if (e.target.checked) {
      this.setState({
        color: e.target.value
      });
    }
  }

  render() {
    return (
      <div className="app">
        <Header onColorChange={this.onColorChange} color={this.state.color} />
        <div className="body-content">
          <Sidebar color={this.state.color} />
          <Main color={this.state.color} />
        </div>
        <div className="footer">
          <img src="/images/Screw.svg" alt="screw" />
          <h1 className="fixed">Fixed to the bottom</h1>
          <img src="/images/Screw.svg" alt="screw" />
        </div>
      </div>
    );
  }
}

export default App;
