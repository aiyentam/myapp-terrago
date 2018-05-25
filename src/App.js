import React, { Component } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Main from "./main/Main";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="body-content">
          <Sidebar />
          <Main />
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
