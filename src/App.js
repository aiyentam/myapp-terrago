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
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
